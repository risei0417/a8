import styles from "styles/Index.module.scss";

import { motion, Variants } from "framer-motion";
import { useMemo } from "react";
import { CategoriesMolecule } from "components/molecules/index/CategoriesMolecule";

export const CategoriesOrganism = () => {

  const cardVariants: Variants = useMemo(() => {
    return {
      offscreen: {
        y: 300,
      },
      onscreen: {
        y: 0,
        transition: {
          type: "spring",
          bounce: 0.6,
          duration: 1.1,
        },
      },
    };
  }, []);

  return (
    <section>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        <motion.div className={styles.categories} variants={cardVariants}>
          <h2>Categories</h2>
          <CategoriesMolecule />
        </motion.div>
      </motion.div>
    </section>
  );
};
