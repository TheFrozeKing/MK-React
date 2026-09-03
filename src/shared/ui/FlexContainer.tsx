// export {}
import styles from "../styles/FlexContainer.module.css";
import { ReactNode } from "react";

interface IFlexContainerProps {
  gap?: string;
  direction?: "column" | "row" | "column-reverse" | "row-reverse";
  wrap?: "wrap" | "nowrap";
  justifyContent?: "center" | "flex-start" | "flex-end" | "space-around" | "space-between";
  alignItems?: "center" | "flex-start" | "flex-end" | "stretch";
  alignContent?: "center" | "flex-start" | "flex-end" | "space-around" | "space-between";
  margin?: string;
  children?: ReactNode;
}

export default function FlexContainer({
  gap = "1vh",
  direction = "column",
  justifyContent = "center",
  alignItems = "center",
  alignContent = "center",
  margin = "0",
  wrap = "nowrap",
  children,
}: IFlexContainerProps) {
  return (
    <div
      className={styles.flexContainer}
      style={{
        flexWrap: wrap,
        gap: gap,
        flexDirection: direction,
        justifyContent: justifyContent,
        alignItems: alignItems,
        alignContent: alignContent,
        margin: margin,
      }}
    >
      {children}
    </div>
  );
}
