import "./style.css";

import { Component } from "react";

export default class Flop1 extends Component {
    constructor() {
        super();
        this.state = {
            flopped: false,
        };
    }

    // componentDidMount() {
    //     console.log("App mounted!");
    // }

    toggle() {
        this.setState(
            {
                flopped: !this.state.flopped,
            },
            console.log("toggle")
        );
    }

    render() {
        return (
            <>
                <a
                    href="https://spiced-academy.com"
                    onClick={() => this.toggle()}
                    className={`cube ${this.state.flopped ? "flop" : ""}`}
                >
                    <div className="flippety">Flip</div>
                    <div className="flop">Flop</div>
                </a>
            </>
        );
    }
}
