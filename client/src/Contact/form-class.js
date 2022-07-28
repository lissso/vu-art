import { Component } from "react";
// import { Link } from "react-router-dom";
import { getEntriesByArtists } from "../Contentful/client";

import "./style.css";

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = { value: "", };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.artists = getEntriesByArtists();
        console.log("this.artists", this.artists);
    }

    handleChange(event) {
        this.setState({ value: event.target.value }, () =>
            console.log("this.state: ", this.state)
        );
    }
    handleSubmit(event) {
        alert("A name was submitted: " + this.state.value);
        event.preventDefault();
    }
    render() {
        return (
            <>
                <h1>Contact our artists for products collabs & co</h1>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="email"
                        name="email"
                        value={this.state.value}
                        placeholder="email"
                        onChange={(event) => this.handleChange(event)}
                    />
                    <input
                        type="text"
                        name="name"
                        value={this.state.value}
                        placeholder="name"
                        onChange={(event) => this.handleChange(event)}
                    />
                    <input
                        type="checkbox"
                        id="artist1"
                        name="artist1"
                        value="artist1"
                    />
                    <label> artist1</label> <br />
                    {/* {this.artists.map((artist) => {
                        console.log("artiist form", artist);
                        return (
                            <>
                                <input
                                    type="checkbox"
                                    id="artist2"
                                    name={artist.id}
                                    value="artist2"
                                />
                                <label>{artist.fields.name}</label>
                            </>
                        );
                    })} */}
                    <br />
                    <label>
                        Pick your favorite flavor:
                        <select
                            value={this.state.value}
                            type=""
                            onChange={this.handleChange}
                            // multiple={true}
                        >
                            <option value="grapefruit">Grapefruit</option>
                            <option value="lime">Lime</option>
                            <option value="coconut">Coconut</option>
                            <option value="mango">Mango</option>
                        </select>
                    </label>
                    <input
                        type="text"
                        name="text"
                        value={this.state.value}
                        placeholder="message"
                        onChange={(event) => this.handleChange(event)}
                    />
                    <button className="submit">Submit</button>
                </form>

                {/* <p className="login">
                Forgot password?
                <Link to="/reset">Click here reset your password!</Link>
            </p> */}
            </>
        );
    }
}
