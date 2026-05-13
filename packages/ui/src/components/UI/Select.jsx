"use client";
import React from 'react';

const Select = ({ label, options, ...props }) => {
  return (
    <div className="space-y-3">
      {label && <label className="text-sm font-black uppercase tracking-widest text-black">{label}</label>}
      <select 
        className="w-full px-6 py-4 bg-neutral-50 border border-neutral-100 rounded-2xl focus:outline-none focus:border-primary-light focus:ring-4 focus:ring-orange-50 text-black font-medium transition-all appearance-none"
        {...props}
      >
        {options.map((opt, i) => (
          <option key={i} value={opt.value || opt}>{opt.label || opt}</option>
        ))}
      </select>
    </div>
  );
};

export default Select;
