import { MainContainer } from "../mainStyle/mainStyle";
import {
  CollapsedNav,
  IconHolderDiv,
  MainDiv,
  NavLink,
  NavbarWrapper,
} from "./element";
import { useState } from "react";
import { MenuButton } from "./icon";
import { AnimatePresence } from "framer-motion";

function Topbar() {
  const [navCollapsed, setNavCollapsed] = useState(false);

  return (
    <NavbarWrapper>
      <MainContainer fluid>
        <MainDiv>
          <IconHolderDiv
            onClick={() => setNavCollapsed(!navCollapsed)}
            whileHover={{ scale: 1.25 }}
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
                  transition: { duration: 1, ease: "easeInOut" },
                }}
              >
                <NavLink
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 1 }}
                  whileHover={{ scale: 1.5 }}
                >
                  Home
                </NavLink>
                <NavLink
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2, duration: 1.1 }}
                >
                  About
                </NavLink>
                <NavLink
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.3, duration: 1.2 }}
                >
                  Work
                </NavLink>
                <NavLink
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.4, duration: 1.3 }}
                >
                  Services
                </NavLink>
                <NavLink
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5, duration: 1.4 }}
                >
                  Contact
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
