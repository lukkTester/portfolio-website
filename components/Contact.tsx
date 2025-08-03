
import React from 'react';
import Section from './Section';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/content';
import type { ContactData } from '../types';
import { Linkedin, Github, Download } from 'lucide-react';


const Contact: React.FC<{ data: ContactData }> = ({ data }) => {
    const { language } = useLanguage();
    const heroData = content[language].hero;

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // This is a dummy handler. In a real app, you would handle form submission here.
        alert(data.form.success);
    };

    return (
        <Section id="contact" title={data.title}>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
                <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">{data.form.name}</label>
                            <input type="text" name="name" id="name" required className="mt-1 block w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500"/>
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">{data.form.email}</label>
                            <input type="email" name="email" id="email" required className="mt-1 block w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500"/>
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">{data.form.message}</label>
                            <textarea name="message" id="message" rows={4} required className="mt-1 block w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500"></textarea>
                        </div>
                        <div>
                            <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 transition-colors">
                                {data.form.submit}
                            </button>
                        </div>
                    </form>
                </div>
                <div className="flex flex-col items-center justify-center text-center">
                    <h3 className="text-2xl font-bold mb-4">{data.social.title}</h3>
                    <div className="flex space-x-6 mb-8">
                        <a href={heroData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors">
                            <Linkedin size={32} />
                        </a>
                        <a href={heroData.contact.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors">
                            <Github size={32} />
                        </a>
                    </div>
                    <a href={data.cv.file} download className="flex items-center gap-2 bg-green-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-700 transition-transform transform hover:scale-105 shadow-lg">
                        <Download size={20} />
                        {data.cv.buttonText}
                    </a>
                </div>
            </div>
        </Section>
    );
};

export default Contact;
