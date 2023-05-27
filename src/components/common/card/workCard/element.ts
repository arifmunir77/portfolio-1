import styled from "styled-components";

export const WorkFlex = styled.div`
  display: flex;
  align-items: center;
`;

export const WorkFlexImg = styled.img`
  flex: 1;
  height: 300px;
  width: 300px;
  position: relative;
  transition: all 300ms ease-in-out;

  &:hover {
    flex: 4.3;
    background-color: red;
  }
`;
