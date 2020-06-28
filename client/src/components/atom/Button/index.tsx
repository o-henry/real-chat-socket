import React from "react";
import classNames from "classnames";
import { IButton } from "@interface/components";

function Button({ onClick, style, children }: IButton): React.ReactElement {
  return (
    <button className={classNames("Button", style)} onClick={onClick}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  style: "",
};

export default Button;
