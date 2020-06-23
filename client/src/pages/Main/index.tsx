import React from "react";
import { MainTemplate } from "@pages/index";
import { useWidth } from "@hooks/index";

const Main = () => {
  const width = useWidth();

  return (
    <>
      <MainTemplate width={width} />
    </>
  );
};

export default Main;
