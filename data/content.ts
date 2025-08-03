import type { PortfolioContent } from '../types';

// ===================================================================================
// EDIT THIS FILE TO CHANGE THE CONTENT OF YOUR PORTFOLIO
//
// Each section is clearly marked.
// You can add or remove items from arrays like `jobs`, `certifications`, `items`, etc.
// For skills, `level` is a string: 'Beginner', 'Intermediate', 'Advanced', or 'Expert'.
// `experience` is a string like '3+ years'.
// ===================================================================================

const content: { [key: string]: PortfolioContent } = {
  en: {
    // === NAVIGATION ===
    navLinks: [
      { name: 'About', href: '#about' },
      { name: 'Experience', href: '#experience' },
      { name: 'Education', href: '#education' },
      { name: 'Projects', href: '#projects' },
      { name: 'Skills', href: '#skills' },
      { name: 'Contact', href: '#contact' },
    ],
    // === HERO SECTION ===
    hero: {
      name: 'Jan Kowalski',
      title: 'Senior Software Tester',
      tagline: 'Passionate about quality, dedicated to delivering flawless software solutions. 10+ years of experience in manual and automated testing.',
      contact: {
        email: 'mailto:jan.kowalski@email.com',
        linkedin: 'https://linkedin.com/in/jankowalski',
        github: 'https://github.com/jankowalski',
      },
      buttons: {
          email: 'Email Me',
          linkedin: 'LinkedIn',
          github: 'GitHub'
      }
    },
    // === ABOUT SECTION ===
    about: {
      title: 'About Me',
      description: [
        'I am a meticulous and results-driven Senior Software Tester with over a decade of experience ensuring the highest quality for web and mobile applications. My journey in tech began with a curiosity for how things work, which naturally evolved into a career dedicated to making them work better.',
        'Throughout my career, I have honed my skills in both manual and automated testing, developing a keen eye for detail and a knack for identifying critical bugs before they reach production. I thrive in collaborative, fast-paced Agile environments, working closely with developers and product managers to build robust and user-friendly products.',
      ],
      philosophy: 'My testing philosophy is rooted in a user-centric approach. I believe that the best way to ensure quality is to understand the end-user\'s needs and expectations. This drives me to advocate for the user at every stage of the development lifecycle, from requirements analysis to final release.',
    },
    // === EXPERIENCE SECTION ===
    experience: {
      title: 'Professional Experience',
      jobs: [
        {
          title: 'Senior QA Engineer',
          company: 'Tech Solutions Inc.',
          period: 'Jan 2018 - Present',
          achievements: [
            'Led the QA efforts for a major e-commerce platform, reducing critical production bugs by 40%.',
            'Designed and implemented a full automated testing suite using Selenium and Python, increasing test coverage by 75%.',
            'Mentored junior QA engineers and established best practices for the testing process.',
            'Collaborated in an Agile/Scrum team to ensure timely delivery of high-quality features.'
          ],
        },
        {
          title: 'Software Tester',
          company: 'Innovate Digital',
          period: 'Jun 2014 - Dec 2017',
          achievements: [
            'Performed manual and exploratory testing for various client websites and mobile applications.',
            'Created detailed test plans, test cases, and bug reports using JIRA.',
            'Participated in performance and security testing, identifying key vulnerabilities.',
          ],
        },
        {
          title: 'Junior QA Analyst',
          company: 'CodeCrafters Co.',
          period: 'Jul 2012 - May 2014',
          achievements: [
            'Executed test cases and documented results for a suite of internal software tools.',
            'Assisted in regression testing for new software releases.',
            'Gained foundational knowledge of the software development lifecycle (SDLC).',
          ],
        },
      ],
    },
    // === EDUCATION & CERTIFICATIONS SECTION ===
    education: {
      title: 'Education & Certifications',
      academic: [
        {
          degree: 'Master of Science in Computer Science',
          institution: 'University of Technology',
          details: 'Graduated with honors, specializing in software engineering and database systems.',
        },
      ],
      certificationsTitle: 'Professional Certifications',
      certifications: [
        {
          name: 'ISTQB Certified Tester, Advanced Level',
          issuer: 'International Software Testing Qualifications Board',
          details: 'Demonstrates advanced knowledge in test management and test automation.',
        },
        {
          name: 'Certified ScrumMaster (CSM)',
          issuer: 'Scrum Alliance',
          details: 'Proficient in Agile principles and Scrum framework practices.',
        },
      ],
    },
    // === PROJECTS SECTION ===
    projects: {
      title: 'Projects Portfolio',
      items: [
        {
          title: 'E-commerce Test Automation Framework',
          description: 'Developed a scalable test automation framework from scratch for a high-traffic e-commerce site. The framework handles UI, API, and database testing, and integrates with CI/CD pipelines.',
          technologies: ['Selenium WebDriver', 'Python', 'Pytest', 'REST-assured', 'Jenkins'],
          link: 'https://github.com/jankowalski/ecommerce-test-framework',
          linkText: 'View on GitHub',
        },
        {
          title: 'Mobile Banking App Performance Testing',
          description: 'Conducted comprehensive performance and load testing for a new mobile banking application. Identified and helped resolve major performance bottlenecks, ensuring a smooth user experience at launch.',
          technologies: ['JMeter', 'Appium', 'Postman', 'Grafana'],
        },
        {
          title: 'Healthcare Platform Security Audit',
          description: 'Led a security testing initiative for a HIPAA-compliant healthcare platform. Used various tools and techniques to identify potential vulnerabilities and provided recommendations for mitigation.',
          technologies: ['OWASP ZAP', 'Burp Suite', 'Nessus', 'Static & Dynamic Analysis'],
        },
      ],
    },
    // === SKILLS SECTION ===
    skills: {
      title: 'Skills Summary',
      technical: [
        {
          title: 'Test Automation',
          skills: [
            { name: 'Selenium', level: 'Expert', experience: '8+ years' },
            { name: 'Cypress', level: 'Advanced', experience: '3+ years' },
            { name: 'Playwright', level: 'Advanced', experience: '2+ years' },
            { name: 'Appium', level: 'Intermediate', experience: '4 years' },
          ],
        },
        {
          title: 'Programming & Scripting',
          skills: [
            { name: 'Python', level: 'Advanced', experience: '6+ years' },
            { name: 'JavaScript / TypeScript', level: 'Advanced', experience: '4+ years' },
            { name: 'SQL', level: 'Advanced', experience: '10+ years' },
            { name: 'Bash', level: 'Intermediate', experience: '5+ years' },
          ],
        },
        {
          title: 'Tools & Platforms',
          skills: [
            { name: 'JIRA & Confluence', level: 'Expert', experience: '10+ years' },
            { name: 'Jenkins / GitLab CI', level: 'Advanced', experience: '5+ years' },
            { name: 'Docker', level: 'Intermediate', experience: '3+ years' },
            { name: 'Postman / Insomnia', level: 'Expert', experience: '7+ years' },
          ],
        },
      ],
      soft: {
        title: 'Soft Skills',
        skills: [
            { name: 'Analytical Thinking' },
            { name: 'Problem Solving' },
            { name: 'Attention to Detail' },
            { name: 'Communication' },
            { name: 'Team Collaboration' },
            { name: 'User Advocacy' }
        ],
      },
    },
    // === CONTACT SECTION ===
    contact: {
      title: 'Get In Touch',
      form: {
        name: 'Your Name',
        email: 'Your Email',
        message: 'Your Message',
        submit: 'Send Message',
        success: 'Thank you for your message! I will get back to you soon.'
      },
      social: {
        title: 'Follow Me'
      },
      cv: {
        file: '/jan-kowalski-cv-en.pdf',
        buttonText: 'Download CV'
      }
    }
  },
  pl: {
    // === NAWIGACJA ===
    navLinks: [
      { name: 'O mnie', href: '#about' },
      { name: 'Doświadczenie', href: '#experience' },
      { name: 'Edukacja', href: '#education' },
      { name: 'Projekty', href: '#projects' },
      { name: 'Umiejętności', href: '#skills' },
      { name: 'Kontakt', href: '#contact' },
    ],
    // === SEKCJA GŁÓWNA ===
    hero: {
      name: 'Jan Kowalski',
      title: 'Starszy Tester Oprogramowania',
      tagline: 'Pasjonat jakości, oddany dostarczaniu bezbłędnych rozwiązań software\'owych. 10+ lat doświadczenia w testach manualnych i automatycznych.',
       contact: {
        email: 'mailto:jan.kowalski@email.com',
        linkedin: 'https://linkedin.com/in/jankowalski',
        github: 'https://github.com/jankowalski',
      },
      buttons: {
          email: 'Napisz do mnie',
          linkedin: 'LinkedIn',
          github: 'GitHub'
      }
    },
    // === SEKCJA O MNIE ===
    about: {
      title: 'O mnie',
      description: [
        'Jestem skrupulatnym i zorientowanym na wyniki Starszym Testerem Oprogramowania z ponad dekadą doświadczenia w zapewnianiu najwyższej jakości aplikacji webowych i mobilnych. Moja podróż w świecie technologii zaczęła się od ciekawości, jak działają rzeczy, co naturalnie przekształciło się w karierę poświęconą ulepszaniu ich działania.',
        'W trakcie mojej kariery doskonaliłem swoje umiejętności zarówno w testach manualnych, jak i automatycznych, rozwijając dbałość o szczegóły i talent do identyfikowania krytycznych błędów, zanim trafią na produkcję. Rozwijam się w dynamicznych, zwinnych środowiskach Agile, ściśle współpracując z deweloperami i menedżerami produktu w celu tworzenia solidnych i przyjaznych dla użytkownika produktów.',
      ],
      philosophy: 'Moja filozofia testowania opiera się na podejściu skoncentrowanym na użytkowniku. Wierzę, że najlepszym sposobem na zapewnienie jakości jest zrozumienie potrzeb i oczekiwań końcowego użytkownika. To motywuje mnie do bycia rzecznikiem użytkownika na każdym etapie cyklu życia oprogramowania, od analizy wymagań po ostateczne wydanie.',
    },
    // === SEKCJA DOŚWIADCZENIE ===
    experience: {
      title: 'Doświadczenie Zawodowe',
      jobs: [
        {
          title: 'Starszy Inżynier QA',
          company: 'Tech Solutions Inc.',
          period: 'Sty 2018 - Obecnie',
          achievements: [
            'Prowadzenie działań QA dla dużej platformy e-commerce, co zmniejszyło liczbę krytycznych błędów na produkcji o 40%.',
            'Zaprojektowanie i wdrożenie pełnego zestawu testów automatycznych przy użyciu Selenium i Python, zwiększając pokrycie testami o 75%.',
            'Mentoring młodszych inżynierów QA i ustanowienie najlepszych praktyk w procesie testowania.',
            'Współpraca w zespole Agile/Scrum w celu zapewnienia terminowego dostarczania wysokiej jakości funkcjonalności.'
          ],
        },
        {
          title: 'Tester Oprogramowania',
          company: 'Innovate Digital',
          period: 'Cze 2014 - Gru 2017',
          achievements: [
            'Wykonywanie testów manualnych i eksploracyjnych dla różnych stron internetowych i aplikacji mobilnych klientów.',
            'Tworzenie szczegółowych planów testów, przypadków testowych i raportów o błędach w systemie JIRA.',
            'Udział w testach wydajności i bezpieczeństwa, identyfikując kluczowe podatności.',
          ],
        },
        {
          title: 'Młodszy Analityk QA',
          company: 'CodeCrafters Co.',
          period: 'Lip 2012 - Maj 2014',
          achievements: [
            'Wykonywanie przypadków testowych i dokumentowanie wyników dla zestawu wewnętrznych narzędzi software\'owych.',
            'Pomoc w testach regresji dla nowych wydań oprogramowania.',
            'Zdobycie podstawowej wiedzy na temat cyklu życia oprogramowania (SDLC).',
          ],
        },
      ],
    },
    // === SEKCJA EDUKACJA I CERTYFIKATY ===
    education: {
      title: 'Edukacja i Certyfikaty',
      academic: [
        {
          degree: 'Magister Inżynier Informatyki',
          institution: 'Politechnika',
          details: 'Ukończyłem z wyróżnieniem, specjalizując się w inżynierii oprogramowania i systemach baz danych.',
        },
      ],
      certificationsTitle: 'Certyfikaty Zawodowe',
      certifications: [
        {
          name: 'ISTQB Certified Tester, Poziom Zaawansowany',
          issuer: 'International Software Testing Qualifications Board',
          details: 'Potwierdza zaawansowaną wiedzę w zakresie zarządzania testami i automatyzacji testów.',
        },
        {
          name: 'Certified ScrumMaster (CSM)',
          issuer: 'Scrum Alliance',
          details: 'Biegłość w zasadach Agile i praktykach frameworka Scrum.',
        },
      ],
    },
    // === SEKCJA PROJEKTY ===
    projects: {
      title: 'Portfolio Projektów',
      items: [
        {
          title: 'Framework do Automatyzacji Testów E-commerce',
          description: 'Stworzenie od podstaw skalowalnego frameworka do automatyzacji testów dla serwisu e-commerce o dużym natężeniu ruchu. Framework obsługuje testy UI, API i bazy danych oraz integruje się z potokami CI/CD.',
          technologies: ['Selenium WebDriver', 'Python', 'Pytest', 'REST-assured', 'Jenkins'],
          link: 'https://github.com/jankowalski/ecommerce-test-framework',
          linkText: 'Zobacz na GitHub',
        },
        {
          title: 'Testy Wydajności Aplikacji Bankowości Mobilnej',
          description: 'Przeprowadzenie kompleksowych testów wydajności i obciążenia dla nowej aplikacji bankowości mobilnej. Zidentyfikowano i pomogłem rozwiązać główne wąskie gardła wydajnościowe, zapewniając płynne działanie aplikacji po uruchomieniu.',
          technologies: ['JMeter', 'Appium', 'Postman', 'Grafana'],
        },
        {
          title: 'Audyt Bezpieczeństwa Platformy Medycznej',
          description: 'Prowadzenie inicjatywy testów bezpieczeństwa dla platformy medycznej zgodnej z HIPAA. Użyto różnych narzędzi i technik do identyfikacji potencjalnych podatności i przedstawiono rekomendacje dotyczące ich mitygacji.',
          technologies: ['OWASP ZAP', 'Burp Suite', 'Nessus', 'Analiza Statyczna i Dynamiczna'],
        },
      ],
    },
    // === SEKCJA UMIEJĘTNOŚCI ===
    skills: {
      title: 'Podsumowanie Umiejętności',
      technical: [
        {
          title: 'Automatyzacja Testów',
          skills: [
            { name: 'Selenium', level: 'Expert', experience: '8+ lat' },
            { name: 'Cypress', level: 'Advanced', experience: '3+ lata' },
            { name: 'Playwright', level: 'Advanced', experience: '2+ lata' },
            { name: 'Appium', level: 'Intermediate', experience: '4 lata' },
          ],
        },
        {
          title: 'Programowanie i Skrypty',
          skills: [
            { name: 'Python', level: 'Advanced', experience: '6+ lat' },
            { name: 'JavaScript / TypeScript', level: 'Advanced', experience: '4+ lata' },
            { name: 'SQL', level: 'Advanced', experience: '10+ lat' },
            { name: 'Bash', level: 'Intermediate', experience: '5+ lat' },
          ],
        },
        {
          title: 'Narzędzia i Platformy',
          skills: [
            { name: 'JIRA i Confluence', level: 'Expert', experience: '10+ lat' },
            { name: 'Jenkins / GitLab CI', level: 'Advanced', experience: '5+ lat' },
            { name: 'Docker', level: 'Intermediate', experience: '3+ lata' },
            { name: 'Postman / Insomnia', level: 'Expert', experience: '7+ lat' },
          ],
        },
      ],
      soft: {
        title: 'Umiejętności Miękkie',
        skills: [
          { name: 'Myślenie Analityczne' },
          { name: 'Rozwiązywanie Problemów' },
          { name: 'Dbałość o Szczegóły' },
          { name: 'Komunikacja' },
          { name: 'Współpraca w Zespole' },
          { name: 'Rzecznictwo Użytkownika' }
        ],
      },
    },
     // === CONTACT SECTION ===
    contact: {
      title: 'Skontaktuj się ze mną',
      form: {
        name: 'Twoje imię i nazwisko',
        email: 'Twój adres e-mail',
        message: 'Twoja wiadomość',
        submit: 'Wyślij wiadomość',
        success: 'Dziękuję za wiadomość! Odpowiem tak szybko, jak to możliwe.'
      },
      social: {
        title: 'Obserwuj mnie'
      },
      cv: {
        file: '/jan-kowalski-cv-pl.pdf',
        buttonText: 'Pobierz CV'
      }
    }
  },
};

export { content };