
import React from 'react';
import Section from "@/components/Section";
import EducationItem from "@/components/EducationItem";
import { education } from "@/data";

const EducationSection: React.FC = () => {
  return (
    <Section 
      id="education" 
      title="Education" 
      subtitle="Academic background and qualifications"
      className="bg-gray-50"
    >
      <div className="grid grid-cols-1 gap-6">
        {/* PhD (single column) */}
        {education.filter(edu => edu.degree.includes("Ph.D.")).map((edu, index) => (
          <EducationItem 
            key={edu.id}
            degree={edu.degree}
            institution={edu.institution}
            location={edu.location}
            startDate={edu.startDate}
            endDate={edu.endDate}
            description={edu.description}
            index={index}
            isLarge={true}
          />
        ))}
        
        {/* Masters and Bachelors (two columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.filter(edu => !edu.degree.includes("Ph.D.")).map((edu, index) => (
            <EducationItem 
              key={edu.id}
              degree={edu.degree}
              institution={edu.institution}
              location={edu.location}
              startDate={edu.startDate}
              endDate={edu.endDate}
              description={edu.description}
              index={index + 1} // +1 to account for PhD being index 0
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default EducationSection;
