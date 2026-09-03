import { ReactNode } from "react";
import style from "../styles/Padding.module.css";

interface IPadding {
  left?: number;
  right?: number;
  top?: number;
  bottom?: number;
  children?: ReactNode;
}

export default function Padding({
  left,
  right,
  top,
  bottom,
  children,
}: IPadding) {
  return (
    <div
      className={style.padding}
      style={{
        paddingLeft: left + "px",
        paddingRight: right + "px",
        paddingTop: top + "px",
        paddingBottom: bottom + "px",
      }}
    >
      {children}
    </div>
  );
}
