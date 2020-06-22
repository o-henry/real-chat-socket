import { useState } from "react";

const useInput = () => {
  const [value, setValue] = useState<any>();

  const [inputs, setInputs] = useState<any>({
    msg: "",
    nickname: "",
  });

  const onTextChange = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onChange = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    const { value } = e.target;
    setValue(value);
  };

  return [inputs, onTextChange, value, onChange];
};

export default useInput;
