import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px;
  box-shadow: 23.8596px 5.61404px 50px rgba(0, 0, 0, 0.02),
    35.0877px 0px 70px rgba(86, 128, 248, 0.05),
    14.0351px 0px 25px rgba(86, 128, 248, 0.03);
  width: 50%;
  height: 70vh;
  background: #ffffff;
  position: relative;
`;

export const Header = styled.h1`
  display: inherit;
  justify-content: center;
  text-align: center;
  font-family: "Baloo Bhai 2" !important;
  font-size: 35px;
  margin: 4rem 2rem 3rem 2rem;
`;

export const Nickname = styled.div`
  display: inherit;
  height: 40% !important;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  display: inherit;
  height: 2rem !important;
  width: 11rem;
  text-align: center;
  border: none;
  font-size: 0.5rem;
`;

export const Button = styled.div`
  display: inherit;
  height: 2rem !important;
`;
