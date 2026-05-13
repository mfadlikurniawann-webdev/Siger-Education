"use client";
import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  icon: Icon,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold transition-all duration-200 font-outfit";
  
  const variants = {
    primary: "bg-primary-light text-white hover:bg-black shadow-lg shadow-orange-100 active:scale-95",
    outline: "border-2 border-black text-black hover:bg-black hover:text-white transition-colors",
    ghost: "text-black hover:text-primary-light transition-colors"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
      {Icon && <Icon size={22} className="ml-2" />}
    </button>
  );
};

export default Button;
