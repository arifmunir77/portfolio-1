import { NavbarButton, NavbarWrapper } from "./element";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { MainContainer } from "components/common";
import { Image } from "react-bootstrap";
import { logo } from "assets";
import Form from "react-bootstrap/Form";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaSearch } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";

function Topbar() {
  return (
    <NavbarWrapper>
      <Navbar bg="light" expand="lg">
        <MainContainer>
          <Navbar.Brand href="#">
            {" "}
            <Image fluid src={logo} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll">
            <RxHamburgerMenu className="humbargurIcon" />
          </Navbar.Toggle>
          <Navbar.Collapse id="navbarScroll">
            <Nav className="justify-content-end flex-grow-1 pe-3" navbarScroll>
              <NavDropdown title="Home" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Home</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Services" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Home</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#action1">Work</Nav.Link>
              <Nav.Link href="#action2">About</Nav.Link>
              <Nav.Link href="#">Blog</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <NavbarButton>Contact</NavbarButton>
            </Form>
            <FaSearch className="searchIcon" />
          </Navbar.Collapse>
        </MainContainer>
      </Navbar>
    </NavbarWrapper>
  );
}

export default Topbar;
