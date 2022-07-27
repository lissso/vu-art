import "./style.css";

import { Component } from "react";
import Images from "../Postcards/postcards";

// import Images from "./Images/images";

export default class App extends Component {
    componentDidMount() {
        console.log("App mounted!");
    }
    render() {
        return (
            <>
                <div>
                    <h1>Hello</h1>
                    <Images />
                </div>
            </>
        );
    }
}
