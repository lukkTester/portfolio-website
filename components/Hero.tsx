
import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import type { HeroData } from '../types';
import { Mail, Linkedin, Github } from 'lucide-react';

interface HeroProps {
  data: HeroData;
}

const Hero: React.FC<HeroProps> = ({ data }) => {
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="home" ref={ref} className="min-h-screen flex items-center justify-center text-center">
      <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="relative w-40 h-40 mx-auto mb-6">
          <img
            src="https://i.picsum.photos/id/64/400/400.jpg"
            alt="Professional Headshot"
            className="rounded-full w-full h-full object-cover shadow-lg"
          />
           <div className="absolute -bottom-2 -right-2 bg-white dark:bg-gray-800 p-2 rounded-full shadow-md">
            <span className="text-2xl" role="img" aria-label="waving hand">👋</span>
           </div>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white">
          {data.name}
        </h1>
        <p className="mt-2 text-xl md:text-2xl font-semibold text-sky-600 dark:text-sky-400">
          {data.title}
        </p>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
          {data.tagline}
        </p>

        <div className="mt-8 flex justify-center items-center space-x-4">
          <a href={data.contact.email} className="flex items-center gap-2 bg-sky-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-sky-700 transition-transform transform hover:scale-105 shadow-lg">
            <Mail size={20} />
            {data.buttons.email}
          </a>
          <a href={data.contact.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 text-gray-600 dark:text-gray-300 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-transform transform hover:scale-110">
            <Linkedin size={24} />
          </a>
          <a href={data.contact.github} target="_blank" rel="noopener noreferrer" className="p-3 text-gray-600 dark:text-gray-300 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-transform transform hover:scale-110">
            <Github size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
