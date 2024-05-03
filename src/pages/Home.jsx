import { motion, useInView } from "framer-motion";
// import LottieAnimationCard from "../Components/LottieAnimationCard";
// import { HeroAnimation } from "../Assets/AssetsList";
import { HiOutlineDownload } from "react-icons/hi";
import { useRef } from "react";
import Button from "../components/Button";
import Hero from '../Assets/Weblayout.svg'
import Photo from '../Assets/capture.png'


const Home = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 1 } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 1 } },
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const downLoadCV = () => {
    const cvLink = "https://drive.google.com/file/d/1AfJ3qStJm9NmrdUynTchsvdhpT450fDG/view?usp=sharing";
    window.open(cvLink, "_blank");
  };
  return (
    <main className="relative my-10 overflow-hidden pt-24 " id="home">
      <motion.div
        ref={ref}
        className="relative z-20 flex items-center overflow-hidden "
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="container relative flex mx-auto justify-between flex-col md:flex-col lg:flex-row ">
          <motion.div
            className="relative z-20 flex flex-col sm:w-2/3  lg:w-2/5 justify-center items-start md:gap-3 mx-auto"
            variants={textVariants}
          >
            <h1 className="flex flex-col text-6xl font-black leading-none text-gray-800 uppercase font-bebas-neue md:text-9xl dark:text-white">
              <span className="text-fadeMainTheme"> Junior </span>
              Software Developer
            </h1>
            <p className="text-gray-700 dark:text-white text-4xl md:px-3 mt-2">
              Junior Fullstack Developer currently focused on Web
              Application. Interested in Mobile and AI Development. I love to
              learn new things and open new opportunities.
            </p>
            <motion.div variants={buttonVariants} className="flex mt-8 md:px-3">
              <Button
                btnText="Download CV"
                btnIcon={<HiOutlineDownload className="text-2xl" />}
                handleOnClick={downLoadCV}
              />
            </motion.div>
          </motion.div>
          <motion.div
            className="relative flex lg:justify-end justify-center items-center my-2  md:mt-0 pb-4"
            variants={textVariants}
          >
            <picture className="flex justify-center items-center p-10">
              <motion.img
                src={Photo}
                alt="skills"
                className="w-10/12 h-10/12 rounded-full"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
              />
            </picture>
          </motion.div>
        </div>
      </motion.div>
    </main>
  );
};

export default Home;
