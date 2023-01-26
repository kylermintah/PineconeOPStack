import React from "react";
import { Container } from "react-bootstrap";

function Community() {
  return (
    <Container>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: "4rem",
        }}
      >
        <h2>Built with the OP Stack</h2>
        <hr
          style={{
            width: "50vw",
            maxWidth: "150px",
            textAlign: "center",
          }}
        ></hr>
        <h3 style={{ fontWeight: "300", marginTop: "30px" }}>
          Community members are creating new digital experiences
        </h3>
        <br></br>
        <p>
          Are you using the OP Stack? Add your project!<br></br>
          <a
            href="https://twitter.com/intent/tweet?text=Check%20out%20what%20I've%20built%20using%20the%20OP%20Stack%20(%40openai%20%2B%20%40pinecone)!"
            target={"_blank"}
          >
            Tweet a link
          </a>{" "}
          and tag @openai and @pinecone
        </p>
      </div>
      <div className="marquee">
        {" "}
        <marquee>
          <img
            className="group"
            src="/images/opstacktweets.png"
            style={{ height: "40vw", minHeight: "500px" }}
          ></img>
          <img
            className="group"
            src="/images/opstacktweets.png"
            style={{ height: "40vw", minHeight: "500px", marginLeft: "56px" }}
          ></img>
        </marquee>
      </div>
    </Container>
  );
}

export default Community;
