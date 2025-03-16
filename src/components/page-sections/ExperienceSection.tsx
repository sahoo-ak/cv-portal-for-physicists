
import React from 'react';
import Section from "@/components/Section";
import ExperienceItem from "@/components/ExperienceItem";
import SkillsSection from "@/components/SkillsSection";
import { experiences } from "@/data";

const ExperienceSection: React.FC = () => {
  return (
    <Section 
      id="experience" 
      title="Academic Experience" 
      subtitle="My research and teaching experience"
    >
      <div className="max-w-3xl mx-auto">
        {experiences.map((experience, index) => (
          <ExperienceItem 
            key={experience.id}
            title={experience.title}
            organization={experience.organization}
            location={experience.location}
            startDate={experience.startDate}
            endDate={experience.endDate}
            description={experience.description}
            index={index}
          />
        ))}
      </div>
      
      <SkillsSection />
    </Section>
  );
};

export default ExperienceSection;
