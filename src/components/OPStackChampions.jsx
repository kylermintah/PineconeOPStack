import React from "react";
import { Container } from "react-bootstrap";

function OPStackChampions() {
  return (
    <div>
      <Container>
        <div
          className="Introduction"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "6VH",
          }}
        >
          <h2>Check out Industry-Early Adopters</h2>
          <hr
            style={{
              width: "50vw",
              maxWidth: "150px",
              textAlign: "center",
            }}
          ></hr>
          <div
            className="OPRow"
            style={{ opacity: 1, width: "fit-content", marginTop: "60px" }}
          >
            <div className="OPLogo Spaced HighlightOnHover">
              <a
                href="https://get.mem.ai/blog/building-mem-x"
                target={"_blank"}
              >
                <img src="/images/mem.svg" width={"110rem"} />
              </a>
            </div>

            <div className="OPLogo Spaced HighlightOnHover">
              <a
                href="https://expel.com/blog/how-we-built-it-alert-similarity/"
                target={"_blank"}
              >
                <img src="/images/expel.svg" width={"110rem"} />
              </a>
            </div>
          </div>
          <h4
            style={{
              marginTop: "70px",
              opacity: "0.3",
              textAlign: "center",
              fontFamily: "Inter",
              fontWeight: "400",
            }}
          >
            and others... many consider OP their <br></br> "secret sauce"
          </h4>
        </div>
      </Container>
    </div>
  );
}

export default OPStackChampions;
