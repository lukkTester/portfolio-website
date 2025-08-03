export interface NavLink {
    name: string;
    href: string;
}

export interface HeroData {
    name: string;
    title: string;
    tagline: string;
    contact: {
        email: string;
        linkedin: string;
        github: string;
    };
    buttons: {
        email: string;
        linkedin: string;
        github: string;
    }
}

export interface AboutData {
    title: string;
    description: string[];
    philosophy: string;
}

export interface ExperienceItem {
    title: string;
    company: string;
    period: string;
    achievements: string[];
}

export interface ExperienceData {
    title: string;
    jobs: ExperienceItem[];
}

export interface EducationItem {
    degree: string;
    institution: string;
    details: string;
}

export interface CertificationItem {
    name: string;
    issuer: string;
    details: string;
}

export interface EducationData {
    title: string;
    academic: EducationItem[];
    certificationsTitle: string;
    certifications: CertificationItem[];
}

export interface ProjectItem {
    title: string;
    description: string;
    technologies: string[];
    link?: string;
    linkText?: string;
}

export interface ProjectsData {
    title: string;
    items: ProjectItem[];
}

// Updated Skill type to include descriptive level and experience
export interface Skill {
    name: string;
    level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
    experience: string;
}

export interface SkillCategory {
    title: string;
    skills: Skill[];
}

export interface SoftSkill {
    name: string;
}

export interface SkillsData {
    title: string;
    technical: SkillCategory[];
    soft: {
        title: string;
        skills: SoftSkill[];
    };
}

export interface ContactData {
    title: string;
    form: {
        name: string;
        email: string;
        message: string;
        submit: string;
        success: string;
    };
    social: {
        title: string;
    };
    cv: {
        file: string;
        buttonText: string;
    };
}

export interface PortfolioContent {
    navLinks: NavLink[];
    hero: HeroData;
    about: AboutData;
    experience: ExperienceData;
    education: EducationData;
    projects: ProjectsData;
    skills: SkillsData;
    contact: ContactData;
}