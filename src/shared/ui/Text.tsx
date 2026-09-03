import { ReactNode } from "react";
import styles from "../styles/Text.module.css";

interface ITextProps {
  fontSize?: string;
  color?: string;
  isBold?: boolean;
  children?: ReactNode;
  hasShadow?: boolean;
  letterSpacing?: string;
  margin?: string;
  textAlign?: "center" | "left" | "right" | "justify";
}

export default function Text({
  fontSize,
  color,
  isBold,
  hasShadow = false,
  children,
  letterSpacing,
  margin = '0',
  textAlign = "left"
}: ITextProps) {
  return (
    <p
      className={styles.text}
      style={{
        fontSize: fontSize,
        color: color,
        fontWeight: isBold ? 700 : 400,
        filter: hasShadow ? "drop-shadow(-3px 2px 0px #4A1FA3)" : "",
        letterSpacing: letterSpacing,
        margin: margin,
        textAlign: textAlign,
      }}
    >
      {children}
    </p>
  );
}
