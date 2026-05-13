import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Destinations from './components/Destinations';
import Testimonials from './components/Testimonials';
import ScholarshipMarquee from './components/ScholarshipMarquee';
import Contact from './components/Contact';
import About from './components/About';
import Layout from './components/Layout/Layout';
import SEO from './components/SEO';

function App() {
  return (
    <Layout>
      <SEO 
        title="Siger Education | Solusi Pendidikan Terpercaya" 
        description="Solusi pendidikan terpercaya di Lampung. Kami mendampingi Anda meraih masa depan gemilang melalui pendidikan berkualitas di dalam dan luar negeri."
      />
      <Hero />
      <ScholarshipMarquee />
      <About />
      <Services />
      <Destinations />
      <Testimonials />
      <Contact />
    </Layout>
  );
}

export default App;
