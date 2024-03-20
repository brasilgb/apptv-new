import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  style?: string;
}

const Section = (props: SectionProps) => {
  return (
    <div className={`bg-gray-200 rounded-lg bg-opacity-80 p-1 ${props.style}`}>
      {props.children}
    </div>
  );
};

export default Section;
