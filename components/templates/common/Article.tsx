import { Footer } from "components/organisms/Footer";
import { Header } from "components/organisms/Header";
import styles from "styles/common/Article.module.scss";

export const Article = () => {
  return (
    <>
      <Header />

      <main className="main">
        <div className={styles.wrapper}>
          <section className={styles.article}>
            <h2>tittle</h2>
            <hr />
            <div>
              <img id="main-image" src="" alt="main-image" />
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
};
