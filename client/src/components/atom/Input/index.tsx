import React from "react";
import { IInput } from "@interface/components";
import classNames from "classnames";

function Input({
  name,
  value,
  placeholder,
  onChange,
  onKeyDown,
  style,
}: IInput): React.ReactElement {
  console.log("value 는 message여야 합니다 : ", value);

  return (
    <input
      className={classNames("Input", style)}
      name={name}
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
}

export default Input;
