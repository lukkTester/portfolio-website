
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-6 py-4 text-center text-gray-500 dark:text-gray-400">
        <p>&copy; {currentYear} Jan Kowalski. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
