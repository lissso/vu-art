import "./style.css";

import { useState } from "react";

export default function Flop() {
    const [flop, setFlop] = useState(false);

    const toggle = () => {
        setFlop(!flop);
    };

    return (
        <>
            <div
                onClick={() => toggle()}
                className={`cube ${flop ? "flop" : ""}`}
            >
                <div className="flippety">Flip</div>
                <div className="flop">Flop</div>
            </div>
        </>
    );
}
