import React from "react";
import styled from "styled-components/macro";

import Bar from "./NavBar";
import CodeEditor from "./CodeEditor";
import {FaAngleDoubleRight} from "react-icons/fa";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
`;

const MainContainer = styled.main`
  flex: 1;
  display: flex;
  align-items: center;

  padding: 4rem 4rem;
  max-height: 100%;
`;

const FloatingBox = styled.section`
  padding: 1.5rem;
  flex: 1;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  border-radius: 10px;
  height: 100%;
`;

const ProgressIcon = styled.span`
  font-size: 3rem;
  color: #343a40;
  text-align: center;

  margin: 0 3rem;
`;

const Main = () => (
  <Container>
    <Bar />
    <MainContainer>
      <FloatingBox>
        <CodeEditor />
      </FloatingBox>
      <ProgressIcon>
        <FaAngleDoubleRight/>
      </ProgressIcon>
      <FloatingBox>
        <CodeEditor />
      </FloatingBox>
    </MainContainer>
  </Container>
);

export default Main;
