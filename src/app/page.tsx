import HeroSection from '@/components/Hero/HeroSection';
import AboutSection from '@/components/About/AboutSection';
import ExperienceSection from '@/components/Experience/ExperienceSection';
import PublicationSection from '@/components/Publication/PublicationSection';
import EducationSection from '@/components/Education/EducationSection';
import ProjectsSection from '@/components/Projects/ProjectsSection';
import SkillsSection from '@/components/Skills/SkillsSection';
import ContactSection from '@/components/Contact/ContactSection';
import Navbar from '@/components/Layout/Navbar';
import Footer from '@/components/Layout/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <PublicationSection />
      <ExperienceSection />
      <EducationSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </>
  );
}
