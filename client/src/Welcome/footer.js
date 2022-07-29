import "../../style.css";
// import { BrowserRouter, Route, Link } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <>
            <footer>
                <Link className="contact-footer" to="/contact">
                    contact
                </Link>
            </footer>
        </>
    );
}
