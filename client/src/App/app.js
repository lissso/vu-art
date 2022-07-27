import "./style.css";

import { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

import Logo from "../Logo/logo";
import Postcards from "../Postcards/postcards";
import Photos from "../Photography/photo";
import Artists from "../Artists/artists";

// import Images from "./Images/images";

export default class App extends Component {
    componentDidMount() {
        console.log("App mounted!");
    }
    render() {
        return (
            <>
                <div>
                    <BrowserRouter>
                        <nav>
                            <Link to="/">
                                <Logo />
                            </Link>
                            <header>
                                <Link to="/artists">artists</Link>
                                <h1 className="stripe">|</h1>
                                <Link to="/artist/postcards">postcards</Link>
                                <h1 className="stripe">|</h1>
                                <Link to="/artist/photos">photos</Link>
                            </header>
                        </nav>

                        <section id="body-of-app">
                            <Route path={"/artist/postcards"}>
                                <Postcards />
                            </Route>

                            <Route path={"/artist/photos"}>
                                <Photos />
                            </Route>

                            <Route path={"/artists/"}>
                                <Artists />
                            </Route>
                        </section>
                    </BrowserRouter>
                </div>
            </>
        );
    }
}
