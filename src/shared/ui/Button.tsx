'use client';

import { ReactNode } from "react";
import style from "../styles/Button.module.css";

interface IButtonProps {
  children?: ReactNode;
  clickAction?: () => void;
  margin?: string;
}

export default function Button({
  children,
  clickAction = () => {},
  margin,
}: IButtonProps) {
  return (
    <button className={style.button} onClick={clickAction} style={{margin: margin,}}>
      {children}
    </button>
  );
}
