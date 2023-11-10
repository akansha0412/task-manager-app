import React from "react";
import styled from "styled-components";

const Input = styled.input`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: #e7e7e7;
  color: #000;
  font-size: 14px;
  border-radius: 10px;
  font-weight: 400;
  width: inherit;
`;

export const InputField = ({ placeholder,name,autoFocus,onChange,value,required= true}) => {
  return (
    <Input
    placeholder={placeholder}
    name={name}
    autoFocus={autoFocus}
    onChange={onChange}
    required={required}
    value={value}
  ></Input>
  );
};
