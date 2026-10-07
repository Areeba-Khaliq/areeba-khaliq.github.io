import React from 'react';

export const Section = ({ id, title, children }: { id: string; title: string; children: React.ReactNode }) => (
  <section id={id} className="scroll-mt-6 pt-14">
    <h2 className="font-serif text-2xl text-stone-900 pb-2 mb-6 border-b border-stone-400">{title}</h2>
    {children}
  </section>
);

export const Entry = ({ title, meta, date, children }: { title: React.ReactNode; meta?: string; date?: string; children?: React.ReactNode }) => (
  <div className="mb-9 last:mb-0">
    <div className="flex flex-wrap items-baseline justify-between gap-x-4">
      <h3 className="font-serif text-xl text-stone-900">{title}</h3>
      {date && <span className="text-sm text-stone-500">{date}</span>}
    </div>
    {meta && <p className="text-sm text-stone-500 italic">{meta}</p>}
    {children && <div className="mt-3">{children}</div>}
  </div>
);

export const Prose = ({ items }: { items: string[] }) => (
  <div className="space-y-3 text-stone-700">{items.map(t => <p key={t}>{t}</p>)}</div>
);

export const A = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-[#2f4a52] underline underline-offset-2 decoration-stone-400 hover:decoration-[#2f4a52]">
    {children}
  </a>
);
