import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

const variants = {
  inactive: {
    opacity: 1,
    transition: {
      duration: 0.15,
      ease: "easeInOut",
    },
  },
  out: {
    opacity: 0.5,
    transition: {
      duration: 0.15,
      ease: "easeInOut",
    },
  },
  in: {
    opacity: 1,
    transition: {
      duration: 0.15,
      ease: "easeInOut",
    },
  },
};

const Transition = ({ children }) => {
  const { asPath } = useRouter();
  return (
    <div className="effect-1">
      <AnimatePresence mode="wait">
        <motion.div
          key={asPath}
          variants={variants}
          initial="in"
          animate="inactive"
          exit="out"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Transition;
