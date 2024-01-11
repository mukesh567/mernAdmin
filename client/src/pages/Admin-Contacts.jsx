import { useEffect, useState } from "react"
import { useAuth } from "../store/auth"
import { toast } from "react-toastify"


export const AdminContacts = () => {
    const [contacts, setContacts] = useState([]);

    const { authorizationToken } = useAuth();

    const getAllContactsData = async () => {

        try {

            const response = await fetch("http://localhost:5000/api/admin/contacts", {
                method: "GET",
                headers: {
                    Authorization: authorizationToken
                }
            })

            const data = await response.json();
            setContacts(data);

        } catch (error) {
            console.log(error);
        }
    }

    const deleteContact = async (id) => {
        try {

            const response = await fetch(`http://localhost:5000/api/admin/contacts/delete/${id}`, {
                method: "DELETE",
                headers: {
                    Authorization: authorizationToken
                }
            })

            const data = await response.json();
            toast.success(data.message)

            if (response.ok) {
                getAllContactsData();
            }

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getAllContactsData();
    }, []);


    return <>
        <section className="admin-contacts-section">
            <div className="container">
                <h1>Admin Contact Data</h1>
            </div>

            <div className="container ">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Message</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            contacts.map((currContact, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{currContact.username}</td>
                                        <td>{currContact.email}</td>
                                        <td className="msg">{currContact.message}</td>

                                        <td>
                                            <button onClick={() => deleteContact(currContact._id)}>
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </section>
    </>
}