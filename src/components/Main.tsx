import React from "react";
import styled from "styled-components/macro";

import Bar from "./NavBar";
import CodeEditor from "./CodeEditor";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
`;

const MainContainer = styled.main`
  flex: 1;
  display: flex;
`;

const FloatingBox = styled.section`
  flex: 1;
  margin: 4rem;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  border-radius: 10px;
`;

const Main = () => (
  <Container>
    <Bar />
    <MainContainer>
      <FloatingBox>
        <CodeEditor />
      </FloatingBox>
      <FloatingBox>
        <CodeEditor />
      </FloatingBox>
    </MainContainer>
  </Container>
);

export default Main;
