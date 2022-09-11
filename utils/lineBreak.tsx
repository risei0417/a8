import { Fragment } from "react";

export const lineBreak = (str: string) => {
  return str.split("<br>").map((p, i) => {
    return (
      <Fragment key={i}>
        {p}
        <br />
      </Fragment>
    );
  });
};
