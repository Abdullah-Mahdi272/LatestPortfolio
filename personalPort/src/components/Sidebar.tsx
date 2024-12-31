import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import chibi from "./holo30.png";

function Sidebar() {
  return (
    <Navbar
      expand="sm"
      className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top"
    >
      <Container>
        {/* Branding with logo */}
        <Navbar.Brand href="/">
          <img
            src={chibi}
            width="30"
            height="30"
            alt="Image"
            className="d-inline-block align-top"
          />{" "}
          Abdullah Mahdi
        </Navbar.Brand>

        {/* Navbar toggle for small screens */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Collapsible navigation links */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* Main navigation links */}
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link
              href="https://github.com/Abdullah-Mahdi272"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Nav.Link>

            {/* Dropdown menu */}
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="/action/3.1">Experience</NavDropdown.Item>
              <NavDropdown.Item href="/action/3.3">Projects</NavDropdown.Item>
              <NavDropdown.Item href="/action/3.2">History</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/action/3.4">About Me</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Sidebar;
