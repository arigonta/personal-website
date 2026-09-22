const projects = [
  {
    index: "01",
    title: "Wondr by BNI",
    logo: "./logos/wondr-bni.png",
    logoWidth: 960,
    logoHeight: 336,
    mark: "markDefault",
    badge: "App Store ↗",
    link: "https://apps.apple.com/id/app/wondr-by-bni/id6499518320",
    type: "Greenfield digital banking",
    period: "Jun 2023 – Present",
    start: "2023-06",
    role: "Senior iOS Engineer · From inception to current App Store release",
    summary:
      "Helped build the iOS application from scratch and continue developing it through the version available on the App Store today, spanning proof-of-concept, architecture, security, CI/CD, feature delivery, launch, and ongoing production evolution.",
    tags: ["Architecture", "App Security", "CI/CD", "Leadership"],
  },
  {
    index: "02",
    title: "SingHealth EMOS v4",
    logo: "./logos/singhealth.png",
    logoWidth: 320,
    logoHeight: 355,
    mark: "markPill",
    badge: "Enterprise",
    link: null,
    type: "Enterprise healthcare · iPadOS",
    period: "Nov 2024 – Present",
    start: "2024-11",
    role: "Sole iPadOS Engineer · End-to-end delivery",
    summary:
      "Independently built the EMOS v4 iPad application end to end, owning the iPadOS architecture, implementation, integration, quality, and release readiness for enterprise healthcare workflows.",
    tags: ["iPadOS", "Swift", "Healthcare", "End-to-end"],
  },
  {
    index: "03",
    title: "Livin’ by Mandiri",
    logo: "./logos/livin-mandiri.png",
    logoWidth: 700,
    logoHeight: 495,
    mark: "markPill",
    badge: "App Store ↗",
    link: "https://apps.apple.com/id/app/livin-by-mandiri/id1555414743",
    type: "Mobile banking at scale",
    period: "Sep 2022 – Jun 2023",
    start: "2022-09",
    role: "Senior iOS Engineer · Releases R3–R7",
    summary:
      "Joined the established Livin’ by Mandiri product during releases R3 through R7, contributing to feature development, stability, analytics integration, iOS compatibility, and banking security across the existing codebase.",
    tags: ["Swift", "Analytics", "Performance", "Fintech"],
  },
  {
    index: "04",
    title: "MyTelkomsel",
    logo: "./logos/mytelkomsel.png",
    logoWidth: 288,
    logoHeight: 288,
    mark: "markIcon",
    badge: "App Store ↗",
    link: "https://apps.apple.com/id/app/mytelkomsel/id651412430",
    type: "Native platform migration",
    period: "Apr 2019 – Oct 2019",
    start: "2019-04",
    role: "iOS Engineer · React Native refactor to native iOS 5.0",
    summary:
      "Joined the refactor initiative that moved MyTelkomsel from React Native to its first fully native iOS release, version 5.0, contributing to implementation, feature delivery, platform performance, and maintainability.",
    tags: ["Native iOS", "Migration", "Performance", "Telco"],
  },
  {
    index: "05",
    title: "Kachimen",
    logo: "./logos/kachimen.png",
    logoWidth: 288,
    logoHeight: 288,
    mark: "markIcon",
    badge: "App Store ↗",
    link: "https://apps.apple.com/jp/app/id6461690440",
    type: "AI interview practice · Japan",
    period: "Sep 2025 – Present",
    start: "2025-09",
    role: "iOS Engineer · Ongoing releases of the live app",
    summary:
      "Joined Kachimen, a Japanese AI interview practice and screening video analysis app already live on the App Store, contributing to mock interview and training flows, authentication, iOS 26 support, and crash and stability fixes while keeping behaviour aligned with the Android client.",
    tags: ["Swift", "UIKit", "Camera & audio", "HR tech"],
  },
  {
    index: "06",
    title: "Pegipegi",
    logo: "./logos/pegipegi.png",
    logoWidth: 2098,
    logoHeight: 419,
    mark: "markWide",
    badge: "Archived",
    link: null,
    type: "Online travel · Consumer app",
    period: "Nov 2019 – Apr 2020",
    start: "2019-11",
    role: "iOS Engineer · Contributed across v2.9 – v3.4",
    summary:
      "Joined the established Pegipegi travel booking app and contributed to the iOS releases from version 2.9 through 3.4, working on feature delivery and maintenance inside the existing codebase. The service has since ceased operations and the app is no longer listed.",
    tags: ["Swift", "Objective-C", "Travel", "Feature delivery"],
  },
  {
    index: "07",
    title: "Allianz Inspire",
    logo: "./logos/allianz.svg",
    logoWidth: 300,
    logoHeight: 134,
    mark: "markBlock",
    badge: "Internal",
    link: null,
    type: "Bancassurance sales tool",
    period: "Jun 2020 – Aug 2022",
    start: "2020-06",
    role: "iOS Engineer · Contributed to Inspire v2.4",
    summary:
      "In-house iOS engineering on Inspire, the Allianz Indonesia bancassurance sales application used by bank partner channels, contributing native features and maintenance through the version 2.4 release cycle.",
    tags: ["Swift", "Insurance", "Native iOS", "In-house"],
  },
  {
    index: "08",
    title: "Restaurant POS",
    logo: null,
    logoWidth: 0,
    logoHeight: 0,
    mark: "markGlyph",
    badge: "In development",
    link: null,
    type: "Point of sale · iPadOS",
    period: "Sep 2026 – Present",
    start: "2026-09",
    role: "Sole iPadOS Engineer · End-to-end delivery, in progress",
    summary:
      "Building a point of sale iPad application for a restaurant client, owning the iPadOS delivery end to end from architecture through release readiness. The project is in active development, so the client and product details stay private until launch.",
    tags: ["iPadOS", "Swift", "Point of sale", "In progress"],
  },
];

