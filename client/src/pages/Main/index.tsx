import React, { useState } from "react";
import { MainTemplate } from "@pages/index";
import { Img, Text, ValidationTextField } from "@components/index";
import { useWidth } from "@hooks/index";
import { character } from "@assets/index";

const Main = () => {
  const width = useWidth();
  const [isClick, setIsClick] = useState(false);

  // const handleKeyDown = (e: { key: string }) => {
  //   if (e.key == "Enter" && nickname) {
  //     setisClick(true);
  //   }
  // };

  return (
    <>
      <MainTemplate
        width={width}
        Image={<Img style="main-character" src={character} alt="character" />}
        Text={<Text>Message</Text>}
        Validation={
          <ValidationTextField
            name="nickname"
            value=""
            // onKeyDown={handleKeyDown}
            // onChange={setInputs}
            placeholder="Please enter your nickname"
          />
        }
      />
    </>
  );
};

export default Main;
