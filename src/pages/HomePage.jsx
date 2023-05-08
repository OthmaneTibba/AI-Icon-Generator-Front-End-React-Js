import { useEffect } from "react";
import Header from "../components/Header";
import Content from "../components/Content";
import Cercle from "../components/Cercle";
import styled from "styled-components";

const HomePage = () => {
  return (
    <SHomePage>
      <Header />
      <Content />
      <Cercle />
    </SHomePage>
  );
};
export default HomePage;

const SHomePage = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  page-break-after: always;

  @media screen and (max-width: 900px) {
    overflow-y: scroll;
  }
  @media screen and (max-height: 900px) {
    overflow-y: scroll;
  }
`;
