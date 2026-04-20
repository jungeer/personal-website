import { motion } from "framer-motion";
import { Calendar, Building2, Award, Briefcase } from "lucide-react";
import SectionTitle from "./SectionTitle";

interface Experience {
  company: string;
  period: string;
  title: string;
  responsibilities: string[];
  achievements?: string[];
}

const experiences: Experience[] = [
  {
    company: "xxx科技公司（相亲小程序 / 管理系统）",
    period: "2025.03-2025.07",
    title: "项目管理 / 产品经理 / 前端开发",
    responsibilities: [
      "统筹需求池管理、版本排期与任务分工，保障版本按时上线",
      "制定《项目管理流程》《需求交付标准》《线上事故记录》，规范协作机制并降低沟通成本",
      "组织需求评审、进度同步与风险复盘会议，推动跨角色高效协同",
      "参与关键代码评审并把控交付质量，统一需求开发与上线节奏",
      "参与前端成员招聘，补齐团队人力并提升项目交付稳定性",
    ],
    achievements: ["项目日活 5w+，有效用户 30w+"],
  },
  {
    company: "xxx科技公司（旅游小程序）",
    period: "2024.12-2025.02",
    title: "项目管理 / 产品经理 / 前端开发",
    responsibilities: [
      "独立承担小程序项目全流程推进，覆盖需求到上线的项目管理与交付",
      "主导需求从 0 到 1 收集与梳理，输出《产品需求稿》《管理后台需求稿》并明确验收标准",
      "负责需求里程碑拆解、任务分解与排期管理，输出《主要目标》《任务拆解》《需求排期》",
      "搭建项目技术方案与开发规范，推动酒店、机票两大业务模块按计划落地",
    ],
    achievements: ["形成可复用的项目管理与交付模板，提升后续项目启动效率"],
  },
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
    <section className="py-20 bg-white" data-section="工作经历">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle title="工作经历" subtitle="专业的前端开发工作经验" />

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
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-2 mb-4 text-gray-600">
                  <Calendar className="w-4 h-4" />
                  <span>{exp.period}</span>
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <Building2 className="w-5 h-5 text-blue-500" />
                  <h3 className="text-xl font-semibold dark:text-white">
                    {exp.company}
                  </h3>
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
