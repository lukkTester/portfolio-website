
import React from 'react';
import Section from './Section';
import type { ProjectsData } from '../types';
import { ExternalLink } from 'lucide-react';

const Projects: React.FC<{ data: ProjectsData }> = ({ data }) => {
  return (
    <Section id="projects" title={data.title}>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {data.items.map((project, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col group transform hover:-translate-y-2 transition-transform duration-300">
            <div className="p-6 flex-grow">
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="bg-sky-100 dark:bg-sky-900 text-sky-800 dark:text-sky-200 text-xs font-semibold px-2.5 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            {project.link && project.linkText && (
              <div className="p-6 bg-gray-50 dark:bg-gray-800/50 mt-auto">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-sky-600 dark:text-sky-400 hover:underline flex items-center gap-2 group-hover:text-sky-500"
                >
                  {project.linkText}
                  <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
