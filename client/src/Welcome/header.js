import "../../style.css";
// import { BrowserRouter, Route, Link } from "react-router-dom";
import { Link } from "react-router-dom";

import Logo from "../Components/logo";

export default function Header() {
    return (
        <>
            <nav>
                <Link className="logo" to="/">
                    <Logo />
                </Link>
                <header>
                    <Link to="/artists">artists</Link>
                    <h1 className="stripe">|</h1>
                    <Link to="/postcards">postcards</Link>
                    <h1 className="stripe">|</h1>
                    <Link to="/photos">photos</Link>
                </header>
            </nav>
        </>
    );
}
