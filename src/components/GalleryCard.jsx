import { motion } from "framer-motion";

const GalleryCard = ({ image }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="overflow-hidden rounded-xl"
    >
      <img
        src={image}
        alt=""
        className="w-full h-[300px] object-cover"
      />
    </motion.div>
  );
};

export default GalleryCard;
