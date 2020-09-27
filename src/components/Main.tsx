import React, { useState } from "react";
import styled from "styled-components/macro";
import axios from "axios";

import Bar from "./NavBar";
import CodeEditor from "./CodeEditor";
import { FaAngleDoubleRight } from "react-icons/fa";

import Select from "react-select";
import options from "../examples.json";

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

  min-height: 250px;
  height: 100%;
  width: 100%;

  box-sizing: border-box;

  @media screen and (max-width: 760px) {
    height: 500px;
  }
`;

const BoxTitle = styled.h2`
  display: flex;
  align-items: center;

  margin 0;
  padding: 0rem 0 0.7rem 0;
  margin-bottom: 1rem;
  border-bottom: 1px solid #ced4da;
`;

const SelectContainer = styled.div`
  font-size: 1rem;
  font-weight: normal;
  margin-left: auto;
  z-index: 10;

  width: 50%;

  @media screen and (max-width: 1000px) {
    width: 75%;
  }

  @media screen and (max-width: 400px) {
    width: 60%;
  }
`;

const ProgressIcon = styled.span`
  font-size: 3rem;
  color: #343a40;
  text-align: center;

  margin: 0 5rem;

  @media screen and (max-width: 1500px) {
    margin: 0 3rem;
  }

  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

const Main = () => {
  const [code, setCode] = useState('# Favicon made by Freepik from www.flaticon.com\n꾸러미 "유용한 함수들.nuri"\n\n');
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);

  const onRun = async () => {
    const url =
      "https://suth1jsg3l.execute-api.ap-northeast-2.amazonaws.com/production/run";
    setIsRunning(true);
    try {
      const result = await axios.post(url, { code: code, input: input });

      if (result.data.error) {
        setOutput("실행 제한 시간이 초과되었습니다.");
      } else {
        setOutput(result.data.output);
      }
    } catch (err) {
      setOutput("알 수 없는 에러가 발생했습니다.");
    } finally {
      setIsRunning(false);
    }
  };

  const onSelect = (opt: any) => {
    setCode(opt.value);
  };

  return (
    <Container>
      <Bar onRun={onRun} isRunning={isRunning} />
      <MainContainer>
        <SubContainer>
          <FloatingBox style={{ flex: 3, marginBottom: "3rem" }}>
            <BoxTitle>
              코드
              <SelectContainer>
                <Select options={options} placeholder="예시 선택" onChange={onSelect}/>
              </SelectContainer>
            </BoxTitle>
            <CodeEditor value={code} onChange={setCode} lineNumber/>
          </FloatingBox>

          <FloatingBox style={{ flex: 1, minHeight: 150 }}>
            <BoxTitle>입력</BoxTitle>
            <CodeEditor value={input} onChange={setInput} lineNumber/>
          </FloatingBox>
        </SubContainer>
        <ProgressIcon>
          <FaAngleDoubleRight />
        </ProgressIcon>
        <FloatingBox>
          <BoxTitle>출력</BoxTitle>
          <CodeEditor value={output} readOnly lineNumber={false}/>
        </FloatingBox>
      </MainContainer>
    </Container>
  );
};

export default Main;
