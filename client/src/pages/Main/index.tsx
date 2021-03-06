import React, { useState } from "react";
import { MainTemplate } from "@pages/index";
import { useWidth } from "@hooks/index";
import { character } from "@assets/index";
import { Img, Text, ValidationTextField } from "@components/index";

const Main = () => {
  const width = useWidth();
  const [name, setName] = useState("");
  const [isClick, setIsClick] = useState(false);

  const handleChange = (e: any) => {
    setName(e.target.value);
  };

  return (
    <>
      <MainTemplate
        name={name}
        width={width}
        Image={
          <Img
            style={
              width == "lg" || width == "xl"
                ? "main-character lg"
                : "main-character"
            }
            src={character}
            alt="character"
          />
        }
        Text={<Text style={width == "lg" ? "Text lg" : "Text"}>Message</Text>}
        Validation={
          <ValidationTextField
            name="name"
            onChange={handleChange}
            placeholder="Please enter your name"
          />
        }
      />
    </>
  );
};

export default Main;
