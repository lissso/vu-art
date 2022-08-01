// import { Link } from "react-router-dom";
import { getArtists } from "../Contentful/client";
import { useState, useEffect } from "react";
import LogoCube from "./Cube/cube";
import Header from "../Welcome/header";
import Footer from "../Welcome/footer";

import "./style.css";

export default function ContactForm() {
    const [status, setStatus] = useState("Submit");
    const [artists, setArtists] = useState();

    useEffect(() => {
        getArtists().then((x) => {
            console.log("getArtists", x);
            setArtists(x);
        });
    }, []);

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
            <Header />
            <div className="form">
                <div className="container-cube form-one flex-column ">
                    <LogoCube />
                </div>
                <div className="form-container form-two flex-column">
                    <h2>Connect with the artists</h2>

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
                            {artists &&
                                artists.map((x, i) => (
                                    <>
                                        <input
                                            className="checkbox"
                                            key={i}
                                            type="checkbox"
                                            id="artist"
                                            name={x.name}
                                            value={x.email}
                                        />
                                        <label key={"label-" + i}>
                                            {" "}
                                            {x.name}
                                        </label>{" "}
                                    </>
                                ))}
                            <br />
                        </div>
                        <button className="submitBtn" type="submit">
                            {status}
                        </button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
}
