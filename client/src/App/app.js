import "./style.css";

import { BrowserRouter, Route } from "react-router-dom";
// import FlipPage from "react-flip-page";
// import { useRef } from "react";

import Welcome from "../Welcome/welcome";
import Postcards from "../Components/postcards";
import Photos from "../Components/photo";
import Artists from "../Components/artists";
import Form from "../Components/form";
import Flop from "./flop";

// import Images from "./Images/images";

export default function App() {
    return (
        <BrowserRouter>
            <Route exact path={"/"}>
                <Welcome />
            </Route>
            <Body />
        </BrowserRouter>
    );
}

function Body() {
    return (
        <>
            <div id="content-wrap">
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
            </div>

            <Route path={"/flop"}>
                <Flop />
            </Route>
        </>
    );
}
