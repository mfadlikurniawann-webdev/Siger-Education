"use client";

import { 
  Navbar, 
  Hero, 
  ScholarshipMarquee, 
  About, 
  Services, 
  Destinations, 
  Testimonials, 
  Contact, 
  Footer 
} from "@siger/ui";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ScholarshipMarquee />
        <About />
        <Services />
        <Destinations />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
