
import React from 'react';
import Section from "@/components/Section";
import AwardItem from "@/components/AwardItem";
import { awards } from "@/data";

const AwardsSection: React.FC = () => {
  return (
    <Section 
      id="awards" 
      title="Honors & Awards" 
      subtitle="Recognition for academic and research excellence"
      className="bg-gray-50"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {awards.map((award, index) => (
          <AwardItem 
            key={award.id}
            title={award.title}
            organization={award.organization}
            year={award.year}
            description={award.description}
            index={index}
          />
        ))}
      </div>
    </Section>
  );
};

export default AwardsSection;
