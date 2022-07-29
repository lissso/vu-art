import "../../style.css";

import { Link } from "react-router-dom";

import FlipLogo from "./flipLogo";

export default function Welcome() {
    return (
        <div id="welcome">
            <Link className="logo-welcome" to="/">
                <FlipLogo />
            </Link>
            <section className="links-welcome">
                <Link to="/artists">artists</Link>
                <h1 className="stripe">|</h1>
                <Link to="/postcards">postcards</Link>
                <h1 className="stripe">|</h1>
                <Link to="/photos">photos</Link>
            </section>
        </div>
    );
}
