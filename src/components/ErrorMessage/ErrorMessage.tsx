import styles from "./ErrorMessage.module.css";

type ErrorMessageProps = {
  errorMessage: string | null;
};

const ErrorMessage = ({ errorMessage }: ErrorMessageProps) => {
  return <div className={styles.error}>{errorMessage}</div>;
};

export default ErrorMessage;
