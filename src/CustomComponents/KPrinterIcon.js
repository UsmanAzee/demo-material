import React from "react";
import { SvgIcon } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  st0: {
    fill: "#454D59",
    stroke: "#000000",
    strokeWidth: 7,
    strokeMiterlimit: 10,
  },
  st1: {
    fill: "#A7AFC3",
    stroke: "#000000",
    strokeWidth: 7,
    strokeMiterlimit: 10,
  },
  st2: { fill: "#97D5A6" },
  st3: {
    fill: "#FFFFFF",
    stroke: "#000000",
    strokeWidth: 7,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: 10,
  },
  st4: {
    fill: "none",
    stroke: "#000000",
    strokeWidth: 7,
    strokeLinecap: "round",
    strokeLinejoin: "round",
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
        viewBox="0 0 319.7 240"
        style={{ enableBackground: "new 0 0 319.7 240" }}
        xmlSpace="preserve"
      >
        <path
          className={classes.st0}
          d="M183.1,112.8V87.3c0-3.2-2.6-5.9-5.9-5.9h-97c-1.6,0-3.2,0.7-4.3,1.9l-5.3,5.7c-1,1.1-1.6,2.5-1.6,4v19.8"
        />
        <path
          className={classes.st1}
          d="M224.3,230.6H27.9c-6.6,0-11.9-5.3-11.9-11.9v-93.8c0-6.6,5.3-11.9,11.9-11.9h196.4c6.6,0,11.9,5.3,11.9,11.9
	v93.8C236.2,225.3,230.9,230.6,224.3,230.6z"
        />
        <path
          className={classes.st2}
          d="M59.3,147.2H44.7c-3.1,0-5.6-2.5-5.6-5.6v-5c0-3.1,2.5-5.6,5.6-5.6h14.5c3.1,0,5.6,2.5,5.6,5.6v5
	C64.9,144.6,62.4,147.2,59.3,147.2z"
        />
        <g>
          <g>
            <path
              className={classes.st3}
              d="M271.9,58.3c5.1,0.3,10.2,1.7,14.9,4.4c16.2,9.3,21.7,29.9,12.4,46.1c-7.5,13.1-22.4,19.2-36.4,16.2
			l-26.6,46.7l-100.7-57.8l26.8-46.6c-9.7-10.6-11.9-26.6-4.4-39.6c9.3-16.2,29.9-21.7,46.1-12.4c4.7,2.7,8.5,6.4,11.4,10.7"
            />
            <path
              className={classes.st3}
              d="M207.3,37c9.3-16.2,29.9-21.7,46.1-12.4s21.7,29.9,12.4,46.1"
            />
          </g>
          <line className={classes.st4} x1="148.6" y1="94.1" x2="247" y2="150.7" />
        </g>
      </svg>
    </SvgIcon>
  );
}
