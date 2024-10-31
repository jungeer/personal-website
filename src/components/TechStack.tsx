import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiJquery,
  SiVuedotjs,
  SiReact,
  SiTailwindcss,
  SiVite,
  SiWebpack,
  SiNodedotjs,
  SiMongodb,
  SiGraphql,
  SiGit,
  SiEslint,
  SiOpenai,
  SiAntdesign,
  SiElement,
  SiWechat,
  SiExpress,
} from "react-icons/si";
import {
  FaVuejs,
  FaMobile,
  FaChartBar,
  FaChartLine,
  FaTimes,
} from "react-icons/fa";
import { DiNodejs } from "react-icons/di";

interface TechCategory {
  title: string;
  items: {
    icon: React.ElementType;
    name: string;
    color: string;
  }[];
}

const TechGrid = ({ categories }: { categories: TechCategory[] }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {categories.map((category, categoryIndex) => (
      <motion.div
        key={category.title}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: categoryIndex * 0.1 }}
        className="bg-white rounded-xl p-6 shadow-lg"
      >
        <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
        <div className="grid grid-cols-2 gap-4">
          {category.items.map((tech) => (
            <motion.div
              key={tech.name}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              className="flex flex-col items-center p-3 rounded-lg hover:bg-gray-50"
            >
              <tech.icon
                className="w-8 h-8 mb-2"
                style={{ color: tech.color }}
              />
              <span className="text-sm text-gray-600">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    ))}
  </div>
);

const TechStack = () => {
  console.log("TechStack component rendering");

  const [showModal, setShowModal] = useState(false);

  const mainCategories: TechCategory[] = [
    {
      title: "前端框架",
      items: [
        { icon: SiVuedotjs, name: "Vue", color: "#4FC08D" },
        { icon: SiReact, name: "React", color: "#61DAFB" },
        { icon: FaVuejs, name: "Vue Router", color: "#4FC08D" },
        { icon: SiVuedotjs, name: "Pinia", color: "#FFE873" },
      ],
    },
    {
      title: "后端技术",
      items: [
        { icon: DiNodejs, name: "Koa", color: "#33333D" },
        { icon: SiExpress, name: "Express", color: "#000000" },
        { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
        { icon: SiGraphql, name: "GraphQL", color: "#E10098" },
      ],
    },
    {
      title: "工程化工具",
      items: [
        { icon: SiVite, name: "Vite", color: "#646CFF" },
        { icon: SiWebpack, name: "Webpack", color: "#8DD6F9" },
        { icon: SiNodedotjs, name: "Node.js", color: "#339933" },
      ],
    },
  ];

  const allCategories: TechCategory[] = [
    {
      title: "基础技术",
      items: [
        { icon: SiHtml5, name: "HTML5", color: "#E34F26" },
        { icon: SiCss3, name: "CSS3", color: "#1572B6" },
        { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
        { icon: SiJquery, name: "jQuery", color: "#0769AD" },
      ],
    },
    ...mainCategories,
    {
      title: "Web UI 框架",
      items: [
        { icon: SiElement, name: "Element Plus", color: "#409EFF" },
        { icon: SiAntdesign, name: "Ant Design", color: "#0170FE" },
        { icon: SiTailwindcss, name: "Tailwind CSS", color: "#06B6D4" },
      ],
    },
    {
      title: "移动端开发",
      items: [
        { icon: SiVuedotjs, name: "UniApp", color: "#2B9939" },
        { icon: SiWechat, name: "小程序", color: "#07C160" },
        { icon: SiAntdesign, name: "Vant", color: "#1989FA" },
        { icon: FaMobile, name: "移动适配", color: "#FF6B6B" },
      ],
    },
    {
      title: "可视化",
      items: [
        { icon: FaChartBar, name: "ECharts", color: "#AA344D" },
        { icon: FaChartLine, name: "Highcharts", color: "#8087E8" },
      ],
    },
    {
      title: "开发工具",
      items: [
        { icon: SiGit, name: "Git", color: "#F05032" },
        { icon: SiEslint, name: "ESLint", color: "#4B32C3" },
        { icon: SiOpenai, name: "AI Tools", color: "#412991" },
      ],
    },
  ];

  const handleOpenModal = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("Button clicked!");
    setShowModal(true);
  };

  const handleCloseModal = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setShowModal(false);
  };

  return (
    <>
      <section className="py-20 bg-gray-50">
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500 rounded-full blur-xl" />
            <div className="absolute bottom-10 right-10 w-20 h-20 bg-purple-500 rounded-full blur-xl" />
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
          >
            技术栈
          </motion.h2>

          <TechGrid categories={mainCategories} />

          <div className="text-center mt-8">
            <button
              type="button"
              onClick={handleOpenModal}
              className="relative z-10 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors cursor-pointer"
            >
              查看全部技术栈
            </button>
          </div>
        </div>
      </section>

      {showModal && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
          onClick={handleCloseModal}
        >
          <div
            className="bg-white rounded-lg w-full max-w-6xl h-[90vh] relative flex flex-col"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
          >
            <div className="sticky top-0 bg-white p-8 pb-4 border-b">
              <h2 className="text-2xl font-bold text-center">全部技术栈</h2>
              <button
                type="button"
                className="absolute top-6 right-6 p-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setShowModal(false);
                }}
              >
                <FaTimes size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-8 pt-4">
              <TechGrid categories={allCategories} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TechStack;
