import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Shield, LogIn, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-[#0a0b10] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.25),transparent_60%)] blur-2xl" />
        <div className="absolute bottom-0 left-0 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.2),transparent_60%)] blur-2xl" />
        <div className="absolute bottom-10 right-0 h-[22rem] w-[22rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.25),transparent_60%)] blur-2xl" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-8 px-6 pt-10">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-orange-400 shadow-lg">
              <Rocket className="h-5 w-5 text-white" />
            </div>
            <span className="text-lg font-semibold tracking-tight">PersonaPulse AI</span>
          </div>
          <div className="flex items-center gap-3">
            <a href="#pricing" className="rounded-md px-3 py-2 text-sm text-zinc-300 hover:text-white">Pricing</a>
            <a href="#blog" className="rounded-md px-3 py-2 text-sm text-zinc-300 hover:text-white">Blog</a>
            <a href="#contact" className="rounded-md px-3 py-2 text-sm text-zinc-300 hover:text-white">Contact</a>
            <button className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-4 py-2 text-sm text-white backdrop-blur transition hover:bg-white/10">
              <LogIn className="h-4 w-4" />
              Sign in
            </button>
            <button className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-orange-400 px-4 py-2 text-sm font-medium text-white shadow-lg transition hover:opacity-95">
              Start free
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300 backdrop-blur">
            <Shield className="h-3.5 w-3.5 text-indigo-300" />
            Enterprise-grade insights • Privacy-first
          </span>
          <h1 className="mt-5 bg-gradient-to-r from-indigo-200 via-sky-200 to-orange-200 bg-clip-text text-4xl font-semibold tracking-tight text-transparent sm:text-6xl">
            AI-driven persona research for modern marketing teams
          </h1>
          <p className="mt-5 text-balance text-zinc-300">
            Turn raw conversations, reviews, and CRM data into precise buyer personas and messaging guidance—powered by explainable AI.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <button className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-orange-400 px-5 py-3 text-sm font-medium text-white shadow-lg transition hover:opacity-95">
              Try it free
              <ArrowRight className="h-4 w-4" />
            </button>
            <button className="rounded-md border border-white/10 bg-white/5 px-5 py-3 text-sm text-white backdrop-blur transition hover:bg-white/10">
              Book a demo
            </button>
          </div>
        </div>

        <div className="relative mt-6 h-[520px] w-full max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0">
          <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a0b10] via-transparent to-transparent" />
        </div>

        <div className="mt-8 grid w-full max-w-5xl grid-cols-2 gap-4 rounded-xl border border-white/10 bg-white/5 p-4 text-xs text-zinc-300 backdrop-blur sm:grid-cols-4">
          <div>+38% faster GTM alignment</div>
          <div>4.9/5 average team satisfaction</div>
          <div>ISO-27001 ready</div>
          <div>Used by growth teams worldwide</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
