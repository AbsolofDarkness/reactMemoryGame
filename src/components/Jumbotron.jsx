import React from "react";
import { MDBJumbotron, MDBContainer } from "mdbreact";

const Jumbotron = () => {
    return (
        <MDBJumbotron fluid className="peach-gradient" style={{ height: "25rem" }}>
            <MDBContainer>
                <h1 className="text-center text-white display-2">Dessert Memory Game!</h1>
                <h3 className="text-center text-white display-4">Don't click the same dessert twice!</h3>
            </MDBContainer>
        </MDBJumbotron>
    );
}

export default Jumbotron;