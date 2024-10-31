import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import SectionTitle from "./SectionTitle";

interface Project {
  name: string;
  description: string;
  tech: string[];
  image: string;
  details: {
    background: string;
    responsibilities: string[];
    achievements: string[];
    techDetails?: string[];
  };
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // 添加滚动锁定功能
  useEffect(() => {
    if (selectedProject) {
      // 锁定滚动
      document.body.style.overflow = "hidden";
      // 可选：添加右侧padding以防止页面抖动
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
  }, [selectedProject]);

  const projects: Project[] = [
    {
      name: "前端工程化",
      description: "脚手架、工具库、私有化服务、前端架构建设",
      image:
        "https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?q=80&w=1650&auto=format&fit=crop",
      tech: ["Vue", "React", "Node.js", "工程化"],
      details: {
        background:
          "开发新项目需要依赖传统的‘复制粘贴，删除多余代码’方式来实现等（需占用 5-10小时 工时）",
        responsibilities: [
          "独立发起提案，与领导层协商，确定项目的重要性与必要性",
          "从零开始构建前端团队的各端项目模板（小程序端、移动端）、工具库以及脚手架",
          "实施Prettier、Eslint等工具，建立GitHooks检查机制和CodeReview规范",
          "输出技术文档，对团队成员进行讲解和培训，确保项目的顺利实施和团队的快速适应",
        ],
        achievements: [
          "显著提高了团队成员的开发效率：脚手架成果：初始化项目从5小时缩减至5分钟，实现了60倍的效率提升",
          "工具库成果：降低了成员的学习成本，只需要1分钟即可使用团队工具库",
          "唤起了团队对技术资产沉淀和规范化的意识",
          "统一了前端团队的编码规范和流程规范，建立了清晰的代码认识",
        ],
      },
    },
    {
      name: "下单小程序",
      description: "React-Taro、NutUI、多端小程序",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1650&auto=format&fit=crop",
      tech: ["Taro", "React", "TypeScript", "小程序"],
      details: {
        background:
          "该小程序目的是为了给经过审核的商家提供了一个便捷的下单平台和额度管理平台。商家通过小程序进行商家身份绑定后，验证通过的商家账户将实时同步可用金融额度，使商家能够方便快捷地进行选品、加购、下单等操作",
        responsibilities: [
          "担任项目组核心成员，从零到一构建前端项目，主导项目开发，推动产品需求、设计、前后端协作以及运维部署等工作",
          "完全独立负责整个小程序的开发工作",
        ],
        achievements: [
          "高效率高质量完成项目组的指标要求（3个星期开发完小程序，1个星期实施上线测试等，包含不限于四大模块的开发：商家身份绑定，商品筛选，购物车，订单管理）",
          "金融平台项目获得’公司创新项目奖‘",
        ],
      },
    },
    {
      name: "物流中台PDA安卓应用",
      description: "UniApp、H5 Plus、蓝牙打印、安卓应用",
      image:
        "https://images.unsplash.com/photo-1533749047139-189de3cf06d3?q=80&w=1632&auto=format&fit=crop",
      tech: ["UniApp", "Vue", "Android", "蓝牙打印"],
      details: {
        background:
          "在原先的物流小票查看和打印流程中，业务人员需要依赖电脑端操作，导致工作效率不高，无法实现实时高效处理。为了提升物流行业现场工作人员处理包裹和订单的效率和准确性，项目旨在开发一个移动端应用，使其能够在PDA设备上查看票据详情并高效打印小票",
        responsibilities: [
          "作为项目的唯一负责人，独立承担了从零到一的前端工程和业务开发",
          "在三周内高效完成了项目组指标要求，实现了项目的快速落地和使用",
        ],
        achievements: [
          "PDA设备（安卓手机）扫码广播监听：利用H5 Plus技术实现了对PDA设备原生广播的实时监听",
          "无线蓝牙打印机连接：通过UniApp蓝牙API，开发了一套无线蓝牙打印机连接方案",
          "标签模式打印小票：实现了通过蓝牙传输打印数据（标签模式），使移动端打印小票变得更加迅速和高效",
        ],
      },
    },
    {
      name: "供应链新订单系统",
      description: "Vue3.0、AntDesign4.0、供应链后台管理系统",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1650&auto=format&fit=crop",
      tech: ["Vue3", "TypeScript", "Ant Design"],
      details: {
        background:
          "原订单模块深度耦合于旧系统中，导致业务拓展困难、低效，无法满足新的业务需求。为解决这一问题，计划构建一个全新的项目，以提高灵活性，重新设计业务逻辑，并大幅度提升用户体验",
        responsibilities: [
          "担任项目主要核心负责人，负责从零开始构建前端工程，包括技术选型、组件封装、代码审查等工作",
          "负责分配团队成员的任务，确保项目业务需求得到有效完成",
          "与产品经理、设计师等密切合作，讨论需求的可行性和系统用户体验",
        ],
        achievements: [
          "成功将订单模块从原供应链系统中分离出来，独立成为一个新的系统",
          "通过独立的订单系统，前端团队能够更灵活地进行系统的维护和升级",
        ],
      },
    },
    {
      name: "FoF基金平台",
      description: "Vue、Highcharts、后台管理系统",
      image:
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1650&auto=format&fit=crop",
      tech: ["Vue", "Highcharts", "Element UI"],
      details: {
        background:
          "该项目是为投资人提供基金投资研究和决策支持的综合性平台，旨在为业务人员提供便捷的基金信息查询、筛选和分析功能",
        responsibilities: [
          "前期独立负责整个项目的代码开发和优化，包括项目部署与后期维护",
          "担任代码审查工作，对项目成员提交的代码进行审查和反馈",
          "抽取封装公用方法，减少代码冗余。优化项目PDF导出组件，改进导出流程，提高导出效率（时间优化了二十秒）",
        ],
        achievements: [
          "优化了PDF导出功能，显著提升了导出效率",
          "提高了代码复用性，降低了维护成本",
        ],
      },
    },
  ];

  // 项目详情弹窗组件
  const ProjectModal = ({
    project,
    onClose,
  }: {
    project: Project;
    onClose: () => void;
  }) => (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/50"
      onClick={onClose}
      // 防止触摸设备上的滚动穿透
      onTouchMove={(e) => e.preventDefault()}
    >
      <div
        className="bg-white rounded-lg w-full max-w-4xl h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-white p-6 border-b">
          <h2 className="text-2xl font-bold">{project.name}</h2>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100"
          >
            <FaTimes size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">项目背景</h3>
            <p className="text-gray-600">{project.details.background}</p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">项目职责</h3>
            <ul className="list-disc list-inside space-y-2">
              {project.details.responsibilities.map((item, index) => (
                <li key={index} className="text-gray-600">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">项目成果</h3>
            <ul className="list-disc list-inside space-y-2">
              {project.details.achievements.map((item, index) => (
                <li key={index} className="text-gray-600">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">技术栈</h3>
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
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle
          title="项目展示"
          subtitle="精选项目展示，体现专业技术能力"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              onClick={() => setSelectedProject(project)}
              className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4">
                    <span className="text-white text-sm px-2 py-1 bg-blue-500/50 rounded-full backdrop-blur-sm">
                      点击查看详情
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
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
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;
