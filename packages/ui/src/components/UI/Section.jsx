"use client";
import React from 'react';

const Section = ({ 
  children, 
  id, 
  className = '', 
  containerClassName = '',
  bg = 'white'
}) => {
  const bgStyles = {
    white: 'bg-white',
    neutral: 'bg-neutral-50',
    black: 'bg-black text-white'
  };

  return (
    <section id={id} className={`py-24 ${bgStyles[bg]} ${className}`}>
      <div className={`container ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
};

export default Section;
