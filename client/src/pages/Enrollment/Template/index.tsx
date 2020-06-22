import React, { useState, useEffect } from "react";
import Chat from "../../../components/Chat";
import useInput from "../../../hooks/useInput";
import * as S from "./style";

const EnrollmentTemplate = () => {
  const [inputs, setInputs] = useInput();
  const [isClick, setisClick] = useState(false);
  const { nickname } = inputs;

  const handleKeyDown = (e: { key: string }) => {
    if (e.key == "Enter" && nickname) {
      console.log("do validate");
      setisClick(true);
    }
  };

  return (
    <>
      <S.Main>
        {!isClick && (
          <>
            <S.Header>Random Chatting</S.Header>
            <S.Nickname>
              <S.Input
                name="nickname"
                value={nickname}
                onKeyDown={handleKeyDown}
                onChange={setInputs}
                placeholder="Please enter your nickname"
              />
            </S.Nickname>
          </>
        )}
        {isClick && <Chat nickname={nickname} />}
      </S.Main>
    </>
  );
};

export default EnrollmentTemplate;
