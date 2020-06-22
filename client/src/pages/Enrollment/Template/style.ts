import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
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
  font-size: 3.5rem;
`;

export const Nickname = styled.div`
  display: inherit;
  height: 40% !important;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.div`
  display: inherit;
  height: 2rem !important;
`;

export const Button = styled.div`
  display: inherit;
  height: 2rem !important;
`;
