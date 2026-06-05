const stats = [
  ["200+", "student members"],
  ["3", "active chapters"],
  ["4", "opportunity tracks"]
];

const opportunityCategories = [
  ["Internships", "Finance, business, research, accounting, consulting, investment, and startup roles curated for students."],
  ["Competitions", "Case studies, stock pitches, trading challenges, valuation contests, and presentation formats."],
  ["Programs", "Research, strategy, leadership, chapter development, and finance education tracks run by students."],
  ["Resources", "Guides, templates, lessons, speaker recordings, reading lists, and practical finance tools."]
];

const teamMembers = [
  ["Andrew Fu", "Co-Founder", "Leadership", "Co-Founder"],
  ["Sai Aathish Karthik", "VP, Web Development", "Web Development", "Senior Associate"],
  ["Sashitej Palla", "VP, Web Development", "Web Development", "Senior Associate"],
  ["Ackshat Tiwari", "Core Developer", "Web Development", "Senior Associate"],
  ["Kev Wong", "Frontend & UI", "Web Development", "Senior Associate"],
  ["Niranjana Suresh Preethy", "Frontend & UI", "Web Development", "Senior Associate"]
];

const boardAdvisors = Array.from({ length: 9 }, (_, index) => [
  `Advisor ${index + 1}`,
  "Advisor seat",
  "Advisor profile coming soon."
]);

const chapters = [
  ["Marquette High School", "Chesterfield, MO", "Active founding chapter"],
  ["Middleton High School", "Tampa, FL", "Active founding chapter"],
  ["Bridgewater-Raritan High School", "Bridgewater, NJ", "Active founding chapter"]
];

const openRoles = [
  {
    title: "Financial Analyst Interns",
    team: "Finance",
    commitment: "Part-time, student-led analyst role",
    description:
      "Support BFN's finance work through company research, market updates, investment writeups, and internal analyst projects.",
    link: "https://forms.gle/u12GhM5b8QyzqzgJ7"
  }
];

const posts = [
  ["Member portal preview", "June 2026", "Update", "BFN is organizing member-only opportunities, curriculum, case competitions, resource access, speaker recordings, and tier information in one private portal."],
  ["Financial Analyst Interns", "June 2026", "Open role", "BFN is recruiting finance-focused students to support company research, market updates, investment writeups, and internal analyst projects."],
  ["Chapter growth", "May 2026", "Spotlight", "Founding chapters are helping bring finance education sessions, competitions, and member recruiting to local student communities."]
];

const events = [
  ["BFN Info Session", "Coming soon", "Public session for prospective members covering eligibility, teams, tiers, and the application process.", "Public"],
  ["Stock Pitch Practice", "Coming soon", "Member session for practicing thesis structure, market research, valuation basics, and presentation feedback.", "Portal required"],
  ["Case Competition Launch", "Coming soon", "Member competition format with submission guidance, judging criteria, and team deadlines.", "Portal required"]
];

const resources = [
  ["BFN Guides", "Finance primers, recruiting guides, resume templates, interview prep, and market explainers."],
  ["Tools", "Calculators, worksheets, valuation templates, and market research utilities built for student use."],
  ["Video Resources", "Accounting, valuation, markets, investing, and career preparation videos approved for members."],
  ["Programs", "Structured learning tracks across research, strategy, leadership, and finance fundamentals."]
];

const pulseItems = [
  ["Applications", "Financial Analyst Interns", "Open"],
  ["Chapters", "3 founding chapters", "Live"],
  ["Resources", "Guides, tools, videos", "Member"],
  ["Portal", "Private member access", "Invite"]
];

const tapeItems = [
  "BFN Guides",
  "Equity Research",
  "Case Competitions",
  "Financial Analyst Interns",
  "Chapter Events",
  "Speaker Sessions",
  "Member Tiers",
  "Stock Pitch Practice"
];

const insideBfnItems = [
  ["Opportunities", "Curated internship lists, program links, finance role deadlines, and student-friendly application notes."],
  ["Curriculum", "Finance lessons on accounting, markets, valuation, investing, recruiting, and professional communication."],
  ["Competitions", "Case competitions, stock pitch practice, trading challenges, valuation contests, and team submissions."],
  ["Chapters", "Local finance sessions, speaker events, chapter recruiting, and leadership teams at active schools."],
  ["Resources", "Templates, calculators, worksheets, video lessons, resume prep, and market research tools."],
  ["Leadership", "Student-run teams across finance, research, web development, resources, operations, marketing, and partnerships."]
];

const testimonials = [
  {
    quote:
      "BFN gives students a clear place to practice research, join competitions, use finance templates, and work with peers who care about finance.",
    name: "Member perspective",
    designation: "Research and competitions",
    initials: "RC",
    accent: "Research"
  },
  {
    quote:
      "The strongest part is having curated finance opportunities, student-run programs, and a private portal organized in one place.",
    name: "Member perspective",
    designation: "Opportunities and programs",
    initials: "OP",
    accent: "Access"
  },
  {
    quote:
      "Chapters make the network feel local while the portal keeps the full member experience organized in one place.",
    name: "Member perspective",
    designation: "Chapter growth",
    initials: "CG",
    accent: "Chapters"
  }
];

