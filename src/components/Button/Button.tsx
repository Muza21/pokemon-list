import { MouseEvent, ReactNode } from "react";
import styles from "./Button.module.css";

type ButtonProps = {
  children: ReactNode;
  className?: string;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
};

const Button = ({ children, className = "", onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} className={`${styles.button} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
