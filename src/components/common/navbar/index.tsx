import { GiHamburgerMenu } from "react-icons/gi";
import { MainContainer } from "../mainStyle/mainStyle";
import {
  CollapsedNav,
  IconHolderDiv,
  MainDiv,
  NavLink,
  NavbarWrapper,
} from "./element";
import { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import styled, { keyframes } from "styled-components";
import { MenuButton } from "./icon";

function Topbar() {
  const [navCollapsed, setNavCollapsed] = useState(false);

  return (
    <NavbarWrapper>
      <MainContainer fluid>
        <MainDiv>
          <IconHolderDiv onClick={() => setNavCollapsed(!navCollapsed)}>
            <MenuButton
              isOpen={navCollapsed}
              onClick={() => setNavCollapsed(!navCollapsed)}
              color="#000"
              transition={{ ease: "easeOut", duration: 0.5 }}
            />
          </IconHolderDiv>

          {navCollapsed && (
            <CollapsedNav
              initial={{ y: -1000, x: 1000, opacity: 0 }}
              animate={{ y: 0, x: 0, opacity: 1 }}
              transition={{ duration: 0, type: "spring", stiffness: 120 }}
              exit={{ y: -1000, x: 1000, opacity: 0 }}
            >
              <NavLink
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
              >
                Home
              </NavLink>
              <NavLink
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3, duration: 1 }}
              >
                About
              </NavLink>
              <NavLink
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4, duration: 1 }}
              >
                Work
              </NavLink>
              <NavLink
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
              >
                Services
              </NavLink>
              <NavLink
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6, duration: 1 }}
              >
                Contact
              </NavLink>
            </CollapsedNav>
          )}
        </MainDiv>
      </MainContainer>
    </NavbarWrapper>
  );
}

export default Topbar;
