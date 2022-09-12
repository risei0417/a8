import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";
import { random } from "utils/math";
import styles from "styles/Index.module.scss";

export const Index = () => {
  const [colors, setColors] = useState<string[]>([]);

  useEffect(() => {
    const array = [];
    for (let i = 0; i < 300; i++) {
      array.push(
        `rgb(${random(255, 0)}, ${random(255, 0)}, ${random(255, 0)})`
      );
    }
    setColors(array);
  }, []);

  const cardVariants: Variants = {
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

  return (
    <>
      <div className={styles.container + " center"}>
        <motion.div
          key="welcome"
          className={styles.welcome}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          Welcome!
        </motion.div>
        {colors.map((color, i) => {
          return (
            <motion.div
              key={i}
              style={{ backgroundColor: color }}
              className={styles.box}
              initial={{ opacity: 0.6 }}
              animate={{ opacity: 0, x: random(100, 50), y: random(100, 50) }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          );
        })}
      </div>
      <section className={styles.information}>
        <h2>Info</h2>
        <div>
          <div>
            <small>2022.8.12</small>
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
          className={styles.categories}
        >
          <motion.div variants={cardVariants}>
            <h2>Categories</h2>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};
