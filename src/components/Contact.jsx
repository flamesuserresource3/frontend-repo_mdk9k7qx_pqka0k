import React, { useState } from 'react';
import { Mail, User } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus('Thanks! We\'ll be in touch shortly.');
  };

  return (
    <section id="contact" className="relative w-full bg-[#0a0b10] py-20 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-10 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.14),transparent_60%)] blur-2xl" />
      </div>
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Let’s talk</h2>
          <p className="mt-3 text-zinc-300">
            Have questions about pricing, security, or deployment? Our team can help you design a rollout tailored to your org.
          </p>
          <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-zinc-300">
            <p>
              Prefer email? Reach us at <span className="text-white">hello@personapulse.ai</span>
            </p>
          </div>
        </div>

        <form onSubmit={onSubmit} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <label className="flex flex-col gap-2 text-sm">
              <span className="text-zinc-300">First name</span>
              <div className="flex items-center gap-2 rounded-md border border-white/10 bg-black/30 px-3">
                <User className="h-4 w-4 text-zinc-400" />
                <input required type="text" className="w-full bg-transparent py-2 text-white placeholder:text-zinc-500 focus:outline-none" placeholder="Alex" />
              </div>
            </label>
            <label className="flex flex-col gap-2 text-sm">
              <span className="text-zinc-300">Last name</span>
              <input required type="text" className="rounded-md border border-white/10 bg-black/30 px-3 py-2 text-white placeholder:text-zinc-500 focus:outline-none" placeholder="Morgan" />
            </label>
          </div>
          <label className="mt-4 flex flex-col gap-2 text-sm">
            <span className="text-zinc-300">Work email</span>
            <div className="flex items-center gap-2 rounded-md border border-white/10 bg-black/30 px-3">
              <Mail className="h-4 w-4 text-zinc-400" />
              <input required type="email" className="w-full bg-transparent py-2 text-white placeholder:text-zinc-500 focus:outline-none" placeholder="you@company.com" />
            </div>
          </label>
          <label className="mt-4 flex flex-col gap-2 text-sm">
            <span className="text-zinc-300">How can we help?</span>
            <textarea rows={4} className="rounded-md border border-white/10 bg-black/30 px-3 py-2 text-white placeholder:text-zinc-500 focus:outline-none" placeholder="Tell us about your goals..." />
          </label>
          <button type="submit" className="mt-6 w-full rounded-md bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-orange-400 px-4 py-2 text-sm font-medium text-white shadow-lg transition hover:opacity-95">
            Send message
          </button>
          {status && <p className="mt-3 text-sm text-emerald-300">{status}</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