const faqs = [
  ["What is BFN?", "Bridge Finance Network is a student-led nonprofit helping students learn finance, find curated opportunities, join competitions, and build leadership experience."],
  ["Who can join?", "BFN is built for motivated students interested in finance, business, research, investing, accounting, consulting, web development, resources, operations, marketing, partnerships, or chapter leadership."],
  ["Is BFN student-led?", "Yes. Students lead BFN teams, chapter activity, resource development, finance projects, and member programming."],
  ["What do members get access to?", "Members can access curated opportunity lists, finance lessons, case competitions, stock pitch practice, speaker recordings, templates, tools, and internal programs through the portal."],
  ["How do I start a chapter?", "Apply to join BFN first. Approved members receive portal access, where they can submit a chapter launch form and review onboarding materials."],
  ["How does portal access work?", "Applicants apply publicly. Approved applicants receive a registration code by email so they can create a private member portal account."],
  ["Are resources public or member-only?", "The public site previews the library. Full guides, tools, videos, speaker recordings, templates, and internal links are member-only."],
  ["How do open roles work?", "Open roles are posted publicly. Each role explains the team, expected work, and application link. BFN reviews applications and follows up by email."],
  ["Who do I contact with questions?", "Email bridgefinancenetwork@gmail.com for general questions, partnerships, chapter interest, advisor outreach, or member support."]
];

const portalLinks = [
  ["/portal/dashboard", "Dashboard"],
  ["/portal/opportunities", "Opportunities"],
  ["/portal/curriculum", "Curriculum"],
  ["/portal/competitions", "Competitions"],
  ["/portal/resources", "Resources"],
  ["/portal/speakers", "Speakers"],
  ["/portal/profile", "Profile"]
];

const meta = {
  "/": ["Bridge Finance Network", "Helping students break into finance earlier through education, opportunities, competitions, chapters, and a private member portal."],
  "/about": ["About | Bridge Finance Network", "Mission, founder profile, advisor structure, and credibility points for BFN."],
  "/team": ["Team & Members | Bridge Finance Network", "Meet the students building BFN across leadership, web development, resources, operations, and member programs."],
  "/opportunities": ["Opportunities | Bridge Finance Network", "Preview BFN opportunity categories before signing into the member portal."],
  "/chapters": ["Chapters | Bridge Finance Network", "Active founding chapters and the path to start BFN at your school."],
  "/partners": ["Partners | Bridge Finance Network", "Partnership model for firms and organizations working with BFN."],
  "/open-roles": ["Open Roles | Bridge Finance Network", "Apply to join BFN through publicly visible role listings."],
  "/blog": ["Blog & News | Bridge Finance Network", "BFN updates, recaps, announcements, and member spotlights."],
  "/events": ["Events | Bridge Finance Network", "Upcoming BFN competitions, sessions, and chapter events."],
  "/resources": ["Resource Library | Bridge Finance Network", "Preview BFN resource categories before signing in."],
  "/portfolio": ["BFN Portfolio | Bridge Finance Network", "Preview upcoming student research, chapter work, finance projects, and internal initiatives."],
  "/faq": ["FAQ | Bridge Finance Network", "Common questions about joining BFN, tiers, chapters, and membership."],
  "/contact": ["Contact | Bridge Finance Network", "Contact BFN for general, partnership, press, and chapter inquiries."],
  "/login": ["Member Portal Login | Bridge Finance Network", "Sign into the BFN member portal."],
  "/register": ["Register | Bridge Finance Network", "Create a BFN member portal account with an approved registration code."],
  "/reset": ["Password Reset | Bridge Finance Network", "Request a BFN member portal password reset."],
  "/portal/dashboard": ["Dashboard | Bridge Finance Network", "Review member tier status, announcements, and quick links."],
  "/portal/opportunities": ["Portal Opportunities | Bridge Finance Network", "Filter unlocked opportunities by category."],
  "/portal/curriculum": ["Curriculum Hub | Bridge Finance Network", "Finance lessons organized by topic and difficulty."],
  "/portal/competitions": ["Competitions | Bridge Finance Network", "Active case studies, competitions, and submissions."],
  "/portal/resources": ["Portal Resources | Bridge Finance Network", "Unlocked BFN-created guides, tools, videos, and programs."],
  "/portal/speakers": ["Guest Speakers | Bridge Finance Network", "Portal-exclusive guest speaker recordings."],
  "/portal/profile": ["Profile | Bridge Finance Network", "Member profile, tier status, and promotion history."],
  "/manage-tiers": ["Manage Tiers | Bridge Finance Network", "Restricted HR and MD tier management surface."]
};

const $app = document.querySelector("#app");
const $nav = document.querySelector("[data-nav]");
const $toggle = document.querySelector("[data-menu-toggle]");
let testimonialTimer = null;

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function button(href, label, variant = "primary", attrs = "") {
  return `<a class="button ${variant}" href="${href}" ${attrs}>${escapeHtml(label)}</a>`;
}

function metric([number, label]) {
  return `<div class="metric"><strong>${number}</strong><span>${label}</span></div>`;
}

function pageHero(eyebrow, title, lead, panel = "") {
  return `
    <section class="page-hero">
      <div class="page-hero-inner">
        <div>
          <p class="eyebrow">${escapeHtml(eyebrow)}</p>
          <h1>${escapeHtml(title)}</h1>
          <p>${escapeHtml(lead)}</p>
        </div>
        ${panel ? `<aside class="card quick-panel">${panel}</aside>` : ""}
      </div>
    </section>
  `;
}

function card(label, title, body, extra = "") {
  return `
    <article class="card">
      ${label ? `<span class="card-label">${escapeHtml(label)}</span>` : ""}
      <h3>${escapeHtml(title)}</h3>
      <p>${escapeHtml(body)}</p>
      ${extra}
    </article>
  `;
}

function lockedCard([title, body]) {
  return card("Locked preview", title, body, `<div class="inline-actions">${button("/login", "Sign in", "secondary")}</div>`);
}

function listItems(items) {
  return `<ul class="feature-list">${items.map((item) => `<li><span class="check">+</span><span>${escapeHtml(item)}</span></li>`).join("")}</ul>`;
}

