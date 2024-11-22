import { useEffect, useState } from "react";
import '../App.css'; // Import the CSS file
import { useAuth } from "../store/Auth"; 

const uri = 'http://localhost:5000/api/form/getAllcontact';

export default function Conact_view() {
    const [contacts, setContacts] = useState([]);
    const {token}=useAuth();

    const getContacts = async () => {
        try {
            const response = await fetch(uri,{
                headers:{
                    'Authorization':`Bearer ${token}`
                }
            });
            if (response.ok) {
                const data = await response.json();
        
                if (data && data.allContacts
                    ) { 
                    setContacts(data.allContacts); 
                } else {
                    console.error("Unexpected response structure:", data);
                }
            } else {
                console.error("Failed to fetch contacts");
            }
        } catch (error) {
            console.error("Error fetching contacts:", error);
        }
    };

    useEffect(() => {
        getContacts();
    }, []);

    return (
        <div className="container">
            <h1 className="header">All Contacts Details</h1>
            {contacts && contacts.length > 0 ? (
                <div className="contactsList">
                    {contacts.map((contact, index) => (
                        <div key={index} className="contactCard">
                            <p className="contactField"><strong>Username:</strong> {contact.username}</p>
                            <p className="contactField"><strong>Email:</strong> {contact.email}</p>
                            <p className="contactField"><strong>Message:</strong> {contact.message}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="noContacts">No contacts found.</p>
            )}
        </div>
    );
}
