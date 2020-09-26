import React from 'react';
import styled from 'styled-components/macro';

const Bar = styled.nav`
  padding: 1.25rem 3rem;
  box-shadow: 0 2px 2px -2px rgba(0,0,0,.2);
`;

const Title = styled.h1`
  font-size: 1.7rem;
  font-weight: normal;
  margin: 0;
`;

const NavBar = () => (
  <Bar>
    <Title>
      <strong>누리</strong> 놀이터
    </Title>
  </Bar>
);

export default NavBar;
