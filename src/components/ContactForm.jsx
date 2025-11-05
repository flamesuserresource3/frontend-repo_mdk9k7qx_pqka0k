import React from 'react';
import { Mail, User, ArrowRight } from 'lucide-react';

const ContactForm = () => {
  return (
    <section id="contact" className="w-full bg-[#0a0b10] py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="bg-gradient-to-r from-indigo-200 via-sky-200 to-orange-200 bg-clip-text text-3xl font-semibold tracking-tight text-transparent">
            Talk to our team
          </h2>
          <p className="mt-3 text-zinc-400">Have a question about enterprise, security, or a tailored demo?</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <form className="space-y-4">
              <div>
                <label className="mb-1 block text-sm text-zinc-300">Name</label>
                <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-[#0f1117] px-3 py-2">
                  <User className="h-4 w-4 text-zinc-400" />
                  <input type="text" placeholder="Jane Doe" className="w-full bg-transparent text-sm outline-none placeholder:text-zinc-500" />
                </div>
              </div>
              <div>
                <label className="mb-1 block text-sm text-zinc-300">Email</label>
                <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-[#0f1117] px-3 py-2">
                  <Mail className="h-4 w-4 text-zinc-400" />
                  <input type="email" placeholder="you@company.com" className="w-full bg-transparent text-sm outline-none placeholder:text-zinc-500" />
                </div>
              </div>
              <div>
                <label className="mb-1 block text-sm text-zinc-300">Message</label>
                <textarea placeholder="Tell us about your goals" rows={4} className="w-full rounded-lg border border-white/10 bg-[#0f1117] p-3 text-sm outline-none placeholder:text-zinc-500" />
              </div>
              <button type="button" className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-orange-400 px-4 py-2 text-sm font-medium text-white shadow-lg transition hover:opacity-95">
                Send message
                <ArrowRight className="h-4 w-4" />
              </button>
              <p className="text-center text-xs text-zinc-400">We typically reply within one business day.</p>
            </form>
          </div>
          <div className="flex flex-col justify-center gap-4">
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-500/10 via-fuchsia-500/10 to-orange-400/10 p-6">
              <h3 className="text-lg font-medium">Why PersonaPulse?</h3>
              <p className="mt-2 text-zinc-300">
                We turn fragmented data into clear personas and messaging guidance, accelerating research and alignment across your GTM.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h4 className="text-sm font-medium text-zinc-200">Looking for sales?</h4>
              <p className="mt-2 text-sm text-zinc-400">sales@personapulse.ai</p>
              <h4 className="mt-4 text-sm font-medium text-zinc-200">Support</h4>
              <p className="mt-2 text-sm text-zinc-400">support@personapulse.ai</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
