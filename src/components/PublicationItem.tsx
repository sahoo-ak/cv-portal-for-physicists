
import React from 'react';
import { cn } from "@/lib/utils";

interface PublicationItemProps {
  title: string;
  authors: string[];
  journal: string;
  year: number;
  doi?: string;
  index: number;
}

const PublicationItem: React.FC<PublicationItemProps> = ({ 
  title, 
  authors, 
  journal, 
  year, 
  doi,
  index
}) => {
  return (
    <div 
      className={cn(
        "group p-6 bg-white border border-gray-100 rounded-lg transition-all duration-300",
        "hover:shadow-md hover:border-gray-200 hover:bg-gray-50/50"
      )}
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      <div className="flex justify-between items-start gap-4">
        <div>
          <h3 className="text-lg font-medium mb-2 group-hover:text-gray-900 transition-colors">
            {title}
          </h3>
          
          <p className="text-sm text-gray-500 mb-2">
            {authors.join(', ')}
          </p>
          
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span className="font-medium">{journal}</span>
            <span>•</span>
            <span>{year}</span>
          </div>
        </div>
        
        {doi && (
          <a 
            href={`https://doi.org/${doi}`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            aria-label="View publication"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M15 3H21V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10 14L21 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        )}
      </div>
    </div>
  );
};

export default PublicationItem;
