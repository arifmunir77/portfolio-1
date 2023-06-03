import { MainContainer } from "../mainStyle/mainStyle";
import {
  CollapsedNav,
  IconHolderDiv,
  MainDiv,
  NavLink,
  NavbarWrapper,
  VideoContainer,
} from "./element";
import { useState } from "react";
import { MenuButton } from "./icon";
import { AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { videoLogo } from "assets";
import { Image } from "react-bootstrap";
import { ContactModal } from "components/common";

function Topbar() {
  const [navCollapsed, setNavCollapsed] = useState(false);

  return (
    <NavbarWrapper>
      <MainContainer>
        <MainDiv>
          <VideoContainer>
            <Link to="/">
              <Image fluid src={videoLogo} className="image" />
            </Link>
          </VideoContainer>
          <IconHolderDiv
            onClick={() => setNavCollapsed(!navCollapsed)}
            animate={{
              scale: [1, 1.2, 1.2, 1, 1],
              rotate: [0, 0, 180, 180, 0],
              borderRadius: ["50%", "50%", "50%", "50%", "50%"],
            }}
            transition={{
              duration: 3,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.8, 1],
              repeat: Infinity,
              repeatDelay: 2,
            }}
          >
            <MenuButton
              isOpen={navCollapsed}
              onClick={() => setNavCollapsed(!navCollapsed)}
              color="#000"
              transition={{ ease: "easeOut", duration: 0.5 }}
            />
          </IconHolderDiv>

          <AnimatePresence>
            {navCollapsed && (
              <CollapsedNav
                key={"nav"}
                initial={{ y: -1000, x: 1000, opacity: 0 }}
                animate={{ y: 0, x: 0, opacity: 1 }}
                transition={{ type: "spring", bounce: 0.4 }}
                exit={{
                  y: -1000,
                  x: 1000,
                  opacity: 0,
                  transition: { duration: 0.5, ease: "easeInOut" },
                }}
              >
                <Link to="/">
                  <NavLink
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                  >
                    Home
                  </NavLink>
                </Link>
                <Link to="/about-us">
                  <NavLink
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 1.1 }}
                  >
                    About
                  </NavLink>
                </Link>

                <Link to="/work">
                  <NavLink
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.3, duration: 1.2 }}
                  >
                    Work
                  </NavLink>
                </Link>

                <Link to="/services">
                  <NavLink
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.4, duration: 1.3 }}
                  >
                    Services
                  </NavLink>
                </Link>
                <NavLink
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5, duration: 1.4 }}
                >
                  <ContactModal />
                </NavLink>
              </CollapsedNav>
            )}
          </AnimatePresence>
        </MainDiv>
      </MainContainer>
    </NavbarWrapper>
  );
}

export default Topbar;
