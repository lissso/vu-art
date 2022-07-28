// import { Link } from "react-router-dom";
import { getEntriesByArtists } from "../Contentful/client";
import { useState } from "react";

import "./style.css";

export default function ContactForm() {
    const [status, setStatus] = useState("Submit");
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");
        const { name, email, message } = e.target.elements;
        let details = {
            name: name.value,
            email: email.value,
            message: message.value,
        };
        let response = await fetch("http://localhost:5000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(details),
        });
        setStatus("Submit");
        let result = await response.json();
        alert(result.status);
    };

    return (
        <>
            <h1>Connect with our artists: </h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" required />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" required />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" required />
                </div>
                <div>
                    <input
                        type="checkbox"
                        id="artist1"
                        name="artist1"
                        value="artist1"
                    />
                    <label> artist1</label> <br />
                </div>
                <button type="submit">{status}</button>
            </form>
        </>
    );
}
