import React, { useState, useEffect } from "react";
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

  // 添加滚动锁定功能
  useEffect(() => {
    if (showModal) {
      // 锁定滚动
      document.body.style.overflow = "hidden";
      // 添加右侧padding以防止页面抖动
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      // 恢复滚动
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }

    // 清理函数
    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [showModal]);

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

  // 更新项目数据
  const projects = [
    {
      name: "2048",
      description: "2048 游戏 - 经典小游戏的重新实现",
      link: "https://github.com/jungeer/2048",
      tech: ["JavaScript", "Game", "Web"],
      preview: true,
    },
    {
      name: "lucky-board",
      description: "百分百幸运板 💐 - 互动抽奖活动页面",
      link: "https://github.com/jungeer/lucky-board",
      tech: ["Vue", "Animation", "Interactive"],
      preview: true,
    },
    {
      name: "christmas",
      description: "圣诞节页面动画 🎄 - 节日主题动画特效",
      link: "https://github.com/jungeer/christmas",
      tech: ["JavaScript", "Animation", "Holiday"],
      preview: true,
    },
    {
      name: "dada-site",
      description: "哒哒 🐱 ⚡️ - 现代化的小猫网站",
      link: "https://github.com/jungeer/dada-site",
      tech: ["TypeScript", "React", "Modern Web"],
      preview: true,
    },
    {
      name: "fe-blog",
      description: "这是一个博客仓库，没什么事的时候就写一写，记录记录📝",
      link: "https://github.com/jungeer/fe-blog",
      tech: ["Blog", "Documentation"],
      stars: 1,
    },
    {
      name: "wxapp-taro-template",
      description: "微信小程序\\Taro\\NutUI\\Typescript\\Vue3.0",
      link: "https://github.com/jungeer/wxapp-taro-template",
      tech: ["Taro", "Vue3", "TypeScript"],
    },
  ];

  return (
    <>
      <section className="py-20 bg-gray-50">
        <div className="relative max-w-6xl mx-auto px-6">
          {/* 移除个人信息部分，直接从技术栈开始 */}
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

          {/* 项目展示部分 */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-center mb-8">开源项目</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <motion.a
                  key={project.name}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold">{project.name}</h3>
                    {project.preview && (
                      <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">
                        Demo
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 mb-4 h-12 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {project.stars && (
                    <div className="mt-4 flex items-center text-gray-600">
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span>{project.stars}</span>
                    </div>
                  )}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {showModal && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/50"
          onClick={handleCloseModal}
          // 防止���摸设备上的滚动穿透
          onTouchMove={(e) => e.preventDefault()}
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
