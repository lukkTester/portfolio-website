
import React from 'react';
import Section from './Section';
import type { ExperienceData } from '../types';
import { Briefcase, CheckCircle } from 'lucide-react';

const Experience: React.FC<{ data: ExperienceData }> = ({ data }) => {
  return (
    <Section id="experience" title={data.title}>
      <div className="relative max-w-4xl mx-auto">
        {/* The timeline line */}
        <div className="absolute left-4 md:left-1/2 w-0.5 h-full bg-gray-300 dark:bg-gray-700 transform -translate-x-1/2"></div>

        {data.jobs.map((job, index) => (
          <div key={index} className="relative mb-12 flex items-start">
            {/* Dot on the timeline */}
            <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-white dark:bg-gray-900 border-2 border-sky-500 rounded-full z-10 flex items-center justify-center transform -translate-x-1/2 mt-1">
                <Briefcase className="w-4 h-4 text-sky-500" />
            </div>

            <div className={`w-full p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:ml-auto md:pl-12' : 'md:mr-auto md:pr-12 md:text-right'}`}>
              <p className="text-sm font-semibold text-sky-500 dark:text-sky-400">{job.period}</p>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-1">{job.title}</h3>
              <p className="text-md font-medium text-gray-500 dark:text-gray-400 mb-4">{job.company}</p>
              <ul className={`space-y-2 ${index % 2 === 0 ? 'text-left' : 'md:text-right'}`}>
                {job.achievements.map((achievement, i) => (
                  <li key={i} className={`flex items-start gap-2 ${index % 2 === 0 ? 'flex-row' : 'md:flex-row-reverse'}`}>
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;
