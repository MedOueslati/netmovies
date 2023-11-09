import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

// Functional component for the navigation bar
const NavBar = () => {
  return (
    <div>
      {/* Bootstrap Navbar with a dark background */}
      <Navbar bg="dark" variant="dark">
        {/* Container for the Navbar content */}
        <Container>
          {/* Navbar Brand with a logo */}
          <Navbar.Brand href="#home">
            <img src="./logo.png" alt="logo" width="" height="40" />
          </Navbar.Brand>

          {/* Navbar links aligned to the right */}
          <Nav className="ms-auto">
            <Nav.Link href="">Home</Nav.Link>
            <Nav.Link href="">Features</Nav.Link>
            <Nav.Link href="">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
