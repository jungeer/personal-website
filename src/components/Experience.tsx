import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

const experiences = [
  {
    title: '高级前端工程师',
    company: '某科技公司',
    period: '2021 - 至今',
    description: '负责核心产品的前端架构设计与团队管理',
    achievements: [
      '优化首屏加载时间减少40%',
      '建立完整的组件库系统',
      '推动前端自动化测试覆盖率提升至85%'
    ]
  },
  {
    title: '前端开发工程师',
    company: '某创业公司',
    period: '2019 - 2021',
    description: '负责企业级应用的前端开发与性能优化',
    achievements: [
      '独立完成5个重要功能模块',
      '实现了微前端架构的落地',
      '建立前端性能监控体系'
    ]
  }
];

export default function Experience() {
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
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-200" />
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-12 md:text-right md:ml-auto' : 'md:pl-12'} md:w-1/2`}
            >
              <div className={`bg-white p-6 rounded-xl shadow-lg ${index % 2 === 0 ? 'md:mr-6' : 'md:ml-6'}`}>
                <div className="flex items-center gap-2 mb-4 text-gray-600">
                  <Calendar className="w-4 h-4" />
                  <span>{exp.period}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
                <h4 className="text-lg text-gray-600 mb-4">{exp.company}</h4>
                <p className="text-gray-600 mb-4">{exp.description}</p>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement) => (
                    <li key={achievement} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}