const experience = [
  {
    period: "2024 – Now",
    company: "PT Bank Negara Indonesia (BNI)",
    role: "Senior iOS Engineer / Sub Lead · New Maverick Digital Delivery",
    summary:
      "Leading iOS delivery inside New Maverick Digital Delivery and continuing Wondr by BNI through the version on the App Store today, covering architecture, app security, CI/CD, release readiness, and production support.",
    products: ["Wondr by BNI"],
    current: true,
  },
  {
    period: "2022 – 2024",
    company: "Accenture",
    role: "Business & Integration Arch Specialist / Senior iOS Developer",
    summary:
      "Senior iOS engineer on banking engagements: Livin’ by Mandiri across releases R3–R7, covering feature delivery, stability, analytics, and banking security requirements, then Wondr by BNI from its initial proof-of-concept into architecture, app security, and CI/CD foundations.",
    products: ["Livin’ by Mandiri", "Wondr by BNI"],
    current: false,
  },
  {
    period: "2020 – 2022",
    company: "Allianz Indonesia",
    role: "iOS Engineer · Assistant Manager",
    summary:
      "In-house iOS engineering for Allianz insurance products, including Inspire, the bancassurance sales application for bank partner channels, building and maintaining native features across the full development and release cycle.",
    products: ["Allianz Inspire"],
    current: false,
  },
  {
    period: "2017 – 2020",
    company: "Pegipegi · PHINCON · Krakatau IT",
    role: "iOS Engineer / Developer",
    summary:
      "Early career across travel, telco, and IT services: contributing to the MyTelkomsel refactor from React Native to its first fully native iOS release, then to the Pegipegi travel app across versions 2.9 through 3.4, with a focus on native implementation, platform performance, and maintainability.",
    products: ["MyTelkomsel", "Pegipegi"],
    current: false,
  },
];

const services = [
  {
    index: "01",
    label: "Mobile",
    title: "iOS & Android apps",
    summary:
      "Native mobile applications built from scratch or taken over mid-flight, with clean architecture, secure data handling, and a release process that holds up in production.",
    items: ["Swift · SwiftUI · UIKit", "Android delivery", "App Store & Play Store release", "CI/CD and release governance"],
  },
  {
    index: "02",
    label: "Web",
    title: "Websites & web apps",
    summary:
      "Company profiles, landing pages, and custom web applications that load fast, read well on every screen, and stay easy for your team to maintain.",
    items: ["Next.js · React", "Responsive, accessible UI", "SEO and analytics setup", "Hosting and deployment"],
  },
  {
    index: "03",
    label: "Business systems",
    title: "Web ERP & internal tools",
    summary:
      "Operational systems that replace spreadsheets and manual handoffs, built around how your business actually runs, with clear roles and reliable data.",
    items: ["Inventory · Finance · HR · POS", "Role-based access control", "Reporting and dashboards", "API and third-party integration"],
  },
  {
    index: "04",
    label: "Advisory",
    title: "Consulting & support",
    summary:
      "A senior pair of hands for teams that already have a product: architecture reviews, security and performance audits, pipeline automation, and ongoing maintenance.",
    items: ["Architecture & code review", "App security audit", "CI/CD automation", "Maintenance retainer"],
  },
];

