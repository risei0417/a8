import { motion } from "framer-motion";

export const Pending = () => {
  return (
    <div style={{ cursor: "not-allowed" }}>
      <motion.ol
        className="center"
        style={{
          fontSize: "18px",
          listStyle: "none",
          marginLeft: "3rem",
          color: "lightgrey",
        }}
        animate={{ border: [1, 0, 0] }}
      >
        準備中
        <motion.li
          animate={{ opacity: [1, 0, 0] }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
          }}
        >
          .
        </motion.li>
        <motion.li
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
          }}
        >
          .
        </motion.li>
        <motion.li
          animate={{ opacity: [0, 0, 1] }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
          }}
        >
          .
        </motion.li>
      </motion.ol>
    </div>
  );
};
