import * as React from "react";
import "./cube.css";
import Cube from "react-3d-cube";

class LogoCube extends React.Component {
    render() {
        return (
            <div>
                <center>
                    <h1>react-3d-cube</h1>
                    <h2>no children</h2>
                    <div
                        style={{
                            width: 300,
                            height: 300,
                        }}
                    >
                        <Cube size={300} index="front" />
                    </div>
                    <h2>set children</h2>
                    <div
                        style={{
                            width: 300,
                            height: 300,
                        }}
                    >
                        <Cube size={300} index="front">
                            <div>front</div>
                            <div>right</div>
                            <div>back</div>
                            <div>left</div>
                            <div>top</div>
                            <div>bottom</div>
                        </Cube>
                    </div>
                </center>
            </div>
        );
    }
}
export default LogoCube;
