import React from "react";
import { SvgIcon } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  st0: {
    fill: "#C6C6C6",
    stroke: "#000000",
    strokeWidth: 7,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: 10,
  },
  st1: {
    fill: "#FF9100",
    stroke: "#000000",
    strokeWidth: 7,
    strokeMiterlimit: 10,
  },
}));

export default function (props) {
  const classes = useStyles();

  return (
    <SvgIcon {...props}>
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 277.9 248.2"
        style={{ enableBackground: "new 0 0 277.9 248.2" }}
        xmlSpace="preserve"
      >
        <g>
          <path
            className={classes.st0}
            d="M27.2,213.8C27.2,152,77.2,102,139,102S250.8,152,250.8,213.8"
          />
          <rect
            x="17.2"
            y="214.2"
            className={classes.st0}
            width="243.6"
            height="23.6"
          />
          <path
            className={classes.st1}
            d="M139,10.4c-28.3,0-51.2,22.9-51.2,51.2C87.5,110.5,139,171,139,171s51.5-60.6,51.2-109.4
		C190.2,33.4,167.2,10.4,139,10.4L139,10.4z M139,83.3c-12,0-21.7-9.7-21.7-21.7c0-12,9.7-21.7,21.7-21.7c12,0,21.7,9.7,21.7,21.7v0
		C160.7,73.6,151,83.3,139,83.3C139,83.3,139,83.3,139,83.3z"
          />
        </g>
      </svg>
    </SvgIcon>
  );
}
