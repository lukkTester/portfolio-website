
import React from 'react';
import Section from './Section';
import type { EducationData } from '../types';
import { GraduationCap, Award } from 'lucide-react';

const Education: React.FC<{ data: EducationData }> = ({ data }) => {
  return (
    <Section id="education" title={data.title}>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Academic Background */}
        <div>
          {data.academic.map((item, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-sky-100 dark:bg-sky-900 rounded-full mr-4">
                    <GraduationCap className="w-6 h-6 text-sky-600 dark:text-sky-400" />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{item.degree}</h3>
                    <p className="text-md text-gray-500 dark:text-gray-400">{item.institution}</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300">{item.details}</p>
            </div>
          ))}
        </div>
        
        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-bold text-center md:text-left mb-6 text-gray-800 dark:text-gray-200">{data.certificationsTitle}</h3>
          <div className="space-y-6">
            {data.certifications.map((cert, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                    <div className="p-3 bg-green-100 dark:bg-green-900 rounded-full mr-4">
                        <Award className="w-6 h-6 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white">{cert.name}</h4>
                        <p className="text-md text-gray-500 dark:text-gray-400">{cert.issuer}</p>
                    </div>
                </div>
                 <p className="text-gray-600 dark:text-gray-300">{cert.details}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Education;
