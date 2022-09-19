import styles from "styles/Index.module.scss";

import { CategoriesMolecule } from "components/molecules/index/CategoriesMolecule";

export const CategoriesOrganism = () => {
  return (
    <section>
      <div className={styles.categories}>
        <h2>Categories</h2>
        <CategoriesMolecule />
      </div>
    </section>
  );
};
