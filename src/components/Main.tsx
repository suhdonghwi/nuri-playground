import React from "react";
import styled from "styled-components/macro";

import Bar from "./NavBar";
import CodeEditor from "./CodeEditor";
import { FaAngleDoubleRight } from "react-icons/fa";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
`;

const MainContainer = styled.main`
  flex: 1;
  display: flex;
  align-items: center;

  padding: 4rem 5rem;
  max-height: 100%;
`;

const SubContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const FloatingBox = styled.section`
  flex: 1;

  display: flex;
  flex-direction: column;

  padding: 1.5rem 2rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  border-radius: 10px;
  height: 100%;

  box-sizing: border-box;
`;

const BoxTitle = styled.h2`
  margin 0;
  padding: 0rem 0 0.7rem 0;
  margin-bottom: 1rem;
  border-bottom: 1px solid #ced4da;
`;

const ProgressIcon = styled.span`
  font-size: 3rem;
  color: #343a40;
  text-align: center;

  margin: 0 4rem;
`;

const Main = () => (
  <Container>
    <Bar />
    <MainContainer>
      <SubContainer>
        <FloatingBox style={{flex: 2, marginBottom: "3rem"}}>
          <BoxTitle>코드</BoxTitle>
          <CodeEditor />
        </FloatingBox>

        <FloatingBox style={{flex: 1}}>
          <BoxTitle>입력</BoxTitle>
          <CodeEditor />
        </FloatingBox>
      </SubContainer>
      <ProgressIcon>
        <FaAngleDoubleRight />
      </ProgressIcon>
      <FloatingBox>
        <BoxTitle>출력</BoxTitle>
        <CodeEditor />
      </FloatingBox>
    </MainContainer>
  </Container>
);

export default Main;
