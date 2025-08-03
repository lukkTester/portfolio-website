
import React from 'react';
import Section from './Section';
import type { AboutData } from '../types';

interface AboutProps {
  data: AboutData;
}

const About: React.FC<AboutProps> = ({ data }) => {
  return (
    <Section id="about" title={data.title}>
      <div className="max-w-4xl mx-auto text-center space-y-6 text-lg text-gray-600 dark:text-gray-300">
        {data.description.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
        <blockquote className="border-l-4 border-sky-500 pl-6 py-2 italic text-left bg-gray-100 dark:bg-gray-800 rounded-r-lg">
          {data.philosophy}
        </blockquote>
      </div>
    </Section>
  );
};

export default About;
