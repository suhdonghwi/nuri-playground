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
`;

const Main = () => (
  <Container>
    <Bar />
    <MainContainer>
      <CodeEditor />
    </MainContainer>
  </Container>
);

export default Main;
