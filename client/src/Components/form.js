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

    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [fromEmail, setFromEmail] = useState("");
    const [emailArtist, setEmailArtist] = useState("");

    useEffect(() => {
        getArtists().then((x) => {
            console.log("getArtists", x);
            setArtists(x);
        });
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");
        console.log("sending", name, message, fromEmail, emailArtist);
        let response = await fetch(
            "https://api.emailjs.com/api/v1.0/email/send",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    service_id: "service_cihft5a",
                    user_id: "1wqjw3-9d15VoaV-5",
                    template_id: "template_c3o3uup",
                    template_params: {
                        from_name: name,
                        message: message,
                        reply_to: fromEmail,
                        email_artist: emailArtist,
                    },
                }),
            }
        );
        setStatus("Submit");
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
                            <input
                                type="text"
                                id="name"
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                required
                                value={fromEmail}
                                onChange={(e) => setFromEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="message">Message:</label>
                            <textarea
                                id="message"
                                required
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                        </div>
                        <div
                            onChange={(e) => {
                                setEmailArtist(e.target.value);
                            }}
                        >
                            <div className="artist-form">
                                {artists &&
                                    artists.map((x, i) => (
                                        <>
                                            <input
                                                className="checkbox"
                                                key={i}
                                                type="radio"
                                                name={"artist"}
                                                value={x.email}
                                            />
                                            <label key={"label-" + i}>
                                                {x.name}
                                            </label>
                                        </>
                                    ))}
                            </div>
                            <br />
                            <div className="button-form">
                                <button className="submitBtn" type="submit">
                                    {status}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
}
