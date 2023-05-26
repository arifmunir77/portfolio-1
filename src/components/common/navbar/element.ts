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
    border-bottom: 2px solid transparent;

    &:hover {
      border-bottom: 2px solid #66fcf1;
    }

    @media (max-width: 991.98px) {
      text-align: center;
      border-bottom: none;

      &:hover {
        border-bottom: none;
      }
    }
  }

  .navbar-nav .nav-link.active,
  .navbar-nav .show > .nav-link {
    color: #fff;
    border: none !important;
  }
  .navbar-toggler-icon {
    background-image: url("data:image/svg+xml;..") !important;
  }

  @media (max-width: 991.98px) {
    a#navbarScrollingDropdown {
      text-align: center;
    }
  }

  .searchIcon {
    color: #fff;
    margin-left: 20px;
    font-size: 22px;
    cursor: pointer;
    @media (max-width: 991.98px) {
      display: none;
    }
  }

  .humbargurIcon {
    color: #fff !important;
  }
`;

export const NavbarButton = styled.button`
  border: 2px solid #66fcf1;
  padding: 10px 20px;
  background-color: #000;
  color: #fff;
  font-weight: 500;

  @media (max-width: 991.98px) {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
`;
