import React from "react";
import { IInput } from "@interface/components";
import classNames from "classnames";

function Input({
  name,
  message,
  placeholder,
  handleChange,
  handleKeyPress,
  style,
}: IInput): React.ReactElement {
  return (
    <input
      className={classNames("Input", style)}
      name={name}
      type="text"
      value={message}
      placeholder={placeholder}
      onChange={handleChange}
      onKeyPress={handleKeyPress}
    />
  );
}

export default Input;
