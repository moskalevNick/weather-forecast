import React from "react";
import { Styles } from "../Icon";

export const SunIcon = ({ styles }: { styles: Styles }) => {
  const { h = "64", w = "64", fill, stroke } = styles;

  return (
    <svg
      version="1.1"
      id="Layer_1"
      x="0px"
      y="0px"
      width={w}
      height={h}
      viewBox={`0 0 ${w} ${h}`}
      enableBackground={`new 0 0 ${w} ${h}`}
    >
      <line
        fill="none"
        stroke={stroke || "green"}
        strokeWidth="2"
        strokeMiterlimit="10"
        x1="0"
        y1="47"
        x2="64"
        y2="47"
      />
      <line
        fill="none"
        stroke={stroke || "green"}
        strokeWidth="2"
        strokeMiterlimit="10"
        x1="10"
        y1="37"
        x2="0"
        y2="37"
      />
      <line
        fill="none"
        stroke={stroke || "green"}
        strokeWidth="2"
        strokeMiterlimit="10"
        x1="64"
        y1="37"
        x2="54"
        y2="37"
      />
      <line
        fill="none"
        stroke={stroke || "green"}
        strokeWidth="2"
        strokeMiterlimit="10"
        x1="32"
        y1="15"
        x2="32"
        y2="4"
      />
      <line
        fill="none"
        stroke={stroke || "green"}
        strokeWidth="2"
        strokeMiterlimit="10"
        x1="14"
        y1="23"
        x2="6"
        y2="15"
      />
      <line
        fill="none"
        stroke={stroke || "green"}
        strokeWidth="2"
        strokeMiterlimit="10"
        x1="50"
        y1="23"
        x2="58"
        y2="15"
      />
      <path
        fill={fill || "orange"}
        stroke={stroke || "green"}
        strokeWidth="2"
        strokeMiterlimit="10"
        d="M48.159,47C49.96,44.096,51,40.669,51,37
	c0-10.493-8.506-19-19-19s-19,8.507-19,19c0,3.668,1.04,7.094,2.841,9.998"
      />
    </svg>
  );
};
