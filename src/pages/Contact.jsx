import {
  FaDiscord,
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { ContactAnimation } from "../Assets/AssetsList";
import LottieAnimationCard from "../components/LottieAnimationCard";
import Title from "../components/Title";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      className="my-10 mt-20  flex justify-center items-center flex-col"
      id="contact"
    >
      <Title text="Contact" id="contact" />
      <div className=" flex justify-center items-center gap-5 flex-col-reverse lg:flex-row  px-10 ">
        <LottieAnimationCard AnimationSrc={ContactAnimation} />
        <motion.div className="relative z-20 flex flex-col sm:w-2/3  lg:w-2/5 justify-center items-start md:gap-3 mx-auto">
          <h3 className="flex flex-col text-2xl font-black leading-none text-gray-800 uppercase font-bebas-neue md:text-6xl dark:text-white">
            Contact me here
          </h3>
          <motion.p
            className="title text-xl mt-4 tracking-wider text- leading-[1.7rem] md:mb-5 text-gray-700 dark:text-white"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.2,
              type: "spring",
            }}
          >
            Feel free to contact me if you have any{" "}
            <span className="bg-transparent md:bg-gray-100 bg-opacity-50 xl:bg-transparent">
              questions or just want to say hi.
            </span>
          </motion.p>
          <motion.p
            className="title text-xl mt-4 tracking-wider text-gray-700 dark:text-white leading-[1.7rem] mb-5"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.3,
              type: "spring",
            }}
          >
            <a href="mailto:laurentiusdaniel0@gmail.com?subject=Hello&body=Hello Daniel,">
              laurentiusdaniel0@gmail.com
            </a>
          </motion.p>
          <div className="flex justify-center items-center space-x-4">
            <motion.a
              href="mailto:laurentiusdaniel0@gmail.com?subject=Hello&body=Hello Daniel,"
              className="flex justify-center items-center bg-gray-700 w-14 h-14 rounded-full text-gray-100 hover:bg-gray-400 transition-all ease-in-out duration-300"
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                y: { delay: 0.1 },
                opacity: { delay: 0.2 },
              }}
            >
              <FaEnvelope className="text-3xl" />
            </motion.a>

            <motion.a
              href="https://github.com/ladanielha"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center bg-gray-700 w-14 h-14 rounded-full text-gray-100 hover:bg-gray-400 transition-all ease-in-out duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                y: { delay: 0.2 },
                opacity: { delay: 0.3 },
              }}
            >
              <FaGithub className="text-3xl" />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/laurentiusdaniel.zip/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center bg-gray-700 w-14 h-14 rounded-full text-gray-100 hover:bg-gray-400 transition-all ease-in-out duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                y: { delay: 0.3 },
                opacity: { delay: 0.4 },
              }}
            >
              <FaInstagram className="text-3xl" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/laurentiusdanielhandoyo30/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center bg-gray-700 w-14 h-14 rounded-full text-gray-100 hover:bg-gray-400 transition-all ease-in-out duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                y: { delay: 0.4 },
                opacity: { delay: 0.5 },
              }}
            >
              <FaLinkedin className="text-3xl" />
            </motion.a>
            <motion.a
              href="https://discordapp.com/users/danhan0101#3969"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center bg-gray-700 w-14 h-14 rounded-full text-gray-100 hover:bg-gray-400 transition-all ease-in-out duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                y: { delay: 0.5 },
                opacity: { delay: 0.6 },
              }}
            >
              <FaDiscord className="text-3xl" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
