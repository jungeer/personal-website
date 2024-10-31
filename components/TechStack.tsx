import React from "react";
import { motion } from "framer-motion";
import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";

const TechStack: React.FC = () => {
  const technologies = [
    { icon: SiReact, name: "React", color: "#61DAFB" },
    { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
    { icon: SiNextdotjs, name: "Next.js", color: "#000000" },
    { icon: SiTailwindcss, name: "Tailwind CSS", color: "#06B6D4" },
  ];

  return (
    <div className="py-12 relative">
      {/* 背景装饰 */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500 rounded-full blur-xl" />
        <div className="absolute bottom-10 right-10 w-20 h-20 bg-purple-500 rounded-full blur-xl" />
      </div>

      <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
        技术栈
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.1,
              type: "spring",
              stiffness: 100,
            }}
            whileHover={{
              scale: 1.05,
              rotate: [0, -5, 5, 0],
              transition: {
                rotate: {
                  duration: 0.5,
                  ease: "easeInOut",
                },
              },
            }}
            className="flex flex-col items-center p-6 rounded-xl backdrop-blur-md
                       bg-gradient-to-br from-white/10 to-white/5 
                       border border-white/10 shadow-lg
                       hover:border-white/20 transition-all duration-300"
          >
            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <tech.icon className="w-16 h-16" style={{ color: tech.color }} />
            </motion.div>
            <span className="mt-4 text-lg font-medium">{tech.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
