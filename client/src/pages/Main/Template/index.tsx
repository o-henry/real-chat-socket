import React from "react";
import { IMain } from "@interface/main";
import Grid from "@material-ui/core/Grid";
import classNames from "classnames";

const MainTemplate = ({
  Image,
  Text,
  width,
  Validation,
}: IMain): React.ReactElement => {
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
              {Image}
            </div>
            {Text}
            <div className="textfield-fade-in">{Validation}</div>
            <div className="textfield-footer">Built by Chan Haeng Lee</div>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default MainTemplate;
