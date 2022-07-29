import "./style.css";

import { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Welcome from "../Welcome/welcome";
import Postcards from "../Components/postcards";
import Photos from "../Components/photo";
import Artists from "../Components/artists";
import Form from "../Components/form";
import Header from "../Welcome/header";
import Footer from "../Welcome/footer";

// import Images from "./Images/images";

export default class App extends Component {
    componentDidMount() {
        console.log("App mounted!");
    }
    render() {
        return (
            <BrowserRouter>
                <Route exact path={"/"}>
                    <Welcome />
                </Route>

                <Body />
            </BrowserRouter>
        );
    }
}

function Body() {
    return (
        <>
            <Header />
            <Route path={"/postcards"}>
                <Postcards />
            </Route>

            <Route path={"/photos"}>
                <Photos />
            </Route>

            <Route path={"/artists"}>
                <Artists />
            </Route>

            <Route path={"/contact"}>
                <Form />
            </Route>
            <Footer />
        </>
    );
}
