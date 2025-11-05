import React from 'react';

const posts = [
  {
    title: 'From Data to Persona: A Practical Guide for B2B Teams',
    excerpt: 'How to transform fragmented feedback, reviews, and CRM notes into actionable buyer archetypes your GTM can trust.',
    tag: 'Playbook',
  },
  {
    title: 'Benchmark: What “Good” Persona Quality Looks Like in 2025',
    excerpt: 'A framework for evaluating clarity, distinctiveness, and message-fit across your persona set with AI scoring.',
    tag: 'Research',
  },
  {
    title: 'Your First 30 Days with PersonaPulse',
    excerpt: 'A day-by-day plan to launch, integrate, and start capturing value across marketing and product.',
    tag: 'Onboarding',
  },
];

const BlogPreview = () => {
  return (
    <section id="blog" className="w-full bg-[#05060a] py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="bg-gradient-to-r from-indigo-200 via-sky-200 to-orange-200 bg-clip-text text-3xl font-semibold tracking-tight text-transparent">
            Insights from the PersonaPulse team
          </h2>
          <p className="mt-3 text-zinc-400">Stories on AI research, segmentation, and positioning.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <article key={p.title} className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-white/20">
              <span className="rounded-full bg-white/10 px-2 py-1 text-[10px] uppercase tracking-wide text-zinc-300">{p.tag}</span>
              <h3 className="mt-3 text-lg font-medium leading-snug text-white group-hover:text-indigo-200">
                {p.title}
              </h3>
              <p className="mt-2 text-sm text-zinc-400">{p.excerpt}</p>
              <div className="mt-4 text-sm text-indigo-300">Read more →</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
