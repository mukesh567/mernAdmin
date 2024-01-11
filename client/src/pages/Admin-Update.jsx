import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from "../store/auth"
import { toast } from "react-toastify"


const AdminUpdate = () => {

    const [data, setData] = useState({
        username: "",
        email: "",
        phone: "",
    });

    const { authorizationToken } = useAuth();
    const params = useParams();

    const getSingleUserData = async () => {
        try {

            const response = await fetch(`http://localhost:5000/api/admin/users/${params.id}`, {
                method: "GET",
                headers: {
                    Authorization: authorizationToken
                }
            })

            const res = await response.json();
            setData(res[0]);

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getSingleUserData();
    }, []);


    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setData({
            ...data,
            [name]: value,
        });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            const response = await fetch(`http://localhost:5000/api/admin/users/update/${params.id}`, {
                method: "PATCH",
                headers: {
                    Authorization: authorizationToken,
                    'Content-Type': "application/json"
                },
                body: JSON.stringify(data)
            })

            if (response.ok) {
                toast.success("Updated Successfully!")
            }
            else {
                toast.error("Not Updated!")
            }
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <>
            <section className="section-contact">
                <div className="contact-content container">
                    <h1 className="main-heading">Update Data</h1>
                </div>

                <div className="container grid grid-two-cols">


                    <section className="section-form">
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="username">username</label>
                                <input
                                    type="text"
                                    name="username"
                                    id="username"
                                    placeholder="Enter your username"
                                    autoComplete="off"
                                    value={data.username}
                                    onChange={handleInput}
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="email">email</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Enter your email"
                                    autoComplete="off"
                                    value={data.email}
                                    onChange={handleInput}
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="phone">Mobile</label>
                                <input
                                    type="phone"
                                    name="phone"
                                    id="phone"
                                    placeholder="Enter your phone"
                                    autoComplete="off"
                                    value={data.phone}
                                    onChange={handleInput}
                                    required
                                />
                            </div>

                            <div>
                                <button type="submit">Update</button>
                            </div>
                        </form>
                    </section>
                </div>

            </section>
        </>
    )
}

export default AdminUpdate