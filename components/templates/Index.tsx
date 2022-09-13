import { motion, Variants } from "framer-motion";
import styles from "styles/Index.module.scss";
import { Welcome } from "components/molecules/Welcome";
import { useMemo } from "react";
import { Categories } from "components/molecules/Categories";

export const Index = () => {
  const cardVariants: Variants = useMemo(() => {
    return {
      offscreen: {
        y: 300,
      },
      onscreen: {
        y: 0,
        transition: {
          type: "spring",
          bounce: 0.4,
          duration: 0.8,
        },
      },
    };
  }, []);

  return (
    <>
      <Welcome styles={styles} />
      <section className={styles.information}>
        <h2>Info</h2>
        <div>
          <div>
            <small>2022.9.13</small>
            <small>サイト開設しました!</small>
            <small>Yhaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa!</small>
          </div>
        </div>
      </section>
      <section>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
        >
          <motion.div className={styles.categories} variants={cardVariants}>
            <h2>Categories</h2>
            <Categories />
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};
