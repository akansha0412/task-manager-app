import React from "react";
import styled from "styled-components";
import { MdSearch } from "react-icons/md";

const Input = styled.input`
  padding: 10px 30px;
  border: none;
  border-radius: 4px;
  background-color: #bdd3e9;
  color: #000;
  font-size: 14px;
  border-radius: 10px;
  font-weight: 400;
  @media (max-width: 768px) {
    width: 85%;
  }
`;

const Div = styled.div`
  position: relative;
`;

export const SearchField = ({ onSearch }) => {
  return (
    <Div>
      <MdSearch
        style={{ position: "absolute", bottom: "10px", left: "10px" }}
      />
      <Input
        placeholder="Search"
        onChange={(e) => onSearch(e.target.value)}
      ></Input>
    </Div>
  );
};
