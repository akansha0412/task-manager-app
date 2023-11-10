import React from "react";
import styled from "styled-components";
import useForm from "../../hooks/useForm";
import { Button } from "../design-system/Button";
import { InputField } from "../design-system/InputField";


const Wrapper = styled.div`
width: 250px;
height: 150px;
padding: 20px;
border-radius: 30px;
border: 1px solid rgba(0, 0, 0, 0.08);
box-shadow: 1px 2px 4px 0 rgba(0, 0, 0, 0.25);
background: #fff;
z-index:9999
`;

const Title = styled.div`
  color: #000;
  font-weight: 500;
  font-size: 20px;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Modal = styled.div`
  position:fixed;
  background:rgba(0,0,0,0.4);
  height: 100%;
    width: 100%;
   inset:0;
    display: flex;
    z-index: 1;
    justify-content: center;
    align-items: center;
`;

export const AddNewTask = ({onClose,onAdd}) => {

    const { values, handleChange, handleSubmit } = useForm(onSubmit);

    function onSubmit(){
        onAdd(values.task_name)
        onClose()
    }
    
  
  return (
    <Modal>
      <Wrapper>
        <Title>+ New Task</Title>
        <Form onSubmit={handleSubmit}>
          <InputField
            placeholder="Task name"
            name="task_name"
            autoFocus={true}
            onChange={handleChange}
            value={values.task_name || ""}
          />
          <Button text="+ New Task"/>
        </Form>
      </Wrapper>
      </Modal>
      
  );
};
