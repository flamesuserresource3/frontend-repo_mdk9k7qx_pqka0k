import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: '$0',
    cadence: 'forever',
    highlight: 'Best for evaluation',
    features: [
      '100 AI persona queries / month',
      '1 workspace • 2 seats',
      'CSV import',
      'Email support',
    ],
    cta: 'Start free',
  },
  {
    name: 'Growth',
    price: '$49',
    cadence: 'per month',
    popular: true,
    highlight: 'For growing teams',
    features: [
      'Unlimited AI persona queries',
      'Unlimited workspaces • 10 seats',
      'CRM & reviews integrations',
      'Priority support',
    ],
    cta: 'Upgrade now',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    cadence: '',
    highlight: 'Security & scale',
    features: [
      'SSO / SCIM • Audit logs',
      'Private cloud options',
      'Dedicated CSM & SLA',
      'Security reviews',
    ],
    cta: 'Contact sales',
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="w-full bg-[#05060a] py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="bg-gradient-to-r from-indigo-200 via-sky-200 to-orange-200 bg-clip-text text-3xl font-semibold tracking-tight text-transparent sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-3 text-zinc-400">
            Start free, scale as your marketing insights grow.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-white/20 ${tier.popular ? 'ring-2 ring-fuchsia-400/60' : ''}`}
            >
              {tier.popular && (
                <span className="absolute -top-3 right-4 rounded-full bg-fuchsia-500/20 px-3 py-1 text-xs text-fuchsia-200">
                  Popular
                </span>
              )}
              <h3 className="text-lg font-medium">{tier.name}</h3>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-4xl font-semibold">{tier.price}</span>
                <span className="text-sm text-zinc-400">{tier.cadence}</span>
              </div>
              <p className="mt-2 text-sm text-zinc-400">{tier.highlight}</p>

              <ul className="mt-6 space-y-3 text-sm">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-zinc-300">
                    <Check className="h-4 w-4 text-indigo-300" /> {f}
                  </li>
                ))}
              </ul>

              <button className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-orange-400 px-4 py-2 text-sm font-medium text-white shadow-lg transition hover:opacity-95">
                {tier.cta}
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