const FEATURED_COUNT = 2;

const shipped = projects.filter((project) => project.logo && project.badge !== "In development");

const whatsappLink =
  "https://wa.me/6281510822471?text=Hi%20Armadi%2C%20I%20would%20like%20to%20discuss%20a%20project.";

const capabilities: [string, string[]][] = [
  ["Language & UI", ["Swift", "SwiftUI", "UIKit", "Combine", "Objective-C"]],
  ["Architecture & Quality", ["MVVM", "MVP", "VIPER", "App Security", "XCTest & XCUITest"]],
  ["Delivery & Leadership", ["CI/CD", "Fastlane", "GitHub Actions", "Jenkins", "Release Governance", "Mentoring"]],
];

export default function Home() {
  return (
    <main>
      <a className="skipLink" href="#work">Skip to content</a>
      <div className="navBar">
      <nav className="nav shell" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Armadi Gonta home">
          Armadi Gonta<span>.</span>
        </a>
        <div className="navLinks">
          <a href="#work">Selected work</a>
          <a href="#experience">Experience</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="status" href="mailto:arigonta@gmail.com" aria-label="Email Armadi Gonta, available to connect">
          <i /> <span className="statusFull">Available to connect</span><span className="statusShort">Available</span>
        </a>
        <details className="mobileMenu">
          <summary aria-label="Open navigation menu">Menu</summary>
          <div className="mobileLinks">
            <a href="#work">Selected work</a>
            <a href="#experience">Experience</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </div>
        </details>
      </nav>
      </div>
      <script
        dangerouslySetInnerHTML={{
          __html:
            "document.addEventListener('click',function(e){var a=e.target.closest('.mobileLinks a');if(a)a.closest('details').removeAttribute('open')});" +
            // The sections this observes are parsed after this script, so setup waits for the full document.
            "function navSpy(){var links=[].slice.call(document.querySelectorAll('.navLinks a,.mobileLinks a')),ids=[],map={};" +
            "links.forEach(function(a){var id=(a.getAttribute('href')||'').replace('#','');if(!id||!document.getElementById(id))return;if(!map[id]){map[id]=[];ids.push(id)}map[id].push(a)});" +
            "if(!ids.length||!window.IntersectionObserver)return;var active={};" +
            "var io=new IntersectionObserver(function(es){es.forEach(function(e){active[e.target.id]=e.isIntersecting});" +
            "var current=null;ids.forEach(function(id){if(active[id])current=id});" +
            "links.forEach(function(a){a.removeAttribute('aria-current')});" +
            "if(current)map[current].forEach(function(a){a.setAttribute('aria-current','true')})},{rootMargin:'-45% 0px -45% 0px'});" +
            "ids.forEach(function(id){io.observe(document.getElementById(id))})}" +
            // Reveal on scroll, but never hide content from anyone who cannot run this
            // or has asked for less motion: the class is only added by script.
            "function reveal(){if(matchMedia('(prefers-reduced-motion:reduce)').matches||!window.IntersectionObserver)return;" +
            "var els=[].slice.call(document.querySelectorAll('.sectionHeading,.projectCard,.role,.capabilityGroup,.serviceCard,.serviceCta,.shippedStrip,.footerGrid'));" +
            "els.forEach(function(el){el.classList.add('reveal')});" +
            "var ro=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('isIn');ro.unobserve(e.target)}})},{rootMargin:'0px 0px -12% 0px',threshold:.08});" +
            "els.forEach(function(el){ro.observe(el)})}" +
            "function boot(){navSpy();reveal()}" +
            "if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',boot)}else{boot()}",
        }}
      />

      <section className="hero shell" id="top">
        <p className="eyebrow"><span>Senior iOS Engineer</span> Jakarta, Indonesia</p>
        <h1>Mobile systems<br />that <em>scale.</em></h1>
        <div className="heroLower">
          <div className="heroCopy">
            <p className="intro">
              I’m Armadi Gonta, a Senior iOS Engineer with 7+ years building secure, high-scale products across digital banking, insurance, healthcare, telco, travel, and HR tech.
            </p>
            <p className="intro introSecondary">
              Most recently I helped build Wondr by BNI from proof-of-concept to its current App Store release, and independently delivered the SingHealth EMOS v4 iPadOS app, with a focus on architecture, app security, and release readiness.
            </p>
            <div className="heroActions">
              <a className="primaryButton" href="#work">Explore selected work <span>↘</span></a>
              <a className="textLink" href="./Armadi_Gonta_Resume.pdf" target="_blank" data-goatcounter-click="resume-hero">View résumé ↗</a>
            </div>
          </div>
          <div className="metrics" aria-label="Career highlights">
            <div><strong>7+</strong><span>Years delivering<br />mobile products</span></div>
            <div><strong>6</strong><span>Enterprise<br />product domains</span></div>
            <div><strong>7</strong><span>Products shipped<br />to production</span></div>
          </div>
        </div>
      </section>

      <section className="shipped shell" aria-labelledby="shippedHeading">
        <p className="shippedLabel" id="shippedHeading">Shipped to production</p>
        <ul className="shippedStrip">
          {shipped.map((item) => (
            <li key={item.title}>
              {item.link ? (
                <a href={item.link} target="_blank" rel="noreferrer" data-goatcounter-click={`shipped-${item.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>{item.title} <i>↗</i></a>
              ) : (
                <span>{item.title}</span>
              )}
            </li>
          ))}
        </ul>
      </section>

      <section className="workSection shell" id="work">
        <div className="sectionHeading">
          <p>01 / Selected work</p>
          <h2>Built from scratch,<br />or <em>joined mid-flight.</em></h2>
          <p className="sectionNote">
            Some of these products were built from the ground up. Others were established apps joined mid-development, with contributions scoped to specific releases and versions. Each card states the exact role and scope.
          </p>
        </div>
        <div className="projectGrid">
          {projects.map((project, index) => {
            const card = (
              <>
                <div className="cardHeader"><span>{project.index}</span><i>{project.badge}</i></div>
                <div className="projectMark">
                  {project.logo ? (
                    <img className={project.mark} src={project.logo} alt={`${project.title} logo`} width={project.logoWidth} height={project.logoHeight} loading="lazy" decoding="async" />
                  ) : (
                    <svg className={project.mark} viewBox="0 0 132 96" role="img" aria-label="Abstract point of sale tablet illustration">
                      <rect x="2" y="2" width="128" height="92" rx="11" fill="#0d1420" stroke="#2b3a52" strokeWidth="1.5" />
                      <rect x="10" y="10" width="68" height="76" rx="5" fill="#111a2a" />
                      <rect x="16" y="16" width="27" height="20" rx="3" fill="#1d2a42" />
                      <rect x="47" y="16" width="27" height="20" rx="3" fill="#1d2a42" />
                      <rect x="16" y="40" width="27" height="20" rx="3" fill="#2764ff" opacity="0.55" />
                      <rect x="47" y="40" width="27" height="20" rx="3" fill="#1d2a42" />
                      <rect x="16" y="64" width="27" height="16" rx="3" fill="#1d2a42" />
                      <rect x="47" y="64" width="27" height="16" rx="3" fill="#1d2a42" />
                      <rect x="84" y="10" width="38" height="76" rx="5" fill="#111a2a" />
                      <rect x="90" y="18" width="26" height="3" rx="1.5" fill="#33445e" />
                      <rect x="90" y="27" width="20" height="3" rx="1.5" fill="#33445e" />
                      <rect x="90" y="36" width="24" height="3" rx="1.5" fill="#33445e" />
                      <rect x="90" y="45" width="16" height="3" rx="1.5" fill="#33445e" />
                      <rect x="90" y="56" width="26" height="1" fill="#2b3a52" />
                      <rect x="90" y="62" width="26" height="14" rx="3" fill="#43d9ff" opacity="0.85" />
                    </svg>
                  )}
                  <div className="signalLines"><i /><i /><i /></div>
                </div>
                <div className="projectMeta"><p className="projectType">{project.type}</p><time dateTime={project.start}>{project.period}</time></div><h3>{project.title}</h3><p className="projectRole"><span>Role</span>{project.role}</p><p>{project.summary}</p>
                <div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </>
            );
            // The first two are the work Armadi owned end to end, so they lead the
            // grid at full width. An odd tail count would otherwise leave the last
            // card stranded beside an empty cell, so it spans the row instead.
            const featured = index < FEATURED_COUNT;
            const isLast = index === projects.length - 1;
            const tailIsOdd = (projects.length - FEATURED_COUNT) % 2 === 1;
            const cardClass = [
              "projectCard",
              featured ? "projectCardFeatured" : "",
              !featured && isLast && tailIsOdd ? "projectCardWide" : "",
            ].filter(Boolean).join(" ");
            return project.link ? (
              <a className={cardClass} key={project.title} href={project.link} target="_blank" rel="noreferrer" aria-label={`${project.title} on the App Store`} data-goatcounter-click={`appstore-${project.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>{card}</a>
            ) : (
              <article className={cardClass} key={project.title}>{card}</article>
            );
          })}
        </div>
      </section>

      <section className="experience shell" id="experience">
        <div className="sectionHeading">
          <p>02 / Experience</p>
          <h2>From implementation<br />to <em>direction.</em></h2>
          <p className="sectionNote">
            Seven-plus years across banking, insurance, telco, and travel, from hands-on feature work to leading iOS teams and owning delivery end to end.
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

      <section className="capabilities shell" id="capabilities" aria-labelledby="capabilitiesHeading">
        <p className="eyebrow" id="capabilitiesHeading"><span>Core capabilities</span> Systems thinking, end to end</p>
        <div className="capabilityGroups">
          {capabilities.map(([group, items]) => (
            <div className="capabilityGroup" key={group}>
              <p>{group}</p>
              <div className="capabilityList">{items.map((item) => <span key={item}>{item}</span>)}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="services shell" id="services">
        <div className="sectionHeading">
          <p>03 / Services</p>
          <h2>Building products<br />for <em>your business.</em></h2>
          <p className="sectionNote">
            Alongside my full-time engineering work I take on selected freelance and contract projects: mobile apps, websites and web applications, and internal business systems, delivered with the same architecture, security, and release discipline I apply to enterprise banking products.
          </p>
        </div>
        <div className="serviceGrid">
          {services.map((service) => (
            <article className="serviceCard" key={service.title}>
              <div className="serviceTop"><span>{service.index}</span><i>{service.label}</i></div>
              <h3>{service.title}</h3>
              <p>{service.summary}</p>
              <ul className="serviceList">
                {service.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
          ))}
        </div>
        <div className="serviceCta">
          <div>
            <h3>Have something<br />in mind? <em>Let’s talk.</em></h3>
            <p className="serviceCtaNote">
              Tell me what you are building and I will come back with the scope, a realistic timeline, and the approach I would take. WhatsApp is the fastest way to reach me.
            </p>
            <div className="serviceModes">
              <span>Project based</span><span>Monthly retainer</span><span>Technical consultation</span>
            </div>
          </div>
          <div className="serviceCtaActions">
            <a className="primaryButton" href={whatsappLink} target="_blank" rel="noreferrer" data-goatcounter-click="whatsapp-services">Chat on WhatsApp <span>↗</span></a>
            <a className="outlineButton" href="mailto:arigonta@gmail.com?subject=Project%20enquiry" data-goatcounter-click="email-services">Send a brief by email ↗</a>
          </div>
        </div>
      </section>

      <footer id="contact">
        <div className="shell footerInner">
          <p className="eyebrow"><span>Let’s connect</span> Open to senior iOS opportunities and freelance projects</p>
          <div className="footerGrid">
            <div>
              <h2>Let’s build your next<br /><em>iOS product.</em></h2>
              <div className="footerActions">
                <a className="primaryButton" href="mailto:arigonta@gmail.com" data-goatcounter-click="email-footer">arigonta@gmail.com <span>↗</span></a>
                <a className="outlineButton" href={whatsappLink} target="_blank" rel="noreferrer" data-goatcounter-click="whatsapp-footer">WhatsApp ↗</a>
                <a className="outlineButton" href="./Armadi_Gonta_Resume.pdf" target="_blank" data-goatcounter-click="resume-footer">View résumé ↗</a>
                <a className="outlineButton" href="https://linkedin.com/in/arigonta" target="_blank" rel="noreferrer">LinkedIn ↗</a>
                <a className="outlineButton" href="https://github.com/arigonta" target="_blank" rel="noreferrer">GitHub ↗</a>
              </div>
            </div>
            <div className="footerFacts">
              <div><span>Location</span><p>Jakarta, Indonesia · GMT+7</p></div>
              <div><span>Currently</span><p>Senior iOS Engineer / Sub Lead at PT Bank Negara Indonesia (BNI)</p></div>
              <div><span>Open to</span><p>Senior iOS engineering roles, freelance product builds, and meaningful conversations</p></div>
            </div>
          </div>
          <div className="footerBottom"><span>© 2026 Armadi Gonta · Jakarta, Indonesia</span><a href="#top">Back to top ↑</a></div>
        </div>
      </footer>
    </main>
  );
}
