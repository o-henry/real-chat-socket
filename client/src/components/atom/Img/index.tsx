import React from "react";
import { IImg } from "@interface/style";
import classNames from "classnames";

const Img = ({ style, alt, src }: IImg): React.ReactElement => {
  return (
    <>
      <img className={classNames("Img", style)} src={src} alt={alt} />
    </>
  );
};

export default Img;
