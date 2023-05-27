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
            <CollapsedNav>
              <NavLink>Home</NavLink>
              <NavLink>About</NavLink>
              <NavLink>Work</NavLink>
              <NavLink>Services</NavLink>
              <NavLink>Contact</NavLink>
            </CollapsedNav>
          )}
        </MainDiv>
      </MainContainer>
    </NavbarWrapper>
  );
}

export default Topbar;
