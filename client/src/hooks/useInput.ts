import React, { useState, useEffect } from "react";

const useChatInput = () => {
  const [inputs, setInputs] = useState<any>({
    msg: "",
    nickname: "",
  });

  const onTextChange = (e: any) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  return [inputs, onTextChange];
};

export default useChatInput;
