// Dashboard.js
import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { Button } from "../design-system/Button";
import { AddNewTask } from "./AddNewTask";


const Wrapper = styled.div`
  height: 150px;
  padding: 20px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 1px 2px 4px 0 rgba(0, 0, 0, 0.25);
  background: #fff;
  justify-content:center;
  align-items:center;
  display:flex;
  flex-direction:column;
    margin-top:20px
`;

const Title = styled.div`
  color: #000;
  font-weight: 500;
  font-size: 20px;
  margin-bottom: 20px;
`;

export const NoTaskContainer = ({onAdd}) => {

    const[isButtonClick,setIsButtonClick]=useState(false)
  
  return (
    <>
      <Wrapper>
        <Title>You have no task.</Title>
          <Button text='+ New Task' onClick={()=>{setIsButtonClick(true)}}></Button>
      </Wrapper>
      {isButtonClick && <AddNewTask onClose={()=>{setIsButtonClick(false)}} onAdd={onAdd}/>}
      </>  
  );
};
