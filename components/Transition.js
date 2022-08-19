import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from 'next/router';
const Transition = ({ children }) => {
    const { asPath } = useRouter();
  const variants = {
    out: {
      opacity: 0.1,
      y: 5,
      transition: {
        duration: 0.1,
      },
    },
    in: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.1,
        delay: 0.1,
      },
    },
  };
  return (
    <div className="effect-1">
      <AnimatePresence initial={false} exitBeforeEnter>
        {children}
      </AnimatePresence>
    </div>
  );
};

export default Transition;
{/* <motion.div key={asPath} variants={variants} animate="in" initial="out" exit="out">
{children}
</motion.div> */}