import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github } from "lucide-react";
import avatar from "../assets/images/avatar.png";

export default function Hero() {
  const [toast, setToast] = useState<{ show: boolean; message: string }>({
    show: false,
    message: "",
  });

  const copyToClipboard = async (text: string, field: "id" | "email") => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
        showToast(`${field === "id" ? "小红书ID" : "邮箱"}已复制`);
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        textArea.style.top = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        try {
          document.execCommand("copy");
          textArea.remove();
          showToast(`${field === "id" ? "小红书ID" : "邮箱"}已复制`);
        } catch (err) {
          console.error("Fallback: Oops, unable to copy", err);
          showToast("复制失败，请手动复制");
        }
      }
    } catch (err) {
      console.error("Failed to copy:", err);
      showToast("复制失败，请手动复制");
    }
  };

  const showToast = (message: string) => {
    setToast({ show: true, message });
    const timer = setTimeout(() => {
      setToast({ show: false, message: "" });
    }, 2000);

    return () => clearTimeout(timer);
  };

  return (
    <section
      className="h-screen flex items-center justify-center dark:bg-gray-900"
      data-section="个人信息"
    >
      <div className="max-w-2xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="relative inline-block">
            <motion.div
              className="relative"
              animate={{
                scale: [1, 1.15, 1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <img
                src={avatar}
                alt="jungeer"
                className="w-32 h-32 rounded-full shadow-lg"
              />
              <motion.div
                className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-gray-200 to-gray-300 -z-10"
                animate={{
                  opacity: [0.3, 0.5, 0.3],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white mt-8">
            前端俊哥儿乐_
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-6 mb-12"
        >
          <div className="flex items-center justify-center gap-3 text-gray-600 dark:text-gray-400">
            <span>深圳</span>
            <span className="w-1 h-1 bg-gray-300 rounded-full" />
            <span>前端开发工程师</span>
          </div>

          <p className="text-gray-500 dark:text-gray-400">计算机科学与技术</p>

          <div className="flex flex-col items-center gap-2">
            <motion.button
              className="text-gray-500 dark:text-gray-400 px-3 py-1.5 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              onClick={() => copyToClipboard("420524309", "id")}
              whileHover={{ scale: 1.02 }}
            >
              <span>小红书博主（ID: 420524309）</span>
            </motion.button>

            <motion.button
              className="text-gray-500 dark:text-gray-400 px-3 py-1.5 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              onClick={() => copyToClipboard("95243241@qq.com", "email")}
              whileHover={{ scale: 1.02 }}
            >
              <span>95243241@qq.com</span>
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <a
            href="https://github.com/jungeer"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <Github className="w-5 h-5 text-gray-700 dark:text-gray-300" />
          </a>
        </motion.div>

        <AnimatePresence>
          {toast.show && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="fixed bottom-8 left-1/2 -translate-x-1/2 px-4 py-2 bg-green-500 text-white text-sm rounded-lg shadow-lg z-50"
            >
              {toast.message}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
