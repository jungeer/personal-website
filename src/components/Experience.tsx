import React from "react";
import { motion } from "framer-motion";
import { Calendar, Building2, Award, Briefcase } from "lucide-react";

interface Experience {
  company: string;
  period: string;
  title: string;
  responsibilities: string[];
  achievements?: string[];
}

const experiences: Experience[] = [
  {
    company: "xxx科技公司",
    period: "2024.06-2024.11",
    title: "H5组前端组长",
    responsibilities: [
      "利用AI工具辅助设计与编码流程，减少重复性工作，提升产出效率",
      "制定并实施前端技术栈选型，持续跟进技术发展趋势",
      "主导需求分析，合理分配开发任务，协调团队资源",
      "组织技术分享会，提升团队整体技术水平",
    ],
    achievements: ["试用期三个月评级A"],
  },
  {
    company: "xxx科技公司",
    period: "2022.01-2024.02",
    title: "高级前端开发工程师",
    responsibilities: [
      "领导核心和紧急项目的开发，包括需求分配和任务管理",
      "推动团队技术规范化，涵盖CodeReview、前端代码规范、脚手架和前后端联调规范等",
      "负责团队的代码审查和提出改进建议",
      "主导技术面试和团队招聘工作",
    ],
    achievements: [
      "25人团队年终考核第二",
      "提前转正，最佳新人奖",
      "一年内升职加薪",
    ],
  },
  {
    company: "xxx科技公司",
    period: "2019.10-2021.12",
    title: "前端开发工程师",
    responsibilities: [
      "承担已有平台项目的维护工作，包括系统漏洞修复、性能优化、安全更新等，以确保平台的稳定运行和用户体验",
      "独立负责完成开发任务，从需求分析到系统上线，包括系统架构设计、模块开发、等流程工作，保证项目按时交付和达到预期目标",
      "负责对团队成员的代码进行审查，通过Code Review发现潜在问题和优化空间，提出修改建议和改进方案，以确保代码质量和团队协作效率",
    ],
    achievements: ["连续8个月月度考核排名第一", "获得优秀项目组评定"],
  },
];

const Experience = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          工作经历
        </motion.h2>

        <div className="relative">
          {/* 时间轴线 */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-200" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.period}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`relative mb-12 ${
                index % 2 === 0
                  ? "md:pr-12 md:text-right md:ml-auto"
                  : "md:pl-12"
              } md:w-1/2`}
            >
              <div
                className={`bg-white p-6 rounded-xl shadow-lg ${
                  index % 2 === 0 ? "md:mr-6" : "md:ml-6"
                }`}
              >
                <div className="flex items-center gap-2 mb-4 text-gray-600">
                  <Calendar className="w-4 h-4" />
                  <span>{exp.period}</span>
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <Building2 className="w-5 h-5 text-blue-500" />
                  <h3 className="text-xl font-semibold">{exp.company}</h3>
                </div>

                <div className="flex items-center gap-2 mb-4 text-gray-600">
                  <Briefcase className="w-4 h-4" />
                  <h4 className="text-lg">{exp.title}</h4>
                </div>

                <div className="space-y-4">
                  <div>
                    <h5 className="font-medium mb-2">主要职责：</h5>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-sm text-gray-600"
                        >
                          <span className="mt-1.5 w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {exp.achievements && exp.achievements.length > 0 && (
                    <div>
                      <h5 className="font-medium mb-2 flex items-center gap-2">
                        <Award className="w-4 h-4 text-yellow-500" />
                        成就与评价：
                      </h5>
                      <ul className="space-y-2">
                        {exp.achievements.map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-sm text-gray-600"
                          >
                            <span className="mt-1.5 w-1.5 h-1.5 bg-yellow-500 rounded-full flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
