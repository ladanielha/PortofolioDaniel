import { AboutAnimation } from "../Assets/AssetsList";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Title from "../components/Title";
import LottieAnimationCard from "../components/LottieAnimationCard";
import TimeLine from "../components/TimeLine";


const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref);
    const variants = {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          delay: 1 * 0.5,
        },
      },
    };
    return (
      <section id="about" className="flex flex-col items-center justify-center">
        <Title text="About Me" styles="mb-10" />
        <LottieAnimationCard AnimationSrc={AboutAnimation} />
  
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={variants}
          ref={ref}
          className="my-7 w-full"
        >
          <TimeLine />
        </motion.div>
      </section>
    );
  };
  
  export default About;
  