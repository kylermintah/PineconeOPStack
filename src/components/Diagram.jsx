import React from "react";

function Diagram() {
  return (
    <div
      className="OPDiagram"
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <img
        src="/images/opstack.gif"
        style={{
          width: "60vw",
          minWidth: "500px",
          height: "100%",
          opacity: "0.85",
        }}
      />
      <div style={{ inlineSize: "30vw", minWidth: "400px", paddingTop: "6vh" }}>
        <ol class="list">
          <li class="list-item one">
            <span>
              Use the
              <b>
                {" "}
                <a
                  href="https://beta.openai.com/docs/guides/embeddings"
                  target={"_blank"}
                >
                  OpenAI Embedding API
                </a>{" "}
                to generate vector embeddings
              </b>{" "}
              of your documents (or any text data).
            </span>
          </li>
          <li class="list-item two">
            <span>
              Upload those vector embeddings into the{" "}
              <a href="https://www.pinecone.io/">
                <b>Pinecone vector database</b>
              </a>
              , which can store and index millions/billions of these vector
              embeddings, to empower search at ultra-low latencies.
            </span>
          </li>
          <li class="list-item three">
            <span>
              Pass your <b>query</b> text or document through the OpenAI
              Embedding API.
            </span>
          </li>
          <li class="list-item four">
            <span>
              Send the resulting vector embedding as a query to Pinecone.
            </span>
          </li>
          <li class="list-item five">
            <span>
              <b>Get back semantically similar documents</b>, even if they don't
              share any keywords with the query.
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Diagram;
