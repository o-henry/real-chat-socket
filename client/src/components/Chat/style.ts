import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  max-width: 100%;
  padding: 2rem 0 2rem 0;
  overflow-y: auto;
`;

export const Message = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  height: 15%;
  position: absolute;
  bottom: 0;
`;

export const Textarea = styled.input`
  display: inherit;
  justify-content: flex-start;
  align-content: flex-start;
  width: 80%;
  height: 100%;
  border: none;
  border-top: 2px solid rgba(112, 124, 151, 0.15);
  padding: 0 2rem 0 2rem;
`;

export const Button = styled.button`
  padding: 0;
  border: none;
  background: none;
`;

export const Img = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
`;

export const Chat = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 0.25rem 3rem 0.25rem 3rem;
  padding: 10px 0 10px 0;
`;
