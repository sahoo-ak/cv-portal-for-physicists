
import React from 'react';
import Section from "@/components/Section";
import PublicationItem from "@/components/PublicationItem";
import { publications } from "@/data";

const PublicationsSection: React.FC = () => {
  const journalPublications = publications.filter(pub => pub.type === 'journal');
  const preprintPublications = publications.filter(pub => pub.type === 'preprint');

  return (
    <Section 
      id="publications" 
      title="Publications" 
      subtitle="Peer-reviewed articles and academic contributions"
    >
      <div className="space-y-8">
        <div className="grid grid-cols-1 gap-4">
          <h3 className="text-xl font-medium mb-4">Journal Articles</h3>
          {journalPublications.map((publication, index) => (
            <PublicationItem 
              key={publication.id}
              title={publication.title}
              authors={publication.authors}
              journal={publication.journal}
              year={publication.year}
              doi={publication.doi}
              pdfUrl={publication.pdfUrl}
              index={index}
              type="journal"
              number={index + 1}
            />
          ))}
        </div>
        
        {preprintPublications.length > 0 && (
          <div className="grid grid-cols-1 gap-4 pt-8">
            <h3 className="text-xl font-medium mb-4">Preprints</h3>
            {preprintPublications.map((publication, index) => (
              <PublicationItem 
                key={publication.id}
                title={publication.title}
                authors={publication.authors}
                journal={publication.journal}
                year={publication.year}
                doi={publication.doi}
                pdfUrl={publication.pdfUrl}
                index={index}
                type="preprint"
                number={index + 1}
              />
            ))}
          </div>
        )}
      </div>
    </Section>
  );
};

export default PublicationsSection;
