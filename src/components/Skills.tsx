import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const skillCategories = [
  {
    title: '基础技术',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'jQuery'],
    proficiency: 95
  },
  {
    title: '前端框架',
    skills: ['Vue 2.0', 'Vue 3.0', 'React'],
    proficiency: 90
  },
  {
    title: '工具库',
    skills: ['Vue Router', 'Vuex', 'Pinia', 'VueUse', 'Lodash', 'Day.js', 'ahooks'],
    proficiency: 88
  },
  {
    title: 'CSS 框架',
    skills: ['Tailwind CSS', 'UnoCSS'],
    proficiency: 85
  },
  {
    title: '小程序开发',
    skills: ['UniApp', 'React Taro'],
    proficiency: 85
  },
  {
    title: 'UI 框架',
    skills: ['Element UI', 'Ant Design', 'Arco Design', 'Naive UI', 'Vant UI', 'Nut UI', 'uView'],
    proficiency: 92
  },
  {
    title: '数据可视化',
    skills: ['ECharts', 'Highcharts'],
    proficiency: 80
  },
  {
    title: '工程化工具',
    skills: ['Vite', 'Webpack', 'Prettier', 'ESLint', 'Commitlint', 'Husky', 'Git'],
    proficiency: 88
  },
  {
    title: '后端技术',
    skills: ['Node.js', 'Koa', 'Express', 'MongoDB', 'GraphQL'],
    proficiency: 75
  },
  {
    title: 'AI 工具',
    skills: ['ChatGPT', 'AIGC'],
    proficiency: 85
  }
];

export default function Skills() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          技术栈
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-6">技能熟练度</h3>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={skillCategories}
                  layout="vertical"
                  margin={{ top: 5, right: 30, left: 100, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" domain={[0, 100]} />
                  <YAxis dataKey="title" type="category" width={100} />
                  <Tooltip />
                  <Bar dataKey="proficiency" fill="#4F46E5" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
          <div className="space-y-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg"
              >
                <h3 className="text-lg font-semibold mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm bg-indigo-50 text-indigo-600 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}