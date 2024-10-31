import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Mail } from "lucide-react";

const Header = () => {
  const [currentSection, setCurrentSection] = useState<string>("");

  useEffect(() => {
    const sections = document.querySelectorAll("section[data-section]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
            const sectionName = entry.target.getAttribute("data-section") || "";
            if (sectionName === "个人信息") {
              setCurrentSection("");
            } else {
              setCurrentSection(sectionName);
            }
          }
        });
      },
      {
        threshold: [0.3],
        rootMargin: "-50px 0px -50px 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 h-full flex items-center">
        <div className="flex-1">
          <a href="/" className="text-xl font-medium">
            Jungeer
          </a>
        </div>

        <div className="flex-1 flex justify-center">
          <AnimatePresence mode="wait">
            {currentSection && (
              <motion.h1
                key={currentSection}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent"
              >
                {currentSection}
              </motion.h1>
            )}
          </AnimatePresence>
        </div>

        <div className="flex-1 flex items-center justify-end gap-4">
          <a
            href="https://github.com/jungeer"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="mailto:95243241@qq.com"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
