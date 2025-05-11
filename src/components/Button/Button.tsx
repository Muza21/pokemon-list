import { MouseEvent, ReactNode } from "react";
import styles from "./Button.module.css";

type ButtonProps = {
  children: ReactNode;
  className?: string;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
};

const Button = ({
  children,
  className = "",
  onClick,
  disabled,
}: ButtonProps) => {
  return (
    <button
      onClick={disabled ? undefined : onClick}
      className={`${styles.button} ${className} ${
        disabled ? styles.disabled : ""
      }`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
