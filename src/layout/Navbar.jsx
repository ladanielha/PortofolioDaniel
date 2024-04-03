import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link as ScrollLink, Events } from "react-scroll";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import Switcher from "../components/Switcher";
import ScrollProgress from "../components/ScrollProgress";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuAnimation = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const menuIconAnimation = {
    hidden: { rotate: 0 },
    visible: { rotate: 90, transition: { duration: 0.3 } },
  };

  const initialNavItemAnimation = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.5 } },
  };

  useEffect(() => {
    Events.scrollEvent.register("begin", function (to, element) {
      setIsMenuOpen(false);
    });

    return () => {
      Events.scrollEvent.remove("begin");
    };
  }, []);

  const NavItems = ["Home", "Projects", "About", "Contact"];

  return (
    <div className="py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl xl:max-w-full dark:bg-darkBg z-40 relative">
      <div className="flex items-center justify-between fixed top-0 w-full p-6 bg-opacity-30 border-opacity-10 backdrop-blur-md border-b z-50">
        <div
          to="/"
          onClick={() => window.scroll(0, 0)}
          className="nav-logo font-black leading-none text-gray-800 font-bebas-neue   dark:text-lightText flex items-center ml-4 cursor-pointer  no-underline text-4xl "
        >
          Portofolio
          <span className="r font-bebas-neue text-mainTheme text-6xl font-bold ">
            D
          </span>
          aniel
        </div>
        <ul className="items-center hidden space-x-16 gap-20 lg:flex">
          {NavItems.map((item, index) => (
            <motion.li
              key={index}
              className="hover:text-gray-600 focus:outline-none focus:text-white underline-custom text-2xl"
              variants={initialNavItemAnimation}
            >
              <ScrollLink
                activeClass="active"
                to={item.toLowerCase()}
                spy={true}
                smooth={true}
                duration={500} // Adjust scroll duration as needed
                className="font-medium tracking-wide text-gray-700 dark:text-lightText transition-colors duration-200 hover:text-fadeMainTheme cursor-pointer"
              >
                {item}
              </ScrollLink>
            </motion.li>
          ))}
        </ul>
        <ul className="items-center hidden space-x-8 lg:flex">
          <li>
            <Switcher />
          </li>
        </ul>
        <div className="lg:hidden flex justify-center items-center z-40">
          <Switcher />
          <motion.button
            aria-label="Toggle Menu"
            title="Toggle Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <motion.div
              className="text-gray-600 text-6xl font-bold dark:text-lightText"
              initial="hidden"
              animate={isMenuOpen ? "visible" : "hidden"}
              variants={menuIconAnimation}
            >
              <AiOutlineMenu />
            </motion.div>
          </motion.button>
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                className="absolute top-1 left-0 w-full "
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={menuAnimation}
              >
                <div className="p-5 bg-white border rounded-xl shadow-sm dark:bg-darkBg ">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <a
                        href="/"
                        aria-label="Company"
                        title="Company"
                        className="inline-flex items-center"
                      >
                        <div
                          to="/"
                          onClick={() => window.scroll(0, 0)}
                          className="nav-logo font-black leading-none text-gray-800 font-bebas-neue   dark:text-lightText flex items-center ml-4 cursor-pointer  no-underline text-4xl "
                        >
                          Portofolio
                          <span className="r font-bebas-neue text-mainTheme text-6xl font-bold ">
                            D
                          </span>
                          aniel
                        </div>
                      </a>
                    </div>
                    <div>
                      <motion.button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <motion.div
                          className="text-gray-600 dark:text-lightText text-4xl font-bold"
                          initial="hidden"
                          animate="visible"
                          variants={menuIconAnimation}
                        >
                          <RxCross2 />
                        </motion.div>
                      </motion.button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      {NavItems.map((item, index) => (
                        <motion.li
                          key={item}
                          className="hover:text-gray-600 focus:outline-none focus:text-white underline-custom "
                          variants={initialNavItemAnimation}
                        >
                          <ScrollLink
                            to={item.toLowerCase()}
                            activeClass="active"
                            onClick={() => setIsMenuOpen(false)}
                            spy={true}
                            smooth={true}
                            duration={500} // Adjust scroll duration as needed
                            className="font-medium tracking-wide text-gray-700 dark:text-lightText transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            {item}
                          </ScrollLink>
                        </motion.li>
                      ))}
                    </ul>
                  </nav>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <div>
        <ScrollProgress />
      </div>
    </div>
  );
};

export default Navbar;