function compactCard(label, title, body, extra = "") {
  return `
    <article class="compact-card">
      ${label ? `<span class="card-label">${escapeHtml(label)}</span>` : ""}
      <h3>${escapeHtml(title)}</h3>
      <p>${escapeHtml(body)}</p>
      ${extra}
    </article>
  `;
}

function statStrip(items = stats) {
  return `
    <div class="stat-strip">
      ${items.map(([number, label]) => `<div><strong>${escapeHtml(number)}</strong><span>${escapeHtml(label)}</span></div>`).join("")}
    </div>
  `;
}

function processSteps(steps) {
  return `
    <div class="process-grid">
      ${steps.map(([title, body], index) => `
        <article class="process-step">
          <span>${index + 1}</span>
          <h3>${escapeHtml(title)}</h3>
          <p>${escapeHtml(body)}</p>
        </article>
      `).join("")}
    </div>
  `;
}

function heroPulsePanel() {
  return `
    <aside class="hero-terminal" aria-label="Bridge Finance Network status snapshot">
      <div class="terminal-topline">
        <span>Network pulse</span>
        <strong>Live preview</strong>
      </div>
      <div class="terminal-rows">
        ${pulseItems.map(([label, value, status]) => `
          <div class="terminal-row">
            <span>${escapeHtml(label)}</span>
            <strong>${escapeHtml(value)}</strong>
            <em>${escapeHtml(status)}</em>
          </div>
        `).join("")}
      </div>
      <div class="terminal-chart" aria-hidden="true">
        <span style="--height: 42%"></span>
        <span style="--height: 68%"></span>
        <span style="--height: 55%"></span>
        <span style="--height: 84%"></span>
        <span style="--height: 74%"></span>
        <span style="--height: 92%"></span>
      </div>
    </aside>
  `;
}

function signalTape() {
  const content = tapeItems
    .concat(tapeItems)
    .map((item) => `<span>${escapeHtml(item)}</span>`)
    .join("");
  return `
    <section class="signal-tape" aria-label="BFN site highlights">
      <div class="signal-track">${content}</div>
    </section>
  `;
}

function bentoVisual(kind) {
  if (kind === "dashboard") {
    return `
      <div class="mini-dashboard" aria-hidden="true">
        <span></span><span></span><span></span>
        <div></div><div></div><div></div>
      </div>
    `;
  }
  if (kind === "pipeline") {
    return `
      <div class="mini-pipeline" aria-hidden="true">
        <span>Apply</span><span>Review</span><span>Code</span>
      </div>
    `;
  }
  if (kind === "map") {
    return `
      <div class="mini-map" aria-hidden="true">
        <span>MO</span><span>FL</span><span>NJ</span>
      </div>
    `;
  }
  return `
    <div class="mini-stack" aria-hidden="true">
      <span>Guides</span><span>Tools</span><span>Videos</span><span>Programs</span>
    </div>
  `;
}

function bentoCard({ label, title, body, metric, metricLabel, kind, span = "" }) {
  return `
    <article class="bento-card ${span}">
      <div>
        <span class="card-label">${escapeHtml(label)}</span>
        <h3>${escapeHtml(title)}</h3>
        <p>${escapeHtml(body)}</p>
      </div>
      <div class="bento-bottom">
        <div class="bento-metric"><strong>${escapeHtml(metric)}</strong><span>${escapeHtml(metricLabel)}</span></div>
        ${bentoVisual(kind)}
      </div>
    </article>
  `;
}

function arrowIcon(direction) {
  const path =
    direction === "next"
      ? "M9 5l7 7-7 7M15 12H4"
      : "M15 5l-7 7 7 7M9 12h11";
  return `
    <svg aria-hidden="true" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">
      <path d="${path}"></path>
    </svg>
  `;
}

