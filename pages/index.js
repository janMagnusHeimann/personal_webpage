import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Section from '../components/Section';
import About from '../components/About';
import Projects from '../components/Projects';
import Publications from '../components/Publications';
import Contact from '../components/Contact';

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="progress-bar" style={{ width: `${scrollProgress}%` }} />
      <Layout>
        <Hero />
        <Section id="about">
          <About />
        </Section>
        <Section id="projects">
          <Projects />
        </Section>
        <Section id="publications">
          <Publications />
        </Section>
        <Section id="contact">
          <Contact />
        </Section>
      </Layout>
    </>
  );
}