import React from "react";
import { IInput } from "@interface/components";
import TextField from "@material-ui/core/TextField";
import classNames from "classnames";

const ValidationTextField = ({
  style,
  name,
  value,
  onKeyDown,
  onChange,
  placeholder,
}: IInput): React.ReactElement => {
  return (
    <form
      className={classNames("Material-Input", style)}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField placeholder={placeholder} value={value} name={name} />
      </div>
    </form>
  );
};

export default ValidationTextField;
