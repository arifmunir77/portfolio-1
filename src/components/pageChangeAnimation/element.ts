import styled from "styled-components";
import { motion } from "framer-motion";

export const PageAnimatorWrapper = styled.div`
  height: 100vh;
  overflow: hidden !important;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100vw;
  top: 0;
  left: 0;
  z-index: 200;
  background-color: #000;
`;

export const Page = styled(motion.div)`
  background-color: #121212;
  flex: 1;
  height: 100%;
  width: 100%;
  border-top: none;
  border-bottom: none;
`;
