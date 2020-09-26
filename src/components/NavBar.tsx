import React from "react";
import styled from "styled-components/macro";

import { FaPlay, FaClock, FaGithub, FaScroll } from "react-icons/fa";

const Bar = styled.nav`
  display: flex;
  align-items: center;
  padding: 1.25rem 3rem;
  box-shadow: 0 2px 2px -2px rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 640px) {
    padding: 1.25rem 2rem;
  }
`;

const Title = styled.h1`
  font-size: 1.7rem;
  font-weight: normal;

  margin: 0 3rem 0 0;
  @media screen and (max-width: 640px) {
    margin-right: auto;
  }
`;

const Button = styled.button`
  display: flex;
  align-items: center;

  font-size: 1.2rem;
  text-decoration: none;

  padding: 0.6rem 1rem;

  height: 100%;
  box-sizing: border-box;

  border: none;
  border-radius: 7px;

  outline: none;
  cursor: pointer;

  margin-right: 1rem;

  @media screen and (max-width: 640px) {
    margin-right: 0;
  }
`;

const ButtonText = styled.span`
  margin-left: 0.6rem;
`;

const Run = styled(Button)`
  background-color: #40c057;
  color: white;

  &.running {
    cursor: progress;
    background-color: #adb5bd;
  }
`;

const Document = styled(Button)`
  background-color: #228be6;
  color: white;

  @media screen and (max-width: 640px) {
    display: none;
  }
`;

const GitHub = styled(Button)`
  background-color: #212529;
  color: white;

  @media screen and (max-width: 640px) {
    display: none;
  }
`;


interface NavBarProps {
  onRun: () => void;
  isRunning: boolean;
}

const NavBar = ({onRun, isRunning}: NavBarProps) => (
  <Bar>
    <Title>
      <strong>누리</strong> 놀이터
    </Title>
    <Run onClick={onRun} disabled={isRunning} className={isRunning ? "running" : ""}>
      {isRunning ? <FaClock /> : <FaPlay />}
      <ButtonText style={{marginTop: 3}}>{isRunning ? "실행 중" : "실행"}</ButtonText>
    </Run>

    <Document as="a" href="https://github.com/suhdonghwi/nuri/blob/master/docs/README.md">
      <FaScroll />
      <ButtonText>문서</ButtonText>
    </Document>

    <GitHub as="a" href="https://github.com/suhdonghwi/nuri/">
      <FaGithub />
      <ButtonText>깃허브</ButtonText>
    </GitHub>
  </Bar>
);

export default NavBar;
