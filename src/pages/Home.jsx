import { motion } from "framer-motion";
import Hero from "../components/Hero";
import Ripples from "react-ripples";
import Navbar from "../components/Navbar";

const Home = ({ onVideoLoad }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <Navbar />
      <Ripples color="rgba(255,255,255,0.0)" style={{ display: "block" }}>
        <Hero onVideoLoad={onVideoLoad} />
      </Ripples>
    </motion.div>
  );
};

export default Home;
