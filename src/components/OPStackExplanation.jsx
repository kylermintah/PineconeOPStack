import React from "react";
import Diagram from "./Diagram";
function OPStackExplanation() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h2>How does the OP Stack work?</h2>
      <hr
        style={{
          width: "50vw",
          maxWidth: "150px",
          textAlign: "center",
        }}
      ></hr>
      <h3 style={{ fontFamily: "Inter", opacity: 0.35, fontWeight: 400 }}>
        A Simple Semantic Search Example
      </h3>

      <Diagram></Diagram>
    </div>
  );
}

export default OPStackExplanation;
