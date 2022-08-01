import "./style.css";

import { Link } from "react-router-dom";

export default function ModalPortrait(props) {
    if (!props.show) {
        return null;
    }

    // const closeOnEscapeKeyDown = (e) => {
    //     if ((e.charCode || e.keyCode) === 27) {
    //         props.onClose();
    //     }
    // };
    // useEffect(() => {
    //     document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    //     return function cleanup() {
    //         document.removeEventListener("keydown", closeOnEscapeKeyDown);
    //     };
    // }, []);

    return (
        <>
            <div className="modal">
                <div className="modal-content centered">
                    <div className="modal-close">
                        <button className="closeBtn" onClick={props.onClose}>
                            x
                        </button>
                    </div>
                    <div className="modal-header">
                        <h1 className="modal-title">{props.show.title}</h1>
                    </div>
                    <img className="modal-image" src={props.show.url} />
                    <div className="modal-body">{props.children}</div>
                    <div className="modal-footer">
                        <Link className="contact-footer" to="/contact">
                            <button className="contactBtn">Contact</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
