
import React from 'react';
import Section from "@/components/Section";
import ResearchItem from "@/components/ResearchItem";
import { researchProjects } from "@/data";

const ResearchSection: React.FC = () => {
  return (
    <Section 
      id="research" 
      title="Research Focus" 
      subtitle="My primary research interests and ongoing projects"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {researchProjects.map((project, index) => (
          <ResearchItem 
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            tags={project.tags}
            index={index}
          />
        ))}
      </div>
    </Section>
  );
};

export default ResearchSection;
