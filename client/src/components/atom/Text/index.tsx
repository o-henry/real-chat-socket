import React from "react";
import { IText } from "@interface/components";
import classNames from "classnames";

const Text = ({ children, style }: IText): React.ReactElement => {
  return (
    <>
      <div className={classNames("Text", style)}>{children}</div>
    </>
  );
};

export default Text;
