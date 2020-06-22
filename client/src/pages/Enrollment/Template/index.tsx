import React, { useState } from "react";
import Chat from "../../../components/Chat";
import useInput from "../../../hooks/useInput";
import * as S from "./style";

const EnrollmentTemplate = () => {
  const [inputs, setInputs] = useInput();
  const [isClick, setisClick] = useState(false);
  const { nickname } = inputs;

  const handleClick = () => {
    setisClick(true);
  };

  return (
    <>
      <S.Main>
        {!isClick && (
          <>
            <S.Header>Random Chatting</S.Header>
            <S.Nickname>
              <S.Input>
                <input name="nickname" value={nickname} onChange={setInputs} />
              </S.Input>
              <S.Button>
                <button onClick={handleClick}>입장</button>
              </S.Button>
            </S.Nickname>
          </>
        )}
        {isClick && <Chat nickname={nickname} />}
      </S.Main>
    </>
  );
};

export default EnrollmentTemplate;
