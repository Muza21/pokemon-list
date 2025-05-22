import { MouseEvent, ReactNode } from "react";
import styles from "./Button.module.css";
import { motion } from "motion/react";

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
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95, backgroundColor: "#000000", color: "#ffffff" }}
      onClick={disabled ? undefined : onClick}
      className={`${styles.button} ${className} ${
        disabled ? styles.disabled : ""
      }`}
      disabled={disabled}
    >
      {children}
    </motion.button>
  );
};

export default Button;
