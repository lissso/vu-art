import * as React from "react";
import "./cube.css";
import Cube from "react-3d-cube";

class LogoCube extends React.Component {
    render() {
        return (
            <div>
                <center>
                    {/* <h1>react-3d-cube</h1>
                    <div
                        style={{
                            width: 300,
                            height: 300,
                        }}
                    >
                        <Cube size={300} index="front" />
                    </div> */}

                    <div
                        style={{
                            width: 300,
                            height: 300,
                        }}
                    >
                        <Cube size={300} index="front">
                            <div>
                                {/* front */}
                                <img src="/logo.svg" />
                            </div>
                            <div>
                                <img
                                    style={{ backgroundColor: "#f819c7" }}
                                    className="logo-card"
                                    src="/VU.svg"
                                />
                            </div>
                            <div>
                                <img
                                    style={{
                                        backgroundColor: "#f819c7",
                                        height: "300px",
                                    }}
                                    className="logo-card"
                                    src="/ART.svg"
                                />
                            </div>
                            <div>
                                <img src="/logo.svg" />
                            </div>
                            <div>
                                <img
                                    style={{ backgroundColor: "#f819c7" }}
                                    className="logo-card"
                                    src="/VU.svg"
                                />
                            </div>
                            <div>
                                <img className="logo-card" src="/ART.svg" />
                            </div>
                        </Cube>
                    </div>
                </center>
            </div>
        );
    }
}
export default LogoCube;
