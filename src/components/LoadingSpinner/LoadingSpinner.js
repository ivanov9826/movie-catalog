import styles from "./LoadingSpinner.module.css";

const LoadingSpinner = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.spinner}></div>
    </div>
  );
};

export default LoadingSpinner;
