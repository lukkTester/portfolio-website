
import React, { ReactNode } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>();

  return (
    <section id={id} ref={ref} className="py-20 md:py-28 min-h-[50vh]">
      <div
        className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
};

export default Section;
