import styled from "styled-components";

export const OurWorkWrapper = styled.div`
  background-color: #0b0c10;
  overflow: hidden;
  .ourContainer {
    margin-top: 4rem;
    margin-bottom: 4rem;
  }
`;

export const OurWorkHeading = styled.h1`
  font-size: 80px;
  font-family: "Teko";
  text-align: center;
  color: #fff;
  margin-bottom: 0px;
`;

export const OurWorkText = styled.p`
  text-align: center;
  color: #66fcf1;
`;

export const TabWrapper = styled.div`
  .ant-tabs-top > .ant-tabs-nav::before {
    border-bottom: none !important;
  }

  .ant-tabs .ant-tabs-tab-btn {
    color: #fff;
    outline: none;
    transition: all 0.3s;
  }

  .ant-tabs .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: #000;
    text-shadow: 0 0 0.25px currentcolor;
    background: #66fcf1;
    padding: 10px 30px;
  }
`;

//All Tab styling start

export const AllTabWrapper = styled.div``;

export const AlltabImgOne = styled.img`
  width: 40%;
  margin-right: 20px;
`;

export const AlltabImgTwo = styled.img`
  min-height: 100vh;
  max-width: 40%;
  -o-object-fit: cover;
  object-fit: cover;
`;

//All Tab styling end
