import React from "react";
import { Container } from "react-bootstrap";
import DeveloperResource from "./DeveloperResource";

function Tutorials() {
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
        <h2>Time to build!</h2>
        <hr
          style={{
            width: "50vw",
            maxWidth: "150px",
            textAlign: "center",
          }}
        ></hr>
        <h3
          style={{ fontWeight: "300", marginTop: "30px", marginBottom: "60px" }}
        >
          Tutorials and resources to get you started
        </h3>
        <br></br>
        <div
          className="DeveloperResources"
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <DeveloperResource
            title={"OP Stack Developer Documentation"}
            image={"/images/pineconedocs.png"}
            url={"https://docs.pinecone.io/docs/openai"}
          />
          <DeveloperResource
            title={"OpenAI's New GPT 3.5 Embedding Model for Semantic Search"}
            image={"/images/opstackvideopreview.png"}
            url={"https://www.youtube.com/watch?v=ocxq84ocYi0"}
          />
          <DeveloperResource
            title={"Watch Webinar: Beyond Semantic Search with Pinecone"}
            image={"/images/pineconewebinar.png"}
            url={"https://www.youtube.com/watch?v=HtI9easWtAA"}
          />
          <DeveloperResource
            title={"Read: Finding Images With Words"}
            image={"/images/imageswithwords.png"}
            url={
              "https://medium.com/voxel51/finding-images-with-words-92b078314ed1"
            }
          />
        </div>
      </div>
    </Container>
  );
}

export default Tutorials;
