import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();


export const AuthProvider = ({ children }) => {

    const [token, setToken] = useState(localStorage.getItem("token"));
    const [user, setUser] = useState("");
    const [services, setServices] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    const authorizationToken = `Bearer ${token}`;

    //Store the token at localstorage
    const storeTokenAtLS = (serverToken) => {
        setToken(serverToken);
        return localStorage.setItem("token", serverToken);
    }

    //It means if token hai to loggedIn true hoga else false
    let isLoggedIn = !!token;

    //Remove the token from localstorage
    const LogoutUser = () => {
        setToken("");
        return localStorage.removeItem("token");
    }

    //JWT authentication || get currently logged in user data
    const userAuthentication = async () => {
        try {
            setIsLoading(true);
            const resp = await fetch("http://localhost:5000/api/auth/user", {

                method: "GET",
                headers: {
                    Authorization: authorizationToken
                }
            });

            if (resp.ok) {
                const data = await resp.json();
                setUser(data.userData);
                setIsLoading(false)
            }
            else {
                setIsLoading(false)
            }

        } catch (error) {
            console.error("Error fatching user data!");
        }
    }


    //Get services from the database
    const getServices = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/data/service', {
                method: "GET"
            })

            if (response.ok) {
                const data = await response.json();
                setServices(data.msg);
            }

        } catch (error) {
            console.log(`Services : ${error}`);
        }
    }

    useEffect(() => {
        getServices();
        userAuthentication();
    }, [])

    return <AuthContext.Provider value={{ storeTokenAtLS, LogoutUser, isLoggedIn, user, services, authorizationToken ,isLoading}} >
        {children}
    </AuthContext.Provider>
}

//Ye hook es file ka sara data le rha hai then we can use everywhere
export const useAuth = () => {
    return useContext(AuthContext);
}