import { useEffect, useState } from 'react';

const SECTION_IDS = ['hero', 'skills', 'experience', 'projects', 'education', 'awards', 'certifications', 'testimonials', 'contact'];

export const useScrollSpy = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      for (const section of SECTION_IDS) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top >= -150 && rect.top <= window.innerHeight / 2) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return activeSection;
};
