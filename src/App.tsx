import {
  profile,
  highlights,
  currentRole,
  experience,
  projects,
  skills,
  education,
} from './data';
import { Header } from './components/Header';
import { Reveal } from './components/Reveal';
import { CopyEmail } from './components/CopyEmail';
import './App.css';

const [firstName, ...restName] = profile.name.split(' ');
const lastName = restName.pop();
const year = new Date().getFullYear();

function pad(n: number) {
  return String(n + 1).padStart(2, '0');
}

export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>

      <div className="frame">
        <Header />

        <main id="main">
          <section className="hero">
            <div className="hero-left">
              <p className="eyebrow">{profile.location}</p>
              <h1>
                {firstName} {restName.join(' ')} <em>{lastName}</em>
              </h1>
              <p className="title">{profile.title}</p>
              <p className="headline">{profile.headline}</p>

              <ul className="highlights">
                {highlights.map((h) => (
                  <li key={h.label}>
                    <span className="hl-value">{h.value}</span>
                    <span className="hl-label">{h.label}</span>
                  </li>
                ))}
              </ul>

              <div className="actions">
                <a href="#projects" className="btn btn-primary">View projects</a>
                <a href="#experience" className="btn btn-ghost">Experience</a>
              </div>
            </div>

            <aside className="current-card">
              <p className="card-label">Currently</p>
              <h3>{currentRole.role}</h3>
              <p className="card-company">
                <a href={currentRole.companyUrl} target="_blank" rel="noreferrer noopener">
                  {currentRole.company}
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
                <span> · {currentRole.period}</span>
              </p>
              <ul>
                {currentRole.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </aside>
          </section>

          <section id="experience" className="section">
            <Reveal>
              <p className="eyebrow"><span>01</span> Experience</p>
              <h2 className="section-title">Where I've <em>worked</em></h2>
              <div className="timeline">
                {experience.map((job, i) => (
                  <Reveal key={job.company + job.period} index={i} className="job-wrap">
                    <article className="job">
                      <p className="job-index">{pad(i)}</p>
                      <div className="job-body">
                        <header>
                          <h3>{job.role}</h3>
                          <p className="job-meta">
                            <a href={job.url} target="_blank" rel="noreferrer noopener">
                              {job.company}
                              <span className="sr-only"> (opens in a new tab)</span>
                            </a>
                            <span> · {job.location} · {job.period}</span>
                          </p>
                        </header>
                        <ul>
                          {job.points.map((p) => (
                            <li key={p}>{p}</li>
                          ))}
                        </ul>
                      </div>
                    </article>
                  </Reveal>
                ))}
              </div>
            </Reveal>
          </section>

          <section id="projects" className="section section-alt">
            <Reveal>
              <p className="eyebrow"><span>02</span> Projects</p>
              <h2 className="section-title">Selected <em>projects</em></h2>
              <div className="grid">
                {projects.map((p, i) => (
                  <Reveal key={p.name} index={i} className="card-wrap">
                    <article className="card">
                      <h3>{p.name}</h3>
                      <p>{p.description}</p>
                      <ul className="tags">
                        {p.stack.map((s) => (
                          <li key={s}>{s}</li>
                        ))}
                      </ul>
                      <div className="card-links">
                        <a href={p.url} target="_blank" rel="noreferrer noopener">
                          Source<span className="sr-only"> (opens in a new tab)</span> →
                        </a>
                        {p.live && (
                          <a href={p.live} target="_blank" rel="noreferrer noopener" className="live">
                            Live demo<span className="sr-only"> (opens in a new tab)</span> →
                          </a>
                        )}
                      </div>
                    </article>
                  </Reveal>
                ))}
              </div>
            </Reveal>
          </section>

          <section id="skills" className="section">
            <Reveal>
              <p className="eyebrow"><span>03</span> Skills</p>
              <h2 className="section-title">Core <em>skills</em></h2>
              <div className="skills">
                {skills.map((g, i) => (
                  <Reveal key={g.group} index={i} className="skill-wrap">
                    <div className="skill-group">
                      <h3>{g.group}</h3>
                      <ul className="tags">
                        {g.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>
                ))}
              </div>
            </Reveal>
          </section>

          <section className="section section-alt">
            <Reveal>
              <p className="eyebrow"><span>04</span> Education</p>
              <h2 className="section-title">Education</h2>
              <h3 className="edu-degree">{education.degree}</h3>
              <p className="job-meta">{education.school} · {education.period}</p>
            </Reveal>
          </section>

          <section id="contact" className="section contact">
            <Reveal>
              <p className="eyebrow"><span>05</span> Contact</p>
              <h2 className="section-title">Let's <em>connect</em></h2>
              <p>Happy to talk about .NET, microservice architecture, or leading engineering teams.</p>
              <div className="actions">
                <a href={`mailto:${profile.email}`} className="btn btn-primary">{profile.email}</a>
                <CopyEmail email={profile.email} />
                <a href={profile.linkedin} target="_blank" rel="noreferrer noopener" className="btn btn-ghost">
                  LinkedIn<span className="sr-only"> (opens in a new tab)</span>
                </a>
                <a href={profile.github} target="_blank" rel="noreferrer noopener" className="btn btn-ghost">
                  GitHub<span className="sr-only"> (opens in a new tab)</span>
                </a>
                <a href={profile.hackerrank} target="_blank" rel="noreferrer noopener" className="btn btn-ghost">
                  HackerRank<span className="sr-only"> (opens in a new tab)</span>
                </a>
              </div>
            </Reveal>
          </section>
        </main>

        <footer className="footer">
          <span>© {year} {profile.name}</span>
          <a href="#top">Back to top</a>
        </footer>
      </div>
    </>
  );
}
