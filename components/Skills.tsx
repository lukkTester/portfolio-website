import React from 'react';
import Section from './Section';
import type { SkillsData, Skill } from '../types';

const levelColorClasses: { [key: string]: string } = {
  'Expert': 'bg-purple-200 text-purple-800 dark:bg-purple-900 dark:text-purple-300',
  'Advanced': 'bg-sky-200 text-sky-800 dark:bg-sky-900 dark:text-sky-300',
  'Intermediate': 'bg-green-200 text-green-800 dark:bg-green-900 dark:text-green-300',
  'Beginner': 'bg-gray-200 text-gray-800 dark:bg-gray-600 dark:text-gray-300',
};

const SkillItem: React.FC<{ skill: Skill }> = ({ skill }) => {
    const colorClass = levelColorClasses[skill.level] || levelColorClasses['Beginner'];
    return (
        <li className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex justify-between items-center transition-transform hover:scale-105 duration-300">
            <div>
                <span className="font-bold text-lg text-gray-800 dark:text-gray-100">{skill.name}</span>
                <span className="text-sm text-gray-500 dark:text-gray-400 ml-3">{skill.experience}</span>
            </div>
            <span className={`px-3 py-1 text-sm font-semibold rounded-full ${colorClass}`}>
                {skill.level}
            </span>
        </li>
    );
};

const Skills: React.FC<{ data: SkillsData }> = ({ data }) => {
  return (
    <Section id="skills" title={data.title}>
      <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-12">
        
        {/* Technical Skills */}
        <div className="lg:col-span-2 space-y-8">
            {data.technical.map((category) => (
                 <div key={category.title}>
                    <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">{category.title}</h3>
                    <ul className="space-y-4">
                        {category.skills.map(skill => (
                            <SkillItem key={skill.name} skill={skill} />
                        ))}
                    </ul>
                 </div>
            ))}
        </div>

        {/* Soft Skills */}
        <div>
          <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">{data.soft.title}</h3>
          <div className="flex flex-wrap gap-3">
            {data.soft.skills.map((skill) => (
              <span key={skill.name} className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-md font-medium px-4 py-2 rounded-lg shadow-sm">
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Skills;