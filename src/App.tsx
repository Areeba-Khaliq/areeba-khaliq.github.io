import { profile, education, acneai, recognition, research, projects, teaching, teachingNote, skills } from './data';
import { Section, Entry, Prose, A } from './components/Section';
import { FederatedChart, AcneStack } from './components/Figures';

const nav = [
  ['work', 'Work'],
  ['teaching', 'Teaching'],
  ['recognition', 'Recognition'],
  ['skills', 'Skills'],
];

function App() {
  return (
    <div className="min-h-screen bg-[#f6f3ec] text-stone-800 font-sans text-[16px] leading-relaxed">
      <div className="max-w-5xl mx-auto px-6 lg:grid lg:grid-cols-[15rem_1fr] lg:gap-16">

        <aside className="lg:sticky lg:top-0 lg:self-start lg:h-screen lg:overflow-y-auto pt-12 pb-8 lg:pb-12">
          <img src={`${import.meta.env.BASE_URL}areeba.jpeg`} alt="Areeba Khaliq" className="w-28 h-28 object-cover border border-stone-400" />
          <h1 className="mt-5 font-serif text-3xl text-stone-900 leading-tight">{profile.name}</h1>
          <p className="mt-1 text-sm text-stone-500">{profile.location}</p>

          <p className="mt-5 text-sm space-y-1 flex flex-col">
            <a href={`mailto:${profile.email}`} className="underline underline-offset-2 decoration-stone-400 break-all">{profile.email}</a>
            <span>{profile.phone}</span>
            <A href={profile.linkedin}>LinkedIn</A>
            <A href={profile.github}>GitHub</A>
            <A href={profile.cv}>CV (PDF)</A>
          </p>

          <div className="mt-6 text-sm">
            <p className="font-semibold text-stone-900">{education.degree}</p>
            <p>{education.school}</p>
            <p className="text-stone-500">{education.period}</p>
            <p><A href={education.gpa.href}>{education.gpa.text}</A></p>
          </div>

          <nav className="mt-8 border-t border-stone-300 pt-4">
            <ul className="flex lg:flex-col gap-x-5 gap-y-1 flex-wrap text-sm">
              {nav.map(([id, label]) => (
                <li key={id}><a href={`#${id}`} className="text-stone-600 hover:underline underline-offset-2">{label}</a></li>
              ))}
            </ul>
          </nav>
        </aside>

        <main className="pt-4 lg:pt-12 pb-20 max-w-2xl">
          <h2 className="font-serif text-4xl md:text-5xl leading-[1.15] text-stone-900">{profile.headline}</h2>
          <div className="mt-6 space-y-3 text-lg text-stone-700">
            {profile.bio.map(p => <p key={p}>{p}</p>)}
          </div>

          <Section id="work" title="Work">
            <Entry title={<A href={acneai.href}>{acneai.title}</A>} meta="Final year project">
              <Prose items={acneai.text.slice(0, 2)} />
              <AcneStack />
              <Prose items={acneai.text.slice(2)} />
            </Entry>

            <Entry title={research.title} date={research.period}>
              <Prose items={research.text.slice(0, 2)} />
              <FederatedChart />
              <Prose items={research.text.slice(2)} />
            </Entry>

            {projects.map(p => (
              <Entry key={p.title} title={p.title} meta={p.venue} date={p.date}>
                <Prose items={p.text} />
                {p.links && <p className="mt-2 text-sm">{p.links.map(l => <A key={l.href} href={l.href}>{l.label}</A>)}</p>}
              </Entry>
            ))}
          </Section>

          <Section id="teaching" title="Teaching">
            <p className="mb-8 text-stone-700">{teachingNote}</p>
            {teaching.map(t => (
              <Entry key={t.title} title={<A href={t.href}>{t.title}</A>} date={t.date}>
                <p className="text-stone-700">{t.text}</p>
              </Entry>
            ))}
          </Section>

          <Section id="recognition" title="Recognition">
            <ol className="border-l border-stone-400 ml-1">
              {recognition.map(r => (
                <li key={r.title} className="relative pl-6 pb-7 last:pb-0">
                  <span className="absolute -left-[5px] top-2 w-[9px] h-[9px] bg-stone-800" />
                  <p className="text-sm text-stone-500 min-h-5">{r.when ?? ' '}</p>
                  <p className="font-semibold text-stone-900">{r.href ? <A href={r.href}>{r.title}</A> : r.title}</p>
                  <p className="text-stone-700">{r.text}</p>
                </li>
              ))}
            </ol>
          </Section>

          <Section id="skills" title="Skills">
            <dl className="space-y-2">
              {skills.map(s => (
                <div key={s.label} className="sm:flex gap-4">
                  <dt className="sm:w-32 shrink-0 font-semibold text-stone-900">{s.label}</dt>
                  <dd className="text-stone-700">{s.items}</dd>
                </div>
              ))}
            </dl>
          </Section>
        </main>
      </div>
    </div>
  );
}

export default App;
