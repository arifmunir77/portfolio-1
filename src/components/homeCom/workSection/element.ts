import styled from "styled-components";

export const WorkWrapper = styled.div`
  overflow: hidden;
  background-color: rgb(18, 18, 18);

  .main-col {
    flex: 1;
    transition: 0.3s ease-in-out all;
    padding: 0;
    margin: 0;

    &:hover {
      flex: 1.5;
      transition: 0.3s ease-in-out all;

      @media (max-width: 991.98px) {
        flex: 1;
      }
    }
  }
`;
