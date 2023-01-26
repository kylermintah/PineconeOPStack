import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function SiteNavbar() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="transparent"
      variant="light"
      style={{ marginTop: "30px" }}
    >
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="images/pinecone.png"
            width="100%"
            height="35px"
            className="d-inline-block align-top"
            alt="Pinecone logo"
            style={{ marginTop: "-0.4rem" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto NavLinkText">
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link href="#features">Docs</Nav.Link>

            <NavDropdown title="Learn" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Learning Center
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Showcasea</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Community</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                What's a vetor database?
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Company" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Learning Center
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Showcasea</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Community</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                What's a vetor database?
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#features">Contact</Nav.Link>
          </Nav>
          <Nav>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <Nav.Link href="#log-in">Log In </Nav.Link>
              <span style={{ marginInline: "20px" }}> | </span>
              <button className="ActionButton" link="#sign-up">
                Use Pinecone
              </button>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default SiteNavbar;
