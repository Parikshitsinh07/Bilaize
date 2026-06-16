import { motion } from "framer-motion";
import CategoryProjects from "../components/CategoryProjects";

const CategoryProjectsPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
    >
      <CategoryProjects />
    </motion.div>
  );
};

export default CategoryProjectsPage;
