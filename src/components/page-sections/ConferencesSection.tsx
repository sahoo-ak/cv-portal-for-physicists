
import React from 'react';
import Section from "@/components/Section";
import ConferenceItem from "@/components/ConferenceItem";
import { conferencesAndSchools } from "@/data";

const ConferencesSection: React.FC = () => {
  return (
    <Section 
      id="conferences" 
      title="Conferences & Schools" 
      subtitle="Academic events and specialized training programs attended"
      className="bg-gray-50"
    >
      <div className="max-w-3xl mx-auto">
        {conferencesAndSchools.map((item, index) => (
          <ConferenceItem 
            key={item.id}
            title={item.title}
            organization={item.organization}
            location={item.location}
            date={item.date}
            description={item.description}
            type={item.type}
            index={index}
          />
        ))}
      </div>
    </Section>
  );
};

export default ConferencesSection;
