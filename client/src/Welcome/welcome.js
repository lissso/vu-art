import "./style.css";

import { BrowserRouter, Route, Link } from "react-router-dom";

import Logo from "../Logo/logo";

export default function Welcome() {
    return (
        <div id="welcome">
            <BrowserRouter>
                <Link className="logo-welcome" to="/">
                    <Logo />
                </Link>
                <section className="links-welcome">
                    <Link to="/artists">artists</Link>
                    <h1 className="stripe">|</h1>
                    <Link to="/artist/postcards">postcards</Link>
                    <h1 className="stripe">|</h1>
                    <Link to="/artist/photos">photos</Link>
                </section>
              
            </BrowserRouter>
        </div>
    );
}
