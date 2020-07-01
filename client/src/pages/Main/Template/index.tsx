import React from "react";
import { IMain } from "@interface/main";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import classNames from "classnames";

const MainTemplate = ({
  Image,
  Text,
  width,
  name,
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
                "main-half-circle sm":
                  width == "sm" ||
                  width == "md" ||
                  width == "lg" ||
                  width == "xl",
              })}
            >
              {Image}
            </div>
            {Text}
            <div className="textfield-fade-in">{Validation}</div>
            <Link
              className={classNames("main-join-btn", {
                "main-visible-btn": name !== "",
              })}
              onClick={(e) => (!name ? e.preventDefault() : null)}
              to={`/chat?name=${name}`}
            >
              JOIN
            </Link>
            <div className="textfield-footer">
              Please refresh after connecting.
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default MainTemplate;
