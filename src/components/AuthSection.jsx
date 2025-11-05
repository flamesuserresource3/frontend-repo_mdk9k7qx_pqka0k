import React from 'react';
import { User, Lock, Mail, ArrowRight } from 'lucide-react';

const AuthSection = () => {
  return (
    <section className="w-full bg-[#0a0b10] py-20 text-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 md:grid-cols-2">
        <div>
          <h2 className="bg-gradient-to-r from-indigo-200 via-sky-200 to-orange-200 bg-clip-text text-3xl font-semibold tracking-tight text-transparent">
            Sign in or create an account
          </h2>
          <p className="mt-3 text-zinc-400">
            Get your workspace ready in seconds. Your data stays secure with enterprise-grade encryption.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-zinc-300">
            <li>• OAuth ready (Google, Microsoft)</li>
            <li>• MFA & device approvals</li>
            <li>• Granular role permissions</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <form className="space-y-4">
            <div>
              <label className="mb-1 block text-sm text-zinc-300">Email</label>
              <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-[#0f1117] px-3 py-2">
                <Mail className="h-4 w-4 text-zinc-400" />
                <input type="email" placeholder="you@company.com" className="w-full bg-transparent text-sm outline-none placeholder:text-zinc-500" />
              </div>
            </div>
            <div>
              <label className="mb-1 block text-sm text-zinc-300">Password</label>
              <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-[#0f1117] px-3 py-2">
                <Lock className="h-4 w-4 text-zinc-400" />
                <input type="password" placeholder="••••••••" className="w-full bg-transparent text-sm outline-none placeholder:text-zinc-500" />
              </div>
            </div>
            <button type="button" className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-orange-400 px-4 py-2 text-sm font-medium text-white shadow-lg transition hover:opacity-95">
              Continue
              <ArrowRight className="h-4 w-4" />
            </button>
            <p className="text-center text-xs text-zinc-400">
              By continuing you agree to our Terms and Privacy Policy.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AuthSection;
