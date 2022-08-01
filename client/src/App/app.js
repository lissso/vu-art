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
import ArtistPortrait from "../Components/artist-portrait";

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
                <Route path={"/portrait"}>
                    <ArtistPortrait />
                </Route>
            </div>

            <Footer />

            <Route path={"/flop"}>
                <Flop />
            </Route>
        </>
    );
}