function testimonialSection() {
  return `
    <section class="section testimonial-section">
      <div class="section-inner testimonial-shell" data-testimonials data-autoplay="true">
        <div class="testimonial-media" aria-hidden="true">
          <div class="testimonial-portrait" data-testimonial-portrait>
            <span data-testimonial-initials>${escapeHtml(testimonials[0].initials)}</span>
            <small data-testimonial-accent>${escapeHtml(testimonials[0].accent)}</small>
          </div>
        </div>
        <div class="testimonial-copy">
          <p class="eyebrow">Member perspectives</p>
          <h2>Built around contribution, not passive membership.</h2>
          <p class="lead">Members work across programs, curriculum, finance, resources, web development, operations, marketing, and partnerships.</p>
          <div class="testimonial-slider" aria-live="polite">
            ${testimonials.map((testimonial, index) => `
              <article class="testimonial-slide ${index === 0 ? "active" : ""}" data-testimonial-slide aria-hidden="${index === 0 ? "false" : "true"}">
                <blockquote>${escapeHtml(testimonial.quote)}</blockquote>
                <div class="testimonial-author">
                  <strong>${escapeHtml(testimonial.name)}</strong>
                  <span>${escapeHtml(testimonial.designation)}</span>
                </div>
              </article>
            `).join("")}
          </div>
          <div class="testimonial-actions">
            <button class="testimonial-arrow" type="button" aria-label="Previous testimonial" data-testimonial-prev>${arrowIcon("prev")}</button>
            <div class="testimonial-dots" role="tablist" aria-label="Choose testimonial">
              ${testimonials.map((testimonial, index) => `
                <button class="testimonial-dot ${index === 0 ? "active" : ""}" type="button" role="tab" aria-selected="${index === 0 ? "true" : "false"}" aria-label="Show ${escapeHtml(testimonial.designation)} testimonial" data-testimonial-dot="${index}"></button>
              `).join("")}
            </div>
            <button class="testimonial-arrow" type="button" aria-label="Next testimonial" data-testimonial-next>${arrowIcon("next")}</button>
          </div>
          <div class="inline-actions">
            ${button("/team", "Meet the team", "dark")}
            ${button("/about", "Read the mission", "secondary")}
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderHome() {
  return `
    <section class="hero">
      <div class="hero-inner">
        <div class="hero-copy">
          <p class="eyebrow">Student-led nonprofit finance network</p>
          <h1>Helping students break into finance earlier.</h1>
          <p>Bridge Finance Network gives ambitious students access to finance education, curated opportunities, competitions, leadership roles, and a private member network.</p>
          <div class="actions">
            ${button("/opportunities", "Explore Opportunities", "primary")}
            ${button("/open-roles", "Join BFN", "ghost")}
          </div>
        </div>
        ${heroPulsePanel()}
      </div>
    </section>

    <section class="stats-band">
      <div class="section-inner">
        <div class="hero-metrics">${stats.map(metric).join("")}</div>
      </div>
    </section>

    ${signalTape()}

    <section class="section">
      <div class="section-inner section-header">
        <div>
          <p class="eyebrow">Inside BFN</p>
          <h2>Finance learning, recruiting support, and student leadership in one network.</h2>
        </div>
        <p>Prospective members can learn about the organization and apply publicly. Approved members unlock the portal for opportunity links, finance lessons, competition materials, speaker recordings, resources, and profile tools.</p>
      </div>
      <div class="section-inner grid cols-3">
        ${insideBfnItems.map(([title, body]) => compactCard("Inside BFN", title, body)).join("")}
      </div>
    </section>

    <section class="section soft">
      <div class="section-inner section-header">
        <div>
          <p class="eyebrow">Member benefits</p>
          <h2>What approved members can use.</h2>
        </div>
        <p>BFN keeps public recruiting simple while reserving direct links, deadlines, forms, templates, recordings, and internal programs for approved members.</p>
      </div>
      <div class="section-inner grid cols-4">
        ${opportunityCategories.map(([title, body]) => compactCard("Portal preview", title, body)).join("")}
      </div>
    </section>

    ${testimonialSection()}

    <section class="section dark">
      <div class="section-inner section-header">
        <div>
          <p class="eyebrow">Ready to start?</p>
          <h2>Apply publicly. Register after approval.</h2>
        </div>
        <p>Open roles are visible without a member account. Approved applicants receive a registration code by email for the member portal.</p>
      </div>
      <div class="section-inner actions">${button("/open-roles", "View open roles", "primary")}${button("/login", "Member portal", "ghost")}</div>
    </section>
  `;
}

function renderAbout() {
  return `
    ${pageHero("About", "Student-led finance education for motivated students.", "BFN makes finance more accessible through lessons, competitions, curated opportunities, chapter events, and member-run programs.")}
    <section class="section compact-section">
      <div class="section-inner">
        ${statStrip([["200+", "members"], ["3", "active chapters"], ["9", "advisor seats"], ["Nonprofit", "student-led"]])}
      </div>
    </section>
    <section class="section">
      <div class="section-inner split">
        <div class="text-stack">
          <p class="eyebrow">Mission</p>
          <h2>Give students a practical starting point in finance.</h2>
          <p>Finance can feel closed off until students already know the vocabulary, roles, and recruiting expectations. BFN gives members a structured place to learn the basics, practice research, join competitions, and find student-friendly opportunities.</p>
          <p>The public site explains the network and application path. The private portal organizes opportunity links, finance lessons, speaker recordings, resources, competition materials, and member profile tools.</p>
        </div>
        <article class="founder-card">
          <div class="profile-placeholder" aria-hidden="true"><span>AF</span></div>
          <div>
            <span class="card-label">Co-Founder</span>
            <h3>Andrew Fu</h3>
            <p>Andrew Fu is the Co-Founder of Bridge Finance Network. He helps lead BFN's development across finance education, student programming, member operations, and advisor outreach, with a focus on making finance more accessible to motivated students.</p>
          </div>
        </article>
      </div>
    </section>
    <section class="section soft">
      <div class="section-inner section-header">
        <div>
          <p class="eyebrow">Board of Advisors</p>
          <h2>Nine advisor seats for guidance and outreach.</h2>
        </div>
        <p>Advisor profiles will highlight confirmed mentors, professional context, and support for BFN programming as those details are approved.</p>
      </div>
      <div class="section-inner advisor-grid">
        ${boardAdvisors.map(([name, label, body]) => compactCard(label, name, body)).join("")}
      </div>
    </section>
  `;
}

function renderTeam() {
  const filters = ["All", "Leadership", "Web Development", "General Member"];
  return `
    ${pageHero("Team & Members", "Students building Bridge Finance Network.", "Meet the students building Bridge Finance Network across leadership, web development, operations, resources, and member programs.")}
    <section class="section">
      <div class="section-inner">
        <div class="filters" data-filters>
          ${filters.map((filter, index) => `<button class="filter-button ${index === 0 ? "active" : ""}" type="button" data-filter="${filter}">${filter}</button>`).join("")}
        </div>
        <div class="grid cols-3" data-team-grid>
          ${teamMembers.map(([name, role, team, tier]) => `
            <article class="member-card" data-team="${team}">
              <h3>${escapeHtml(name)}</h3>
              <p>${escapeHtml(role)}</p>
              <div class="member-badges">
                <span class="badge tier-senior">${escapeHtml(tier)}</span>
                <span class="badge team-badge">${escapeHtml(team)}</span>
              </div>
            </article>
          `).join("")}
        </div>
      </div>
    </section>
    <section class="section mint compact-section">
      <div class="section-inner section-header compact-header">
        <div>
          <p class="eyebrow">Member Directory</p>
          <h2>Approved member profiles coming soon.</h2>
        </div>
        <p>BFN's public directory will highlight approved members, leadership roles, team contributions, and chapter involvement.</p>
      </div>
    </section>
  `;
}

function renderOpportunities() {
  return `
    ${pageHero("Opportunities", "Curated finance opportunities for BFN members.", "BFN members get access to curated finance opportunities, competitions, internal programs, and practical resources designed for students building early finance experience.")}
    <section class="section">
      <div class="section-inner notice">
        <strong>Member-only access:</strong>
        <span>The public page shows the opportunity categories. Approved members sign in to view direct links, deadlines, forms, and internal program details.</span>
      </div>
      <div class="section-inner grid cols-4">
        ${opportunityCategories.map(([title, body]) => compactCard("Opportunity track", title, body)).join("")}
      </div>
    </section>
    <section class="section soft">
      <div class="section-inner section-header">
        <div>
          <p class="eyebrow">How access works</p>
          <h2>Apply publicly, then use the member portal after approval.</h2>
        </div>
        <p>BFN keeps applications open on the public site and protects member-only links, deadlines, forms, and internal programs inside the portal.</p>
      </div>
      <div class="section-inner">
        ${processSteps([
          ["Apply", "Apply through an open role or chapter pathway using the public application link."],
          ["Get approved", "BFN reviews fit, interest, team needs, and expected contribution level."],
          ["Receive access", "Approved applicants receive a registration code by email for the private portal."],
          ["Use member links", "Members can browse opportunities, competitions, forms, resources, and internal programs."]
        ])}
        <div class="actions">${button("/open-roles", "View open roles", "dark")}${button("/login", "Sign in to portal", "secondary")}</div>
      </div>
    </section>
  `;
}

function renderChapters() {
  return `
    ${pageHero("Chapters", "School chapters make BFN local.", "Chapters bring BFN programming, finance education, competitions, and member activity into student communities.")}
    <section class="section">
      <div class="section-inner grid cols-3">
        ${chapters.map(([school, city, status]) => compactCard(status, school, city)).join("")}
      </div>
    </section>
    <section class="section soft">
      <div class="section-inner section-header">
        <div>
          <p class="eyebrow">What chapters do</p>
          <h2>Bring BFN programming into local student communities.</h2>
        </div>
        <p>Chapter teams help students learn finance locally while staying connected to BFN's broader member network and portal.</p>
      </div>
      <div class="section-inner grid cols-3">
        ${[
          "Run local finance education sessions",
          "Host or promote competitions",
          "Recruit motivated students",
          "Organize speaker and career events",
          "Build chapter leadership teams",
          "Connect members to the BFN portal"
        ].map((item) => compactCard("Chapter activity", item, "Designed for students who want practical finance exposure at school.")).join("")}
      </div>
    </section>
    <section class="section">
      <div class="section-inner split">
        <div>
          <p class="eyebrow">Start a chapter</p>
          <h2>Interested in launching BFN at your school?</h2>
          <p class="lead">Apply to join BFN first. Approved members receive access to the portal, where they can submit a chapter launch form and review onboarding materials.</p>
          <div class="inline-actions">${button("/open-roles", "Apply to Join", "dark")}${button("/login", "Member Portal", "secondary")}</div>
        </div>
        <div class="card">
          <span class="card-label">Chapter pathway</span>
          <h3>Launch requirements</h3>
          ${listItems(["A motivated student lead", "A plan for local finance sessions", "Interest in recruiting members", "Willingness to coordinate with BFN leadership"])}
        </div>
      </div>
    </section>
  `;
}

function renderPartners() {
  const partners = [
    ["Finance firms", "Guest speakers, case prompts, mentorship, and role pipelines."],
    ["Universities", "Student programming, finance education, and chapter support."],
    ["Student organizations", "Collaborative events, competitions, and resource swaps."],
    ["Nonprofit partners", "Financial literacy initiatives and community outreach."]
  ];
  return `
    ${pageHero("Partners", "BFN works with organizations that expand access.", "The partner page is fully public and designed for firms, schools, and organizations interested in speaking, sponsoring, or collaborating.")}
    <section class="section">
      <div class="section-inner grid cols-4">${partners.map(([name, body]) => card("Partner type", name, body)).join("")}</div>
    </section>
    <section class="section aqua">
      <div class="section-inner section-header">
        <div>
          <p class="eyebrow">Partnership CTA</p>
          <h2>Bring opportunities to motivated students.</h2>
        </div>
        <p>BFN partnership can include events, workshops, competitions, interviews, case materials, resource sharing, or career exposure.</p>
      </div>
      <div class="section-inner actions">${button("/contact", "Contact BFN", "dark")}</div>
    </section>
  `;
}

function renderOpenRoles() {
  const hiringTeams = ["Finance", "Research", "Web Development", "Resources", "Operations", "Marketing", "Partnerships", "Chapter Leadership"];
  return `
    ${pageHero("Join BFN", "Apply to join a student-led finance network.", "BFN is open to motivated students who want to learn finance, contribute to member programs, support chapters, build resources, and take on leadership responsibilities.")}
    <section class="section compact-section">
      <div class="section-inner grid cols-3">
        ${compactCard("Why join", "Finance education", "Learn finance vocabulary, markets, accounting, valuation, investing, and recruiting basics with peers.")}
        ${compactCard("Why join", "Real contribution", "Work on research, resources, chapter events, competitions, web development, operations, or partnerships.")}
        ${compactCard("Why join", "Member access", "Approved members receive portal access for opportunities, internal programs, resources, and speaker recordings.")}
      </div>
    </section>
    <section class="section">
      <div class="section-inner section-header compact-header">
        <div>
          <p class="eyebrow">Current open roles</p>
          <h2>Financial Analyst Interns</h2>
        </div>
        <p>Applicants can apply publicly. Approved applicants receive a registration code by email to create a member portal account.</p>
      </div>
      <div class="section-inner grid">
        ${openRoles.map((role) => `
          <article class="card emphasis">
            <span class="card-label label-blue">${escapeHtml(role.team)}</span>
            <h3>${escapeHtml(role.title)}</h3>
            <p><strong>${escapeHtml(role.commitment)}</strong></p>
            <p>${escapeHtml(role.description)}</p>
            <p>After review and approval, applicants receive a registration code by email to create a member portal account.</p>
            <div class="inline-actions">${button(role.link, "Apply now", "dark", `target="_blank" rel="noreferrer"`)}</div>
          </article>
        `).join("")}
      </div>
    </section>
    <section class="section soft">
      <div class="section-inner section-header">
        <div>
          <p class="eyebrow">Teams hiring</p>
          <h2>BFN has student-run teams across finance and operations.</h2>
        </div>
        <p>Role availability changes over time. Current applicants can show interest in teams that match their skills and goals.</p>
      </div>
      <div class="section-inner tag-grid">
        ${hiringTeams.map((team) => `<span>${escapeHtml(team)}</span>`).join("")}
      </div>
    </section>
    <section class="section">
      <div class="section-inner section-header">
        <div>
          <p class="eyebrow">Application process</p>
          <h2>What happens after applying.</h2>
        </div>
        <p>BFN reviews applications for interest, reliability, role fit, and potential contribution to student programming.</p>
      </div>
      <div class="section-inner">
        ${processSteps([
          ["Submit application", "Use the role link and describe your finance interests, skills, and preferred teams."],
          ["BFN review", "The team reviews applications based on current needs and role fit."],
          ["Approval email", "Approved applicants receive next steps and a portal registration code by email."],
          ["Start contributing", "Members join the portal, review team expectations, and begin work on BFN projects."]
        ])}
        <div class="actions">${button(openRoles[0].link, "Apply Now", "dark", `target="_blank" rel="noreferrer"`)}${button("/login", "View Member Portal", "secondary")}</div>
      </div>
    </section>
  `;
}

function renderBlog() {
  return `
    ${pageHero("Blog & News", "Updates, recaps, spotlights, and announcements.", "Follow BFN updates across member programming, open roles, chapter growth, competitions, and finance education.")}
    <section class="section">
      <div class="section-inner grid cols-3">
        ${posts.map(([title, date, category, excerpt], index) => card(index === 0 ? "Featured" : category, title, `${date}. ${excerpt}`, `<div class="inline-actions">${button("#", "Read more", "secondary")}</div>`)).join("")}
      </div>
    </section>
  `;
}

function renderEvents() {
  return `
    ${pageHero("Events", "Competitions, info sessions, and chapter activity.", "Events are sorted for scanning and can show public or portal-required links.")}
    <section class="section">
      <div class="section-inner grid cols-3">
        ${events.map(([name, date, description, access]) => card(access, name, `${date}. ${description}`)).join("")}
      </div>
    </section>
  `;
}

function renderResources() {
  return `
    ${pageHero("Resource Library", "A serious learning library for student finance members.", "BFN's resource library helps members build practical finance knowledge through guides, templates, tools, video lessons, and structured learning tracks.")}
    <section class="section">
      <div class="section-inner notice">
        <strong>Member-only access:</strong>
        <span>The public site previews the library. Approved members sign in to use full guides, tools, videos, speaker recordings, templates, and internal links.</span>
      </div>
      <div class="section-inner grid cols-4">${resources.map(([title, body]) => compactCard("Resource type", title, body)).join("")}</div>
    </section>
    <section class="section soft">
      <div class="section-inner section-header">
        <div>
          <p class="eyebrow">Built for students</p>
          <h2>Practical material for learning, applying, and competing.</h2>
        </div>
        <p>Resources are organized around the work students actually need to do: learn terms, prepare for roles, practice technical concepts, and present ideas clearly.</p>
      </div>
      <div class="section-inner grid cols-3">
        ${[
          "Learn finance vocabulary",
          "Prepare for competitions",
          "Track opportunities",
          "Build stronger applications",
          "Practice technical concepts",
          "Use finance templates"
        ].map((item) => compactCard("Student use case", item, "Designed to support early finance learning and member projects.")).join("")}
      </div>
      <div class="section-inner actions">${button("/open-roles", "Join BFN", "dark")}${button("/login", "Sign in to portal", "secondary")}</div>
    </section>
  `;
}

function renderPortfolio() {
  return `
    ${pageHero("BFN Portfolio", "Student research and project work coming soon.", "BFN's portfolio will highlight student research, chapter work, finance projects, web development, and internal initiatives as they are approved for publication.")}
    <section class="section">
      <div class="section-inner">
        <div class="grid cols-3">
          ${compactCard("Research", "Research portfolio coming soon.", "Member research, stock pitch writeups, market notes, and finance analysis will be published here after approval.")}
          ${compactCard("Projects", "Member projects will be published here.", "BFN will use this page to highlight web development work, finance tools, templates, and student-led initiatives.")}
          ${compactCard("Chapters", "Chapter work will be featured here.", "Chapter events, local finance sessions, competition recaps, and leadership projects will appear as the network grows.")}
        </div>
      </div>
    </section>
    <section class="section soft">
      <div class="section-inner section-header compact-header">
        <div>
          <p class="eyebrow">What to expect</p>
          <h2>Approved work, not unfinished drafts.</h2>
        </div>
        <p>BFN will publish student work only after it is reviewed for clarity, quality, and fit with the public site.</p>
      </div>
    </section>
  `;
}

function renderFaq() {
  return `
    ${pageHero("FAQ", "Common questions for prospective members.", "Answers cover joining, eligibility, time commitment, tiers, chapters, and contacts.")}
    <section class="section">
      <div class="section-inner">
        ${faqs.map(([question, answer]) => `<details><summary>${escapeHtml(question)}</summary><p>${escapeHtml(answer)}</p></details>`).join("")}
      </div>
    </section>
  `;
}

function renderContact() {
  return `
    ${pageHero("Contact", "Reach Bridge Finance Network.", "Use the contact form for general questions, partnerships, advisor outreach, chapters, press, or member support.")}
    <section class="section">
      <div class="section-inner split">
        <div class="text-stack">
          <p class="eyebrow">Primary email</p>
          <h2>Direct contact</h2>
          <p><a href="mailto:bridgefinancenetwork@gmail.com">bridgefinancenetwork@gmail.com</a></p>
          <div class="grid compact-list">
            ${compactCard("General", "Questions about BFN", "Ask about membership, open roles, the portal, resources, or competitions.")}
            ${compactCard("Partnerships", "Firms, advisors, and schools", "Reach out about speakers, mentorship, competitions, resources, sponsorships, or school partnerships.")}
            ${compactCard("Chapters", "Start BFN at your school", "Students interested in launching a chapter can ask about the application and onboarding path.")}
          </div>
        </div>
        <form class="card form" data-form>
          <label>Name<input name="name" autocomplete="name" required></label>
          <label>Email<input type="email" name="email" autocomplete="email" required></label>
          <label>Subject<select name="subject"><option>General Inquiry</option><option>Partnerships / Advisors</option><option>Chapter Inquiry</option><option>Member Support</option></select></label>
          <label>Message<textarea name="message" required></textarea></label>
          <button class="button dark" type="submit">Submit inquiry</button>
          <div class="form-status" role="status"></div>
        </form>
      </div>
    </section>
  `;
}

function renderAuth(kind) {
  const isRegister = kind === "register";
  const isReset = kind === "reset";
  const title = isRegister ? "Create your member account" : isReset ? "Reset your password" : "Member portal login";
  const lead = isRegister
    ? "Registration requires an approved single-use code."
    : isReset
      ? "Enter the email connected to your BFN portal account."
      : "Sign in to access opportunities, curriculum, competitions, resources, speakers, and profile tools.";
  return `
    ${pageHero("Member Portal", title, lead)}
    <section class="section">
      <div class="section-inner split">
        <form class="card form" data-form>
          ${isRegister ? `<label>Full name<input name="name" autocomplete="name" required></label><label>Username<input name="username" autocomplete="username" required></label>` : ""}
          <label>Email${!isReset ? " or username" : ""}<input name="email" autocomplete="email" required></label>
          ${!isReset ? `<label>Password<input type="password" name="password" autocomplete="${isRegister ? "new-password" : "current-password"}" required></label>` : ""}
          ${isRegister ? `<label>Confirm password<input type="password" name="confirm" autocomplete="new-password" required></label><label>Registration code<input name="code" required></label>` : ""}
          <button class="button dark" type="submit">${isRegister ? "Register" : isReset ? "Send reset link" : "Sign in"}</button>
          <div class="form-status" role="status"></div>
          <p>${isRegister ? `Already approved? <a href="/login">Sign in</a>` : `Need an account? <a href="/register">Register with code</a> | <a href="/reset">Forgot password?</a>`}</p>
        </form>
        <div class="card">
          <span class="card-label label-gold">Invite-only</span>
          <h3>Registration code rules</h3>
          <ul class="feature-list">
            <li><span class="check">+</span><span>Codes are issued after approval.</span></li>
            <li><span class="check">+</span><span>Codes are single-use and expire after seven days.</span></li>
            <li><span class="check">+</span><span>Portal routes require an active member session.</span></li>
          </ul>
        </div>
      </div>
    </section>
  `;
}

function portalContent(path) {
  const titleMap = {
    "/portal/dashboard": ["Dashboard", "Welcome back. Review tier status, announcements, and quick links."],
    "/portal/opportunities": ["Opportunities Hub", "Filter internships, competitions, programs, and resources."],
    "/portal/curriculum": ["Curriculum Hub", "Lessons by topic and difficulty with clean lesson URLs."],
    "/portal/competitions": ["Case Studies & Competitions", "Active competitions, submission flow, and past results."],
    "/portal/resources": ["Resource Library", "Unlocked BFN-created guides, tools, videos, and programs."],
    "/portal/speakers": ["Guest Speakers", "Recorded sessions organized by topic, industry, or speaker."],
    "/portal/profile": ["Profile", "Member info, current tier, and promotion history."]
  };
  const [title, lead] = titleMap[path] || titleMap["/portal/dashboard"];
  return `
    ${pageHero("Portal Preview", title, lead)}
    <section class="section">
      <div class="section-inner portal-shell">
        <nav class="portal-nav">
          ${portalLinks.map(([href, label]) => `<a class="${path === href ? "active" : ""}" href="${href}">${label}</a>`).join("")}
        </nav>
        <div class="grid cols-2">
          ${card("Member-only", title, lead)}
          ${card("Opportunities", "Curated member links", "Approved members can use the portal for opportunity links, application notes, deadlines, and internal programs.")}
          ${card("Resources", "Learning materials", "Members can find BFN guides, tools, video resources, speaker recordings, and structured learning tracks.")}
          ${card("Profile", "Tier and role information", "The portal is designed to keep each member's team, tier, and contribution history organized.")}
        </div>
      </div>
    </section>
  `;
}

function renderManageTiers() {
  return `
    ${pageHero("Restricted", "Manage Tiers", "This member operations page is reserved for authorized BFN leadership.")}
    <section class="section">
      <div class="section-inner">
        <div class="card emphasis">
          <span class="card-label label-berry">HR + MD only</span>
          <h3>Tier update workflow</h3>
          <p>Search member by name or username, review current tier, select Intern, Analyst, Associate, or Senior Associate, then save a tier history entry.</p>
          <div class="inline-actions">${button("/login", "Sign in", "dark")}</div>
        </div>
      </div>
    </section>
  `;
}

const routes = {
  "/": renderHome,
  "/about": renderAbout,
  "/team": renderTeam,
  "/opportunities": renderOpportunities,
  "/chapters": renderChapters,
  "/partners": renderPartners,
  "/open-roles": renderOpenRoles,
  "/blog": renderBlog,
  "/events": renderEvents,
  "/resources": renderResources,
  "/portfolio": renderPortfolio,
  "/faq": renderFaq,
  "/contact": renderContact,
  "/login": () => renderAuth("login"),
  "/register": () => renderAuth("register"),
  "/reset": () => renderAuth("reset"),
  "/manage-tiers": renderManageTiers
};

function normalizedPath() {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  return routes[path] || path.startsWith("/portal") ? path : "/";
}

function updateMeta(path) {
  const [title, description] = meta[path] || meta["/"];
  document.title = title;
  const descriptionTag = document.querySelector('meta[name="description"]');
  if (descriptionTag) descriptionTag.setAttribute("content", description);
}

function setActiveNav(path) {
  document.querySelectorAll("[data-nav] a").forEach((link) => {
    const href = link.getAttribute("href");
    const isActive = href === path || (href !== "/" && path.startsWith(href));
    link.classList.toggle("active", isActive);
  });
}

function wireForms() {
  document.querySelectorAll("[data-form]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const status = form.querySelector(".form-status");
      if (status) status.textContent = "Received. BFN will review your inquiry and follow up by email.";
      form.reset();
    });
  });
}

function wireFilters() {
  const filterRoot = document.querySelector("[data-filters]");
  const grid = document.querySelector("[data-team-grid]");
  if (!filterRoot || !grid) return;
  filterRoot.addEventListener("click", (event) => {
    const buttonEl = event.target.closest("[data-filter]");
    if (!buttonEl) return;
    const filter = buttonEl.dataset.filter;
    filterRoot.querySelectorAll(".filter-button").forEach((btn) => btn.classList.toggle("active", btn === buttonEl));
    grid.querySelectorAll("[data-team]").forEach((cardEl) => {
      cardEl.hidden = filter !== "All" && cardEl.dataset.team !== filter;
    });
  });
}

function wireTestimonials() {
  if (testimonialTimer) {
    window.clearInterval(testimonialTimer);
    testimonialTimer = null;
  }

  const root = document.querySelector("[data-testimonials]");
  if (!root) return;

  const slides = Array.from(root.querySelectorAll("[data-testimonial-slide]"));
  const dots = Array.from(root.querySelectorAll("[data-testimonial-dot]"));
  const portrait = root.querySelector("[data-testimonial-portrait]");
  const initials = root.querySelector("[data-testimonial-initials]");
  const accent = root.querySelector("[data-testimonial-accent]");
  const previous = root.querySelector("[data-testimonial-prev]");
  const next = root.querySelector("[data-testimonial-next]");
  let activeIndex = 0;

  const setActive = (index) => {
    activeIndex = (index + slides.length) % slides.length;
    slides.forEach((slide, slideIndex) => {
      const isActive = slideIndex === activeIndex;
      slide.classList.toggle("active", isActive);
      slide.setAttribute("aria-hidden", String(!isActive));
    });
    dots.forEach((dot, dotIndex) => {
      const isActive = dotIndex === activeIndex;
      dot.classList.toggle("active", isActive);
      dot.setAttribute("aria-selected", String(isActive));
    });
    if (initials) initials.textContent = testimonials[activeIndex].initials;
    if (accent) accent.textContent = testimonials[activeIndex].accent;
    if (portrait) portrait.dataset.state = String(activeIndex % 3);
  };

  const showPrevious = () => setActive(activeIndex - 1);
  const showNext = () => setActive(activeIndex + 1);

  previous?.addEventListener("click", showPrevious);
  next?.addEventListener("click", showNext);
  dots.forEach((dot) => {
    dot.addEventListener("click", () => setActive(Number(dot.dataset.testimonialDot || 0)));
  });

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (root.dataset.autoplay === "true" && !reducedMotion && slides.length > 1) {
    const start = () => {
      if (!testimonialTimer) testimonialTimer = window.setInterval(showNext, 5000);
    };
    const stop = () => {
      if (testimonialTimer) window.clearInterval(testimonialTimer);
      testimonialTimer = null;
    };
    root.addEventListener("mouseenter", stop);
    root.addEventListener("mouseleave", start);
    root.addEventListener("focusin", stop);
    root.addEventListener("focusout", start);
    start();
  }
}

function render() {
  const path = normalizedPath();
  const isKnown = routes[path] || path.startsWith("/portal");
  const html = path.startsWith("/portal") ? portalContent(path) : (routes[path] || routes["/"])();
  $app.innerHTML = isKnown ? html : routes["/"]();
  updateMeta(path);
  setActiveNav(path);
  wireForms();
  wireFilters();
  wireTestimonials();
  $app.focus({ preventScroll: true });
  document.body.classList.remove("menu-open");
  $toggle?.setAttribute("aria-expanded", "false");
}

document.addEventListener("click", (event) => {
  const link = event.target.closest("a[href]");
  if (!link) return;
  const url = new URL(link.href);
  if (url.origin !== window.location.origin || link.target) return;
  event.preventDefault();
  window.history.pushState({}, "", url.pathname);
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

$toggle?.addEventListener("click", () => {
  const open = !document.body.classList.contains("menu-open");
  document.body.classList.toggle("menu-open", open);
  $toggle.setAttribute("aria-expanded", String(open));
});

window.addEventListener("popstate", render);
document.querySelector("[data-year]").textContent = new Date().getFullYear();
render();
