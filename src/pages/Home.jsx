import Hero from "../components/Hero";
import Ripples from "react-ripples";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Ripples color="rgba(255,255,255,0.0)" style={{ display: "block" }}>
        <Hero />
      </Ripples>
    </>
  );
};

export default Home;
