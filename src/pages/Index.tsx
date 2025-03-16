
import React from 'react';
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ResearchSection from "@/components/page-sections/ResearchSection";
import EducationSection from "@/components/page-sections/EducationSection";
import PublicationsSection from "@/components/page-sections/PublicationsSection";
import ConferencesSection from "@/components/page-sections/ConferencesSection";
import ExperienceSection from "@/components/page-sections/ExperienceSection";
import AwardsSection from "@/components/page-sections/AwardsSection";
import ContactSection from "@/components/page-sections/ContactSection";
import Footer from "@/components/page-sections/Footer";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-1">
        <Hero />
        <ResearchSection />
        <EducationSection />
        <PublicationsSection />
        <ConferencesSection />
        <ExperienceSection />
        <AwardsSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
