import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Mail, Sun, Moon, ArrowUp } from "lucide-react";

const Header = () => {
  const [currentSection, setCurrentSection] = useState<string>("");
  const [theme, setTheme] = useState<"light" | "dark">(
    () => (localStorage.getItem("theme") as "light" | "dark") || "light"
  );
  const [showScrollTop, setShowScrollTop] = useState(false);

  // 监听主题变化
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  // 监听滚动
  useEffect(() => {
    const sections = document.querySelectorAll("section[data-section]");
    const handleScroll = () => {
      // 显示/隐藏回到顶部按钮
      setShowScrollTop(window.scrollY > 500);

      // 检测当前可见区域
      const visibleSection = Array.from(sections).filter((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      })[0];

      if (visibleSection) {
        const sectionName = visibleSection.getAttribute("data-section") || "";
        if (sectionName === "个人信息") {
          setCurrentSection("");
        } else {
          setCurrentSection(sectionName);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 h-16 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-700"
        onDoubleClick={scrollToTop}
      >
        <div className="max-w-6xl mx-auto px-6 h-full flex items-center">
          <div className="flex-1">
            <button
              onClick={scrollToTop}
              className="text-xl font-medium text-gray-900 dark:text-white hover:opacity-80 transition-opacity"
            >
              Jungeer
            </button>
          </div>

          <div className="flex-1 flex justify-center">
            <AnimatePresence mode="wait">
              {currentSection && (
                <motion.h1
                  key={currentSection}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent"
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
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="mailto:95243241@qq.com"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <Moon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              ) : (
                <Sun className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* 回到顶部按钮 */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-colors z-50"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
