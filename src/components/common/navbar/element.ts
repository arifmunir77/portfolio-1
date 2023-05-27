import styled from "styled-components";
import { motion } from "framer-motion";

export const NavbarWrapper = styled(motion.div)`
  .img-fluid {
    height: 60px;
  }

  .bg-light {
    background: #000 !important;
    border-bottom: 2px solid #66fcf1;
    padding-top: 10px;
    padding-bottom: 10px;

    @media (max-width: 991.98px) {
      padding-bottom: 20px;
    }
  }

  a.nav-link {
    color: #fff;
    font-weight: 600;
    font-size: 18px;
    border-bottom: 2px solid transparent;
    transition: 0.3s ease-in-out all;
    margin-left: 1rem;

    @media (max-width: 991.98px) {
      text-align: center;
      border-bottom: none;
      margin-left: 0rem;

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
  font-size: 18px;

  @media (max-width: 991.98px) {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
`;
