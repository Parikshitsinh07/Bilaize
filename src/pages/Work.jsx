import { motion } from "framer-motion";
import Header from "../components/Header";
import WorkSlider from "../components/WorkSlider";

const Work = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <Header />
      <WorkSlider />
    </motion.div>
  );
};

export default Work;
