import { Component } from "react";
import Flippy, { FrontSide, BackSide } from "react-flippy";
export default class FlipLogo extends Component {
    render() {
        return (
            <>
                {/* <img src="/logo.svg" /> */}
                <Flippy
                    flipOnHover={false} // default false
                    flipOnClick={true} // default false
                    flipDirection="horizontal" // horizontal or vertical
                    ref={(r) => (this.flippy = r)} // to use toggle method like this.flippy.toggle()
                    // if you pass isFlipped prop component will be controlled component.
                    // and other props, which will go to div
                    style={{ width: "200px", height: "200px" }} /// these are optional style, it is not necessary
                >
                    <FrontSide
                        style={{
                            backgroundColor: "#f819c7",
                        }}
                    >
                        <img className="logo-card" src="/VU.svg" />
                    </FrontSide>
                    <BackSide style={{ backgroundColor: "#f819c7" }}>
                        <img className="logo-card-art" src="/ART.svg" />
                    </BackSide>
                </Flippy>
            </>
        );
    }
}
