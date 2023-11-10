// Dashboard.js
import React from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "../../contexts/AuthProvider";
import useForm from "../../hooks/useForm";
import { Button } from "../design-system/Button";
import { InputField } from "../design-system/InputField";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Wrapper = styled.div`
  width: 300px;
  height: 200px;
  padding: 20px;
  border-radius: 30px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 1px 2px 4px 0 rgba(0, 0, 0, 0.25);
  background: #fff;
`;

const Title = styled.div`
  color: #000;
  font-weight: 600;
  font-size: 24px;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Login = () => {
  const { values, handleChange, handleSubmit } = useForm(loginIn);
  const{login,authenticated}= useAuth()
  const history=useHistory()

  useEffect(()=>{
    if(authenticated || sessionStorage.getItem('authToken')) { history.push("/dashboard");}
  },[authenticated, history])

  function loginIn() {
    login(values.name)
  }

  return (
    <Container>
      <Wrapper>
        <Title>Login</Title>
        <Form onSubmit={handleSubmit}>
          <InputField
            placeholder="Id"
            name="id"
            autoFocus={true}
            onChange={handleChange}
            value={values.id || ""}           
          />
          <InputField
            placeholder="Name"
            name="name"
            autoFocus={false}
            onChange={handleChange}
            value={values.name || ""}
          />
          <Button text='Login'></Button>
        </Form>
      </Wrapper>
    </Container>
  );
};
