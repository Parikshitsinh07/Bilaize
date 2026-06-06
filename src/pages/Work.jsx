import { motion } from "framer-motion";
import WorkSlider from "../components/WorkSlider";
import Header from "../components/Header";

const Work = () => {
  return (
    <>
      <Header />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.8 }}
      >
        <WorkSlider />
      </motion.div>
    </>
  );
};

export default Work;
