import React from "react";
import Container from "react-bootstrap/Container";

function Title() {
  return (
    <Container>
      <div
        className="Introduction"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "10VH",
        }}
      >
        <subtitle>INTRODUCING</subtitle>
        <br></br>
        <h1>The OP Stack</h1>
        <div className="OPRow">
          <div className="OPLogo">
            <img src="/images/openai.png" width={"110rem"} />
          </div>
          <div className="OPLogo">
            <img src="images/plus.svg" />
          </div>
          <div className="OPLogo">
            <img src="/images/pinecone.png" width={"135rem"} />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Title;
