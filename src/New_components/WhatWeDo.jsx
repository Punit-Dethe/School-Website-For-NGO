import React from "react";
import sampleImage from "../assets/react.svg";
import { motion } from "framer-motion";

const textSections = [
  {
    title: "Section 1",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi euismod nisi, euismod euismod nisi nisi euismod nisi.",
  },
  {
    title: "Section 2",
    content:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "Section 3",
    content:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
  },
  {
    title: "Section 4",
    content:
      "Sunt in culpa qui officia deserunt mollit anim id est laborum. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const TwoColumnLayout = () => {
  return (
    <div className="w-full bg-white flex flex-col items-center px-2 sm:px-4 pt-12 pb-0">
      <h1>What We Do</h1>
      <div className="flex flex-col lg:flex-row h-screen w-full">
        {/* Left: Fixed Image */}
        <div className="lg:w-1/2 w-full h-64 lg:h-screen lg:sticky lg:top-0 flex items-center justify-center bg-gray-50">
          <img
            src={sampleImage}
            alt="Static visual"
            className="object-contain h-full w-full max-h-[60vh] lg:max-h-full p-4"
          />
        </div>
        {/* Right: Scrollable Content */}
        <div className="lg:w-1/2 w-full overflow-y-auto bg-white px-4 py-8 md:px-8 md:py-12 space-y-8 h-full scroll-smooth">
          {textSections.map((section, idx) => (
            <motion.section
              key={idx}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="bg-white shadow-lg rounded-2xl p-6 md:p-8 transition-all duration-300"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-gray-900">{section.title}</h2>
              <p className="text-gray-700 text-base md:text-lg">{section.content}</p>
            </motion.section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TwoColumnLayout; 