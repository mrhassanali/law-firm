import React from "react";
import { SVGProps } from "react";
type FooterLargeLeftIconProps = {
  title?: string;
  titleId?: string;
  fill?: string;
  className?: string;
} & SVGProps<SVGSVGElement>;

const FooterLargeLeftIcon: React.FC<FooterLargeLeftIconProps> = ({
  title,
  titleId,
  fill,
  className,
  ...props
}) => {
  return React.createElement(
    "svg",
    Object.assign(
      {
        viewBox: "0 0 457 45",
        fill: fill ? fill : "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-hidden": "true",
        "data-slot": "icon",
        "aria-labelledby": titleId ? titleId : undefined,
        className: className,
      },
      props,
    ),
    title
      ? /*#__PURE__*/ React.createElement(
          "title",
          {
            id: titleId,
          },
          title,
        )
      : null,
    /*#__PURE__*/ React.createElement("line", {
      x1: "456.504",
      y1: "17.6987",
      x2: "0.976349",
      y2: "17.6987",
      stroke: "#D9A746",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "456.504",
      y1: "27.6987",
      x2: "0.976349",
      y2: "27.6987",
      stroke: "#D9A746",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "408.981",
      y1: "0.19873",
      x2: "408.981",
      y2: "44.1987",
      stroke: "#D9A746",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "408.981",
      y1: "0.19873",
      x2: "408.981",
      y2: "44.1987",
      stroke: "#D9A746",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "418.042",
      y1: "0.19873",
      x2: "418.042",
      y2: "44.1987",
      stroke: "#D9A746",
    }),
    /*#__PURE__*/ React.createElement("rect", {
      x: "416.636",
      y: "26.1987",
      width: "6.34266",
      height: "7",
      transform: "rotate(-180 416.636 26.1987)",
      fill: "#D9A746",
    }),
  );
};
export default FooterLargeLeftIcon;
