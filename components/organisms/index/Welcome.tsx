import styles from "styles/Index.module.scss";

export const Welcome = () => {

  return (
    <div className={styles.welcome}>
      <h1>
        <span>mar</span>
        <span style={{color: "lightgray"}}>K</span>
        <span>one</span>
      </h1>
      <b>Tips and tricks</b>
    </div>
  );
};
