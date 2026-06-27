import { motion } from "framer-motion";
import Header from "../components/Header";
import WorkList from "../components/WorkList";
import ClientShow from "../components/ClientShow";
import Footer from "../components/Footer";

const Work = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <Header />
      <WorkList />
      <ClientShow />
      <div className="h-24 md:h-36 bg-[#f7f5f5] w-full" /> {/* Large spacer between client and footer */}
      <Footer />
    </motion.div>
  );
};

export default Work;
