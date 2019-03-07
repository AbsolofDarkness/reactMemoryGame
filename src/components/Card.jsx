import React from "react";
import { MDBCard, MDBCol, MDBCardImage } from "mdbreact";

function Card (props) {
    return (
        <MDBCol>
            <MDBCard className="my-3" style={{ width: "15rem", height: "15rem" }}>
                <span onClick={() => props.clickedCard(props.id)}>
                    <MDBCardImage src={props.image} style={{ width: "15rem", height: "15rem" }} waves={false} />
                </span>
            </MDBCard>
        </MDBCol>
    );
}

export default Card;