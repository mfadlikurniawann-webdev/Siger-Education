import React from 'react';
import { motion } from 'framer-motion';

const scholarships = [
  { name: "LPDP", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Logo_Lembaga_Pengelola_Dana_Pendidikan.png/300px-Logo_Lembaga_Pengelola_Dana_Pendidikan.png" },
  { name: "Kemendikbud", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Logo_of_the_Ministry_of_Education_and_Culture_of_the_Republic_of_Indonesia.svg/300px-Logo_of_the_Ministry_of_Education_and_Culture_of_the_Republic_of_Indonesia.svg.png" },
  { name: "Kemenag", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Logo_Kementerian_Agama.png/300px-Logo_Kementerian_Agama.png" },
  { name: "MEXT", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/MEXT_Logo.svg/300px-MEXT_Logo.svg.png" },
  { name: "Fulbright", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Fulbright_Program_logo.svg/300px-Fulbright_Program_logo.svg.png" },
  { name: "Australia Awards", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Australia_Awards_logo.png/300px-Australia_Awards_logo.png" },
  { name: "GKS", img: "https://via.placeholder.com/150x150?text=GKS" },
  { name: "Monash", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Monash_University_logo.svg/300px-Monash_University_logo.svg.png" },
  { name: "CIMB", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/CIMB_Group_logo.svg/300px-CIMB_Group_logo.svg.png" }
];

const ScholarshipMarquee = () => {
  const doubledScholarships = [...scholarships, ...scholarships];

  return (
    <div className="py-16 bg-neutral-50 overflow-hidden border-y border-neutral-100">
      <div className="container mb-8">
        <p className="text-center text-xs font-bold uppercase tracking-[0.3em] text-neutral-400">
          Program Beasiswa Yang Kami Dukung
        </p>
      </div>
      
      <div className="flex relative w-full overflow-hidden">
        <motion.div 
          className="flex gap-20 items-center whitespace-nowrap py-4"
          animate={{ x: [0, -1500] }}
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          {doubledScholarships.map((logo, i) => (
            <div key={i} className="flex items-center justify-center min-w-[150px] grayscale hover:grayscale-0 transition-all duration-300">
              <img 
                src={logo.img} 
                alt={logo.name} 
                className="h-14 md:h-16 object-contain opacity-60 hover:opacity-100 transition-opacity" 
              />
            </div>
          ))}
        </motion.div>
        
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-neutral-50 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-neutral-50 to-transparent z-10 pointer-events-none"></div>
      </div>
    </div>
  );
};

export default ScholarshipMarquee;
