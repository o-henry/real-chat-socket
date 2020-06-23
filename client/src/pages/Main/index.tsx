import React from "react";
import { MainTemplate } from "@pages/index";
import { Img, Txt } from "@components/index";
import { useWidth } from "@hooks/index";
import { character } from "@assets/index";

const Main = () => {
  const width = useWidth();

  return (
    <>
      <MainTemplate
        width={width}
        Img={<Img style="main-character" src={character} alt="character" />}
        Txt={<Txt>Message</Txt>}
      />
    </>
  );
};

export default Main;
