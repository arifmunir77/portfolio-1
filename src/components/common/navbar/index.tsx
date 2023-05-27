import { NavbarButton, NavbarWrapper } from "./element";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { MainContainer } from "components/common";
import { Image } from "react-bootstrap";
import { logo } from "assets";
import { RxHamburgerMenu } from "react-icons/rx";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

function Topbar() {
  const { ref, inView } = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        transition: {
          duration: 1,
        },
      });
    }

    if (!inView) {
      animation.start({
        opacity: 0,
      });
    }
  }, [inView]);

  return (
    <NavbarWrapper ref={ref} animate={animation}>
      <Navbar bg="light" expand="lg">
        <MainContainer>
          <Navbar.Brand href="#">
            <Image fluid src={logo} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll">
            <RxHamburgerMenu className="humbargurIcon" />
          </Navbar.Toggle>
          <Navbar.Collapse id="navbarScroll">
            <Nav className="mx-auto">
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action1">Services</Nav.Link>
              <Nav.Link href="#action1">Work</Nav.Link>
              <Nav.Link href="#action2">About</Nav.Link>
              <Nav.Link href="#">Blog</Nav.Link>
            </Nav>
            <>
              <NavbarButton>Contact</NavbarButton>
            </>
          </Navbar.Collapse>
        </MainContainer>
      </Navbar>
    </NavbarWrapper>
  );
}

export default Topbar;
