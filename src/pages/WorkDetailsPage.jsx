import { motion } from "framer-motion";
import WorkDetails from "../components/WorkDetails";

const WorkDetailsPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <WorkDetails />
    </motion.div>
  );
};

export default WorkDetailsPage;
