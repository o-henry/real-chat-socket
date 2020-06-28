import React from "react";
import { IButton } from "@interface/components";
import classNames from "classnames";

function Button({ onClick, style, children }: IButton): React.ReactElement {
  return (
    <button className={classNames("Button", style)} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
