import tabTitle from "../../lib/tabTitle";
import styles from "./Home.module.css";

export const Home = () => {
  tabTitle("Home");
  return <h1 className={styles.homeHeader}>Home Page</h1>;
};
