import {
  profile,
  highlights,
  currentRole,
  experience,
  projects,
  skills,
  education,
} from './data';
import './App.css';

export default function App() {
  return (
    <>
      <header className="nav">
        <a href="#top" className="brand">{profile.name}</a>
        <nav>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact" className="nav-cta">Contact</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-left">
            <p className="eyebrow">{profile.location}</p>
            <h1>{profile.name}</h1>
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
            <h2>{currentRole.role}</h2>
            <p className="card-company">
              <a href={currentRole.companyUrl} target="_blank" rel="noreferrer">{currentRole.company}</a>
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
          <h2 className="section-title">Experience</h2>
          <div className="timeline">
            {experience.map((job) => (
              <article key={job.company + job.period} className="job">
                <header>
                  <h3>{job.role}</h3>
                  <p className="job-meta">
                    <a href={job.url} target="_blank" rel="noreferrer">{job.company}</a>
                    <span> · {job.location} · {job.period}</span>
                  </p>
                </header>
                <ul>
                  {job.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section section-alt">
          <h2 className="section-title">Projects</h2>
          <div className="grid">
            {projects.map((p) => (
              <article key={p.name} className="card">
                <h3>{p.name}</h3>
                <p>{p.description}</p>
                <ul className="tags">
                  {p.stack.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
                <div className="card-links">
                  <a href={p.url} target="_blank" rel="noreferrer">Source</a>
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noreferrer" className="live">Live demo</a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="section">
          <h2 className="section-title">Skills</h2>
          <div className="skills">
            {skills.map((g) => (
              <div key={g.group} className="skill-group">
                <h3>{g.group}</h3>
                <ul className="tags">
                  {g.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="section section-alt">
          <h2 className="section-title">Education</h2>
          <h3>{education.degree}</h3>
          <p className="job-meta">{education.school} · {education.period}</p>
        </section>

        <section id="contact" className="section contact">
          <h2 className="section-title">Let's connect</h2>
          <p>Happy to talk about .NET, microservice architecture, or leading engineering teams.</p>
          <div className="actions">
            <a href={`mailto:${profile.email}`} className="btn btn-primary">{profile.email}</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn btn-ghost">LinkedIn</a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="btn btn-ghost">GitHub</a>
            <a href={profile.hackerrank} target="_blank" rel="noreferrer" className="btn btn-ghost">HackerRank</a>
          </div>
        </section>

        <footer className="footer">
          © {new Date().getFullYear()} {profile.name}
        </footer>
      </main>
    </>
  );
}
