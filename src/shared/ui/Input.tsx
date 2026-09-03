"use client";
import styles from "../styles/Input.module.css";
import { ChangeEvent, useState, ReactNode } from "react";

interface IInputProps {
  placeholder?: string;
  type?: "text" | "number" | "password";
  value?: string | number;
  onInput?: (value: string) => void;

  fontSize?: string;
  fontWeight?: string;
  color?: string;
  hasShadow?: boolean;
  letterSpacing?: string;
  // onKeyPress: () => string; // change
}

export default function Input({
  placeholder = "Введите текст...",
  type = "text",
  value = "",
  onInput = () => {},
  fontSize,
  fontWeight,
  color,
  hasShadow = true,
  letterSpacing,
}: IInputProps) {
  const [inputValue, setInputValue] = useState<string | number | undefined>(
    value,
  );

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setInputValue(event.target.value);
    onInput(event.target.value);
  }  

  return (
    <input
      onChange={handleChange}
      // onKeyDown={props.onKeyPress}
      className={styles.input}
      value={inputValue}
      type={type}
      placeholder={placeholder}
      style={{
        fontSize: fontSize,
        color: color,
        fontWeight: fontWeight,
        filter: hasShadow ? "drop-shadow(-3px 2px 0px #4A1FA3)" : "",
        letterSpacing: letterSpacing,
      }}
    />
  );
}
