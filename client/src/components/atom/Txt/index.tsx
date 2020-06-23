import React from "react";
import { IText } from "@interface/style";
import classNames from "classnames";

const Txt = ({ children, style }: IText): React.ReactElement => {
  return (
    <>
      <div className={classNames("Txt", style)}>{children}</div>
    </>
  );
};

export default Txt;
