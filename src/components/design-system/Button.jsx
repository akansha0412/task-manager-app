// Dashboard.js
import React from "react";
import styled from "styled-components";

const ButtonDiv = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: #1890ff;
  color: #fff;
  font-size: 14px;
  cursor: pointer;
  border-radius: 10px;
  font-weight: 600;
  transition: 0.3s background;
  &:hover {
    background: #40a9ff;
  }
  @media (max-width: 768px) {
    margin-left: unset;
    width: 100%;
  }
`;

export const Button = ({ text,onClick }) => {
  return (
    <ButtonDiv type="submit" onClick={onClick}>{text}</ButtonDiv>
  );
};
