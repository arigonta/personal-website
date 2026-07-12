const projects = [
  {
    index: "01",
    title: "Wondr by BNI",
    logo: "./logos/wondr-bni.png",
    logoWidth: 960,
    logoHeight: 336,
    link: "https://apps.apple.com/id/app/wondr-by-bni/id6499518320",
    type: "Greenfield digital banking",
    period: "Jun 2023 — Present",
    role: "Senior iOS Engineer · From inception to current App Store release",
    summary:
      "Helped build the iOS application from scratch and continue developing it through the version available on the App Store today, spanning proof-of-concept, architecture, security, CI/CD, feature delivery, launch, and ongoing production evolution.",
    tags: ["Architecture", "App Security", "CI/CD", "Leadership"],
  },
  {
    index: "02",
    title: "Livin’ by Mandiri",
    logo: "./logos/livin-mandiri.png",
    logoWidth: 700,
    logoHeight: 495,
    link: "https://apps.apple.com/id/app/livin-by-mandiri/id1555414743",
    type: "Mobile banking at scale",
    period: "Sep 2022 — Jun 2023",
    role: "Senior iOS Engineer · Releases R3–R7",
    summary:
      "Joined the established Livin’ by Mandiri product during releases R3 through R7, contributing to feature development, stability, analytics integration, iOS compatibility, and banking security across the existing codebase.",
    tags: ["Swift", "Analytics", "Performance", "Fintech"],
  },
  {
    index: "03",
    title: "MyTelkomsel",
    logo: "./logos/mytelkomsel.png",
    logoWidth: 288,
    logoHeight: 288,
    link: "https://apps.apple.com/id/app/mytelkomsel/id651412430",
    type: "Native platform migration",
    period: "Apr 2019 — Nov 2019",
    role: "iOS Engineer · React Native refactor to native iOS 5.0",
    summary:
      "Joined the refactor initiative that moved MyTelkomsel from React Native to its first fully native iOS release, version 5.0, contributing to implementation, feature delivery, platform performance, and maintainability.",
    tags: ["Native iOS", "Migration", "Performance", "Telco"],
  },
  {
    index: "04",
    title: "SingHealth EMOS v4",
    logo: "./logos/singhealth.png",
    logoWidth: 320,
    logoHeight: 355,
    link: null,
    type: "Enterprise healthcare · iPadOS",
    period: "Nov 2024 — Present",
    role: "Sole iPadOS Engineer · End-to-end delivery",
    summary:
      "Independently built the EMOS v4 iPad application end to end, owning the iPadOS architecture, implementation, integration, quality, and release readiness for enterprise healthcare workflows.",
    tags: ["iPadOS", "Swift", "Healthcare", "End-to-end"],
  },
];

const experience = [
  {
    period: "2024 — Now",
    company: "PT Bank Negara Indonesia (BNI)",
    role: "Manager — iOS Dev, New Maverick Digital Delivery",
    summary:
      "Managing iOS development for New Maverick Digital Delivery, continuing Wondr by BNI through the version available on the App Store today.",
    products: ["Wondr by BNI"],
    current: true,
  },
  {
    period: "2022 — 2024",
    company: "Accenture",
    role: "Business & Integration Arch Specialist / iOS Team Lead",
    summary:
      "Led iOS work on banking engagements — Livin’ by Mandiri across releases R3–R7, then Wondr by BNI from its initial proof-of-concept.",
    products: ["Livin’ by Mandiri", "Wondr by BNI"],
    current: false,
  },
  {
    period: "2020 — 2022",
    company: "Allianz Indonesia",
    role: "iOS Engineer — Assistant Manager",
    summary: "iOS engineering for insurance products.",
    products: [],
    current: false,
  },
  {
    period: "2017 — 2020",
    company: "Pegipegi · PHINCON · Krakatau IT",
    role: "iOS Engineer / Developer",
    summary:
      "Early career across travel, telco, and IT services — including the MyTelkomsel refactor from React Native to its first fully native iOS release.",
    products: ["MyTelkomsel"],
    current: false,
  },
];

const capabilities: [string, string[]][] = [
  ["Language & UI", ["Swift", "SwiftUI", "UIKit", "Combine", "Objective-C"]],
  ["Architecture & Quality", ["MVVM", "MVP", "VIPER", "App Security", "XCTest & XCUITest"]],
  ["Delivery & Leadership", ["CI/CD", "Fastlane", "GitHub Actions", "Jenkins", "Release Governance", "Mentoring"]],
];

