import React from "react";
import Chat from "../../../components/Chat";
import useInput from "../../../hooks/useInput";

const Enrollment = () => {
  return (
    <>
      <input {...useInput} />
      <button>입장</button>
      <Chat />
    </>
  );
};

export default Enrollment;
