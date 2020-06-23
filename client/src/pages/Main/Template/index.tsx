import React from "react";
import { IMain } from "@interface/main";
import Grid from "@material-ui/core/Grid";
import classNames from "classnames";

const MainTemplate = ({ Img, Txt, width }: IMain) => {
  console.log(width);

  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <div className="main-container">
            <div
              className={classNames("main-half-circle", {
                "main-half-circle xs": width == "xs",
              })}
            >
              {Img}
            </div>
            {Txt}
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default MainTemplate;

// const handleKeyDown = (e: { key: string }) => {
//   if (e.key == "Enter" && nickname) {
//     setisClick(true);
//   }
// };

// <S.Input
// name="nickname"
// value={nickname}
// onKeyDown={handleKeyDown}
// onChange={setInputs}
// placeholder="Please enter your nickname"
// />
