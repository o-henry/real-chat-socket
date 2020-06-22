import { useState } from "react";

const useInput = () => {
  const [value, setValue] = useState<any>();

  const [inputs, setInputs] = useState<any>({
    msg: "",
    nickname: "",
  });

  const onTextChange = (e: any) => {
    if (e.target && e.target.value && e.target.name) {
      const { value, name } = e.target;
      setInputs({
        ...inputs,
        [name]: value,
      });
    }
  };

  const onChange = (e: any) => {
    const { value } = e.target;
    setValue(value);
  };

  return [inputs, onTextChange, value, onChange];
};

export default useInput;
