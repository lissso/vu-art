import "./style.css";

import { BrowserRouter, Route } from "react-router-dom";
// import FlipPage from "react-flip-page";
// import { useRef } from "react";

import Welcome from "../Welcome/welcome";
import Postcards from "../Components/postcards";
import Photos from "../Components/photo";
import Artists from "../Components/artists";
import Form from "../Components/form";
import Header from "../Welcome/header";
import Footer from "../Welcome/footer";
import Flop from "./flop";
import LogoCube from "./Cube/cube";

// import Images from "./Images/images";

export default function App() {
    return (
        <BrowserRouter>
            {/* <div className={"cube" + this.state.flopped ? " flop" : ""}> */}
            {/* <div className="flippety"> */}
            <Route exact path={"/"}>
                <Welcome />
            </Route>
            {/* </div>
                <div className="flop"> */}
            <Body />
            {/* </div> */}
            {/* </div> */}
            <Route path={"/cube"}>
                <LogoCube />
            </Route>
        </BrowserRouter>
    );
}

function Body() {
    return (
        <>
            <Header />

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

            <Footer />

            <Route path={"/flop"}>
                <Flop />
            </Route>
    
        </>
    );
}
