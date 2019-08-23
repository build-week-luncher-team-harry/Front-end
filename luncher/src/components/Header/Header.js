import React from "react";
import styled from 'styled-components';

const Theader = styled.div`
    display: flex;
    justify-content: center;
    background-color: blue;
`;

const Title = styled.h1`
    color: pink;
    background-color: red
`;

export default function Header() {
  return (
    <Theader>
      <Title>LUNCHER</Title>
    </Theader>
  );
}