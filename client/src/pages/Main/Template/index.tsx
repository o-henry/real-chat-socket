import React from "react";
import { Img } from "@components/index";
import { useWidth } from "@hooks/index";
import { character } from "@assets/index";
import Grid from "@material-ui/core/Grid";
import classNames from "classnames";

const MainTemplate = () => {
  const width = useWidth();
  console.log("width: ", width);

  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <div className="main-container">
            <div className="main-half-circle">
              <Img style="main-character" src={character} alt="character" />
            </div>
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
