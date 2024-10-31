import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

interface Project {
  name: string;
  description: string;
  link: string;
  tech: string[];
  preview?: boolean;
  stars?: number;
}

const OpenSource = () => {
  const projects: Project[] = [
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
    <section className="py-20 bg-white" data-section="开源项目">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle title="开源项目" subtitle="展示一些有趣的开源项目" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.a
              key={project.name}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  type: "spring",
                  duration: 1,
                  delay: index * 0.1,
                  bounce: 0.3,
                },
              }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{
                scale: 1.03,
                y: -5,
                transition: { duration: 0.2 },
              }}
              className="block p-6 bg-gray-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold">{project.name}</h3>
                {project.preview && (
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full"
                  >
                    Demo
                  </motion.span>
                )}
              </div>
              <p className="text-gray-600 mb-4 h-12 line-clamp-2">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      transition: {
                        delay: index * 0.1 + techIndex * 0.05,
                      },
                    }}
                    className="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
              {project.stars && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { delay: index * 0.1 + 0.3 },
                  }}
                  className="mt-4 flex items-center text-gray-600"
                >
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span>{project.stars}</span>
                </motion.div>
              )}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OpenSource;
