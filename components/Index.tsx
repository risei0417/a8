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
      <motion.div
        className="center"
        style={{ fontSize: "40px", height: "30rem" }}
        animate={{ border: [1, 0, 0] }}
      >
        準備中
        <motion.div
          animate={{ opacity: [1, 0, 0] }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
          }}
        >
          .
        </motion.div>
        <motion.div
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
          }}
        >
          .
        </motion.div>
        <motion.div
          animate={{ opacity: [0, 0, 1] }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
          }}
        >
          .
        </motion.div>
      </motion.div>
    </>
  );
};
