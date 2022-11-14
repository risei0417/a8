import { motion } from "framer-motion";

type Props = {
  title?: string;
}

export const Pending = (props: Props) => {
  const { title } = props;

  return (
    <div style={{ cursor: "not-allowed" }}>
      <motion.ol
        className="center"
        style={{
          fontSize: "18px",
          listStyle: "none",
          color: "lightgrey",
          width: "100%",
          paddingRight: "1rem",
        }}
        animate={{ border: [1, 0, 0] }}
      >
        Coming Soon
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
      <span>{title}</span>
    </div>
  );
};
