const projects = [
  {
    index: "01",
    title: "Wondr by BNI",
    type: "Greenfield digital banking",
    summary:
      "Built the iOS foundation from tender and proof-of-concept through architecture, security, CI/CD, release readiness, and production launch.",
    tags: ["Architecture", "App Security", "CI/CD", "Leadership"],
  },
  {
    index: "02",
    title: "Livin’ by Mandiri",
    type: "Mobile banking at scale",
    summary:
      "Improved stability, analytics integration, iOS compatibility, feature delivery, and banking security for a high-scale mobile platform.",
    tags: ["Swift", "Analytics", "Performance", "Fintech"],
  },
  {
    index: "03",
    title: "MyTelkomsel",
    type: "Native platform migration",
    summary:
      "Helped move the application from React Native to native iOS, strengthening platform performance and long-term maintainability.",
    tags: ["Native iOS", "Migration", "Performance", "Telco"],
  },
];

const experience = [
  ["2024 — Now", "PT Bank Negara Indonesia (BNI)", "Manager — iOS Dev, New Maverick Digital Delivery"],
  ["2022 — 2024", "Accenture", "Business & Integration Arch Specialist / iOS Team Lead"],
  ["2020 — 2022", "Allianz Indonesia", "iOS Engineer — Assistant Manager"],
  ["2017 — 2020", "Pegipegi · PHINCON · Krakatau IT", "iOS Engineer / Developer"],
];

export default function Home() {
  return (
    <main>
      <nav className="nav shell" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Armadi Gonta home">
          AG<span>.</span>
        </a>
        <div className="navLinks">
          <a href="#work">Selected work</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="status" href="mailto:arigonta@gmail.com">
          <i /> Available to connect
        </a>
      </nav>

      <section className="hero shell" id="top">
        <div className="heroCopy">
          <p className="eyebrow"><span>Senior iOS Engineer</span> Jakarta, Indonesia</p>
          <h1>Mobile systems<br />that <em>scale.</em></h1>
          <p className="intro">
            I’m Armadi Gonta — a Senior iOS Engineer with 7+ years building secure, high-scale products across digital banking, fintech, insurance, telco, and travel.
          </p>
          <div className="heroActions">
            <a className="primaryButton" href="#work">Explore selected work <span>↘</span></a>
            <a className="textLink" href="./Armadi_Gonta_Resume.pdf" target="_blank">View résumé ↗</a>
          </div>
          <div className="metrics" aria-label="Career highlights">
            <div><strong>7+</strong><span>Years delivering<br />mobile products</span></div>
            <div><strong>5</strong><span>Enterprise<br />product domains</span></div>
            <div><strong>01</strong><span>Focus: resilient<br />mobile systems</span></div>
          </div>
        </div>

        <div className="systemVisual" aria-label="Abstract mobile architecture illustration">
          <div className="orbit orbitOne" /><div className="orbit orbitTwo" />
          <div className="codeLabel labelOne">ARCH / MVVM</div>
          <div className="codeLabel labelTwo">RELEASE / READY</div>
          <div className="phone">
            <div className="phoneTop"><span>9:41</span><b>•••</b></div>
            <div className="phoneBody">
              <p>Good morning,</p><h3>Build with clarity.</h3>
              <div className="balance"><span>System health</span><strong>99.9%</strong><i /></div>
              <div className="quickGrid">
                <div><b>↗</b><span>Secure</span></div><div><b>⌁</b><span>Modular</span></div><div><b>✓</b><span>Tested</span></div>
              </div>
              <div className="chart"><i /><i /><i /><i /><i /><i /><i /></div>
              <div className="activity"><span /><div><b>Production ready</b><small>Release governance</small></div><em>LIVE</em></div>
            </div>
          </div>
          <div className="floatingCard cardTop"><span>CI/CD</span><strong>Automated</strong><i /></div>
          <div className="floatingCard cardBottom"><span>SECURITY</span><strong>Built in</strong><i /></div>
        </div>
      </section>

      <section className="workSection shell" id="work">
        <div className="sectionHeading"><p>01 / Selected work</p><h2>Products built for<br /><em>real-world scale.</em></h2></div>
        <div className="projectGrid">
          {projects.map((project) => (
            <article className="projectCard" key={project.title}>
              <div className="cardHeader"><span>{project.index}</span><i>↗</i></div>
              <div className="projectMark"><span>{project.title.slice(0, 1)}</span><div className="signalLines"><i /><i /><i /></div></div>
              <p className="projectType">{project.type}</p><h3>{project.title}</h3><p>{project.summary}</p>
              <div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="experience shell" id="experience">
        <div className="sectionHeading"><p>02 / Experience</p><h2>From implementation<br />to <em>direction.</em></h2></div>
        <div className="timeline">
          {experience.map(([year, company, role]) => <div className="role" key={company}><span>{year}</span><h3>{company}</h3><p>{role}</p><i>↗</i></div>)}
        </div>
      </section>

      <section className="capabilities shell">
        <p className="eyebrow"><span>Core capabilities</span> Systems thinking, end to end</p>
        <div className="capabilityList">
          <span>Swift</span><span>SwiftUI</span><span>UIKit</span><span>Combine</span><span>Architecture</span><span>App Security</span><span>CI/CD</span><span>Mentoring</span><span>Release Governance</span>
        </div>
      </section>

      <footer id="contact">
        <div className="shell footerInner">
          <p className="eyebrow"><span>Let’s connect</span> Open to meaningful conversations</p>
          <h2>Building something<br /><em>ambitious?</em></h2>
          <a className="email" href="mailto:arigonta@gmail.com">arigonta@gmail.com <span>↗</span></a>
          <div className="footerBottom"><span>© 2026 Armadi Gonta</span><a href="https://linkedin.com/in/arigonta" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="#top">Back to top ↑</a></div>
        </div>
      </footer>
    </main>
  );
}
