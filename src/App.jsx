import React from 'react';
import Hero from './components/Hero';
import Pricing from './components/Pricing';
import AuthSection from './components/AuthSection';
import BlogPreview from './components/BlogPreview';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div className="min-h-screen w-full bg-[#0a0b10] text-white">
      <Hero />
      <Pricing />
      <AuthSection />
      <BlogPreview />
      <ContactForm />
      <footer className="border-t border-white/10 bg-[#05060a] py-8 text-sm text-zinc-400">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
          <p>© {new Date().getFullYear()} PersonaPulse AI. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#blog" className="hover:text-white">Blog</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
