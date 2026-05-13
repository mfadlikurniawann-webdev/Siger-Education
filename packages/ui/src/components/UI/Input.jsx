"use client";
import React from 'react';

const Input = ({ label, ...props }) => {
  return (
    <div className="space-y-3">
      {label && <label className="text-sm font-black uppercase tracking-widest text-black">{label}</label>}
      <input 
        className="w-full px-6 py-4 bg-neutral-50 border border-neutral-100 rounded-2xl focus:outline-none focus:border-primary-light focus:ring-4 focus:ring-orange-50 text-black font-medium transition-all" 
        {...props} 
      />
    </div>
  );
};

export default Input;
