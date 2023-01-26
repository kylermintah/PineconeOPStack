import React from "react";
import Container from "react-bootstrap/Container";

function Action() {
  return (
    <Container>
      <div
        className="Introduction"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h3>The development stack of tomorrow is here</h3>
        <div
          style={{
            width: "20vw",
            minWidth: "450px",
            opacity: 0.7,
            paddingTop: "0.5rem",
            paddingBottom: "1rem",
          }}
        >
          <p style={{ textAlign: "center" }}>
            <a
              href="https://openai.com"
              target={"_blank"}
              style={{ fontWeight: "bold" }}
            >
              OpenAI
            </a>{" "}
            &
            <a
              href="https://pinecone.io"
              target={"_blank"}
              style={{ fontWeight: "bold" }}
            >
              {" "}
              Pinecone
            </a>{" "}
            form a crazy powerful combination for building AI applications that
            understand and remember. <br></br>
            <br></br>Some might call this stack{" "}
            <span style={{ color: "#3b3a44", fontWeight: "bolder" }}>o</span>ver
            <span style={{ color: "#3b3a44", fontWeight: "bolder" }}>p</span>
            owered ... 😎
          </p>
        </div>
        <button
          className="ActionButton"
          style={{ height: "3.5rem", width: "15rem", marginTop: "35px" }}
          onClick={handleScroll}
        >
          Start Building Today
        </button>
      </div>
    </Container>
  );
}

function handleScroll() {
  window.scroll({
    top: document.body.offsetHeight,
    left: 0,
    behavior: "smooth",
  });
}

export default Action;
