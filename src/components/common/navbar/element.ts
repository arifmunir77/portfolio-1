import styled from "styled-components";

export const NavbarWrapper = styled.div`
  .img-fluid {
    height: 60px;
  }

  .bg-light {
    background: #000 !important;
  }

  a.nav-link {
    color: #fff;
    font-weight: 500;
  }

  .navbar-nav .nav-link.active,
  .navbar-nav .show > .nav-link {
    color: #fff;
    border: none !important;
  }

  svg {
    color: #fff;
    margin-left: 20px;
    font-size: 22px;
  }
`;

export const NavbarButton = styled.button`
  border: 2px solid #66fcf1;
  padding: 10px 20px;
  background-color: #000;
  color: #fff;
  font-weight: 500;
`;
