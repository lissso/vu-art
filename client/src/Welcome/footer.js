import "../../style.css";
// import { BrowserRouter, Route, Link } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer id="footer">
            <div>created with ❤︎ Lisso</div>
            <Link className="contact-footer" to="/contact">
                contact
            </Link>
        </footer>
    );
}
