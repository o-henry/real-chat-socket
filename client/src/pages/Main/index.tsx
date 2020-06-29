import React, { useState } from "react";
import { MainTemplate } from "@pages/index";
import { useWidth } from "@hooks/index";
import { character } from "@assets/index";
import { Img, Text, ValidationTextField } from "@components/index";
import { Link } from "react-router-dom";

const Main = () => {
  const width = useWidth();
  const [name, setName] = useState("");
  const [isClick, setIsClick] = useState(false);

  const handleChange = (e: any) => {
    setName(e.target.value);
  };

  const submitName = (e: any) => {
    e.preventDefault();
    if (e.key === "Enter" && !name) {
      return;
    }
  };

  console.log("name", name);

  return (
    <>
      <MainTemplate
        width={width}
        Image={<Img style="main-character" src={character} alt="character" />}
        Text={<Text>Message</Text>}
        Validation={
          <ValidationTextField
            name="name"
            onChange={handleChange}
            placeholder="Please enter your nickname"
          />
        }
      />
      <Link
        onClick={(e) => (!name ? e.preventDefault() : null)}
        to={`/chat?name=${name}`}
      >
        JOIN
      </Link>
    </>
  );
};

export default Main;
