import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { FaRegCircle } from "react-icons/fa";
const HeroPic = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className=" h-full flex items-center justify-center "
    >
      <img
        src="javed.jpg"
        alt="Javed Ahmad"
        className="h-[370px] w-[370px]  rounded-full"
      />

      <div className=" absolute -z-10 flex justify-center items-center animate-pulse ">
        <FaRegCircle className=" md:h-[30%] sm:h-[60%] min-h-[500px] w-auto text-cyan blur-md animate-[spin_20s_linear_infinite] " />
      </div>
    </motion.div>
  );
};

export default HeroPic;
