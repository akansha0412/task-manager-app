// Dashboard.js
import React from "react";
import styled from "styled-components";

const Div = styled.div`
  width: 300px;
  height: 100px;
  padding: 20px;
  border-radius: 30px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 1px 2px 4px 0 rgba(0, 0, 0, 0.25);
  background: #fff;
  display: flex;
  flex-direction: column;
  color: #999;
  @media (max-width: 768px) {
    width: inherit;
    border-radius: unset;
  }
`;

export const InfoCard = (props) => {
  return <Div>{props.children}</Div>;
};
