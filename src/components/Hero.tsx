import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Check, Copy } from "lucide-react";

export default function Hero() {
  const [copiedField, setCopiedField] = useState<"id" | "email" | null>(null);
  const [toast, setToast] = useState<{ show: boolean; message: string }>({
    show: false,
    message: "",
  });

  const copyToClipboard = async (text: string, field: "id" | "email") => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);

      // 设置提示信息
      setToast({
        show: true,
        message: `${field === "id" ? "小红书ID" : "邮箱"}已复制到剪贴板`,
      });

      // 重置状态
      setTimeout(() => {
        setCopiedField(null);
        setToast({ show: false, message: "" });
      }, 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
      setToast({
        show: true,
        message: "复制失败，请手动复制",
      });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center py-20">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <img
            src="https://github.com/jungeer.png"
            alt="jungeer"
            className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-white shadow-lg"
          />
          <h1 className="text-4xl font-bold mb-4">前端俊哥儿乐___</h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-xl text-gray-600 space-y-2 mb-8"
        >
          <p>深圳 · 前端开发工程师</p>
          <p>计算机科学与技术</p>
          <div
            className="flex items-center justify-center gap-2 text-base text-gray-500 cursor-pointer group"
            onClick={() => copyToClipboard("420524309", "id")}
          >
            <p>小红书博主（ID: 420524309）</p>
            {copiedField === "id" ? (
              <Check className="w-4 h-4 text-green-500" />
            ) : (
              <Copy className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            )}
          </div>
          <div
            className="flex items-center justify-center gap-2 text-base text-gray-500 cursor-pointer group"
            onClick={() => copyToClipboard("95243241@qq.com", "email")}
          >
            <p>邮箱：95243241@qq.com</p>
            {copiedField === "email" ? (
              <Check className="w-4 h-4 text-green-500" />
            ) : (
              <Copy className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex justify-center gap-6 mb-12"
        >
          <a
            href="https://github.com/jungeer"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
            title="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
        </motion.div>

        {/* 添加提示信息 */}
        <AnimatePresence>
          {toast.show && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed bottom-8 left-1/2 transform -translate-x-1/2 px-6 py-3 bg-gray-800 text-white rounded-lg shadow-lg"
              style={{ zIndex: 1000 }}
            >
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-400" />
                <span>{toast.message}</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
