import React from "react";
import styled from "styled-components";
import { useAuth } from "../../contexts/AuthProvider";

const Header = styled.div`
  display: flex;
  gap: 10px;
  height: 30px;
  padding: 20px 40px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 1px 2px 4px 0 rgba(0, 0, 0, 0.25);
  background: #fff;
  align-items: center;
`;

const Logout = styled.div`
  color: #999;
  margin-left: auto;
  cursor: pointer;
`;

const NameText = styled.div`
  color: #999;
`;

const Logo = styled.div`
  background: linear-gradient(
    102.53deg,
    #443b87 4.92%,
    #7f436c 35.75%,
    #e35726 85.8%
  );
  height: 50px;
  width: 50px;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 600;
  color: #ffffff99;
  text-transform: uppercase;
`;

export const NavBar = () => {
  const { logout } = useAuth();

  return (
    <Header>
      <Logo>{sessionStorage.getItem("authToken").substring(0, 2)}</Logo>
      <NameText>{sessionStorage.getItem("authToken")}</NameText>
      <Logout onClick={() => logout()}>Logout</Logout>
    </Header>
  );
};