export default function Home() {
  return (
    <main>
      <a className="skipLink" href="#work">Skip to content</a>
      <nav className="nav shell" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Armadi Gonta home">
          Armadi Gonta<span>.</span>
        </a>
        <div className="navLinks">
          <a href="#work">Selected work</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="status" href="mailto:arigonta@gmail.com" aria-label="Email Armadi Gonta — available to connect">
          <i /> Available to connect
        </a>
        <details className="mobileMenu">
          <summary aria-label="Open navigation menu">Menu</summary>
          <div className="mobileLinks">
            <a href="#work">Selected work</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </div>
        </details>
      </nav>
      <script
        dangerouslySetInnerHTML={{
          __html:
            "document.addEventListener('click',function(e){var a=e.target.closest('.mobileLinks a');if(a)a.closest('details').removeAttribute('open')});",
        }}
      />

      <section className="hero shell" id="top">
        <div className="heroCopy">
          <p className="eyebrow"><span>Senior iOS Engineer</span> Jakarta, Indonesia</p>
          <h1>Mobile systems<br />that <em>scale.</em></h1>
          <p className="intro">
            I’m Armadi Gonta — a Senior iOS Engineer with 7+ years building secure, high-scale products across digital banking, fintech, insurance, telco, and travel.
          </p>
          <p className="intro introSecondary">
            Most recently I helped build Wondr by BNI from proof-of-concept to its current App Store release, and independently delivered the SingHealth EMOS v4 iPadOS app — with a focus on architecture, app security, and release readiness.
          </p>
          <div className="heroActions">
            <a className="primaryButton" href="#work">Explore selected work <span>↘</span></a>
            <a className="textLink" href="./Armadi_Gonta_Resume.pdf" target="_blank">View résumé ↗</a>
          </div>
          <div className="metrics" aria-label="Career highlights">
            <div><strong>7+</strong><span>Years delivering<br />mobile products</span></div>
            <div><strong>5</strong><span>Enterprise<br />product domains</span></div>
            <div><strong>4</strong><span>Flagship apps<br />banking · telco · health</span></div>
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
          {projects.map((project) => {
            const card = (
              <>
                <div className="cardHeader"><span>{project.index}</span><i>{project.link ? "App Store ↗" : "Enterprise"}</i></div>
                <div className="projectMark"><img src={project.logo} alt={`${project.title} logo`} width={project.logoWidth} height={project.logoHeight} loading="lazy" decoding="async" /><div className="signalLines"><i /><i /><i /></div></div>
                <div className="projectMeta"><p className="projectType">{project.type}</p><time>{project.period}</time></div><h3>{project.title}</h3><p className="projectRole"><span>Role</span>{project.role}</p><p>{project.summary}</p>
                <div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </>
            );
            return project.link ? (
              <a className="projectCard" key={project.title} href={project.link} target="_blank" rel="noreferrer" aria-label={`${project.title} on the App Store`}>{card}</a>
            ) : (
              <article className="projectCard" key={project.title}>{card}</article>
            );
          })}
        </div>
      </section>

      <section className="experience shell" id="experience">
        <div className="sectionHeading">
          <p>02 / Experience</p>
          <h2>From implementation<br />to <em>direction.</em></h2>
          <p className="sectionNote">
            Seven-plus years across banking, insurance, telco, and travel — from hands-on feature work to leading iOS teams and owning delivery end to end.
          </p>
        </div>
        <div className="timeline">
          {experience.map((job) => (
            <div className={job.current ? "role roleCurrent" : "role"} key={job.company}>
              <span>{job.period}</span>
              <div>
                <h3>{job.company}{job.current && <em className="nowBadge">Now</em>}</h3>
                <p className="roleTitle">{job.role}</p>
                <p className="roleSummary">{job.summary}</p>
                {job.products.length > 0 && (
                  <div className="roleProducts">{job.products.map((product) => <span key={product}>{product}</span>)}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="capabilities shell">
        <p className="eyebrow"><span>Core capabilities</span> Systems thinking, end to end</p>
        <div className="capabilityGroups">
          {capabilities.map(([group, items]) => (
            <div className="capabilityGroup" key={group}>
              <p>{group}</p>
              <div className="capabilityList">{items.map((item) => <span key={item}>{item}</span>)}</div>
            </div>
          ))}
        </div>
      </section>

      <footer id="contact">
        <div className="shell footerInner">
          <p className="eyebrow"><span>Let’s connect</span> Open to meaningful conversations</p>
          <h2>Building something<br /><em>ambitious?</em></h2>
          <a className="email" href="mailto:arigonta@gmail.com">arigonta@gmail.com <span>↗</span></a>
          <div className="footerBottom"><span>© 2026 Armadi Gonta</span><a href="https://linkedin.com/in/arigonta" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://github.com/arigonta" target="_blank" rel="noreferrer">GitHub ↗</a><a href="#top">Back to top ↑</a></div>
        </div>
      </footer>
    </main>
  );
}
