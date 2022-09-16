import { parse } from "path";
import styles from "styles/common/Article.module.scss";

export const Article = () => {
  return (
    <div className={styles.wrapper}>
      <section className={styles.article}>
        <h2>tittle</h2>
        <hr />
        <div>
          <img id="main-image" src="" alt="main-image" />
        </div>
      </section>
    </div>
  );
};
