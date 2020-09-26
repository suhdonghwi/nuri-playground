import React from "react";
import styled from "styled-components/macro";

import { FaPlay } from "react-icons/fa";

const Bar = styled.nav`
  display: flex;
  align-items: center;
  padding: 1.25rem 3rem;
  box-shadow: 0 2px 2px -2px rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 530px) {
    padding: 1.25rem 2rem;
  }
`;

const Title = styled.h1`
  font-size: 1.7rem;
  font-weight: normal;
  margin: 0 3rem 0 0;

  @media screen and (max-width: 530px) {
    margin-right: auto;
  }
`;

const Run = styled.button`
  display: flex;
  align-items: center;

  font-size: 1.2rem;
  padding: 0.7rem 1rem;

  background-color: #40c057;
  color: white;
  border: none;
  border-radius: 7px;
  outline: none;

  cursor: pointer;
`;

const RunText = styled.span`
  margin-left: 0.6rem;
  margin-top: 2px;
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
    <Run onClick={onRun}>
      <FaPlay />
      <RunText>{isRunning ? "실행 중" : "실행"}</RunText>
    </Run>
  </Bar>
);

export default NavBar;
