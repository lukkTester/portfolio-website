import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { content } from './data/content';

const AppContent: React.FC = () => {
    const { language } = useLanguage();
    const data = content[language];

    return (
        <div className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300">
            <Header navLinks={data.navLinks} />
            <main className="container mx-auto px-6 md:px-12">
                <Hero data={data.hero} />
                <About data={data.about} />
                <Experience data={data.experience} />
                <Education data={data.education} />
                <Projects data={data.projects} />
                <Skills data={data.skills} />
                <Contact data={data.contact} />
            </main>
            <Footer />
        </div>
    );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;