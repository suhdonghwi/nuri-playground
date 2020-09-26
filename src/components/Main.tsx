import React, { useState } from "react";
import styled from "styled-components/macro";
import axios from "axios";

import Bar from "./NavBar";
import CodeEditor from "./CodeEditor";
import { FaAngleDoubleRight } from "react-icons/fa";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;

  @media screen and (max-width: 760px) {
    height: auto;
  }
`;

const MainContainer = styled.main`
  flex: 1;
  display: flex;
  align-items: center;

  padding: 4rem 5rem;
  max-height: 100%;

  @media screen and (max-width: 760px) {
    flex-direction: column;
    height: 100%;
    max-height: auto;
  }

  @media screen and (max-width: 530px) {
    padding: 2rem 2rem;
  }
`;

const SubContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;

  @media screen and (max-width: 1200px) {
    margin-right: 3rem;
  }

  @media screen and (max-width: 760px) {
    margin-right: 0;
    height: 1000px;
    margin-bottom: 3rem;
  }
`;

const FloatingBox = styled.section`
  flex: 1;

  display: flex;
  flex-direction: column;

  padding: 1.5rem 2rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  border-radius: 10px;
  height: 100%;
  width: 100%;

  box-sizing: border-box;

  @media screen and (max-width: 760px) {
    height: 500px;
  }
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

  margin: 0 5rem;

  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

const Main = () => {
  const [code, setCode] = useState("");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);

  const onRun = async () => {
    const url = 'https://suth1jsg3l.execute-api.ap-northeast-2.amazonaws.com/production/run';
    console.log('run');
    setIsRunning(true);
    try {
      const result = await axios.post(url, {code: code, input: input});
      console.log(result);

      if (result.data.error) {
        setOutput("실행 제한 시간이 초과되었습니다.");
      } else {
        setOutput(result.data.output);
      }
    } catch(err) {
      setOutput("알 수 없는 에러가 발생했습니다.");
    } finally {
      setIsRunning(false);
    }
  };

  return (
    <Container>
      <Bar onRun={onRun} isRunning={isRunning}/>
      <MainContainer>
        <SubContainer>
          <FloatingBox style={{ flex: 2, marginBottom: "3rem" }}>
            <BoxTitle>코드</BoxTitle>
            <CodeEditor value={code} onChange={setCode} />
          </FloatingBox>

          <FloatingBox style={{ flex: 1 }}>
            <BoxTitle>입력</BoxTitle>
            <CodeEditor value={input} onChange={setInput} />
          </FloatingBox>
        </SubContainer>
        <ProgressIcon>
          <FaAngleDoubleRight />
        </ProgressIcon>
        <FloatingBox>
          <BoxTitle>출력</BoxTitle>
          <CodeEditor value={output} readOnly={true}/>
        </FloatingBox>
      </MainContainer>
    </Container>
  );
};

export default Main;
