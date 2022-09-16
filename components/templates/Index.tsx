import styles from "styles/Index.module.scss";

import { Welcome } from "components/organisms/index/Welcome";
import { Information } from "components/organisms/index/Information";
import { Header } from "components/organisms/Header";
import { Footer } from "components/organisms/Footer";
import { CategoriesOrganism } from "components/organisms/index/CategoriesOrganism";

export const Index = () => {
  return (
    <>
      <Header />

      <main className="main">
        <div style={{ backgroundColor: "snow", minHeight: "100vh" }}>
          <Welcome styles={styles} />
          <Information />
          <CategoriesOrganism />
          <div className={styles.spacer} />
        </div>
      </main>

      <Footer />
    </>
  );
};
