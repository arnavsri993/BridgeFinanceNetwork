const stats = [
  ["200+", "members across the network"],
  ["3", "active chapter markets"],
  ["4", "opportunity tracks"]
];

const opportunityCategories = [
  ["Internships", "Curated early finance, business, and research roles."],
  ["Competitions", "Case studies, trading challenges, and pitch formats."],
  ["Programs", "Member-run tracks for research, strategy, and leadership."],
  ["Resources", "Reading lists, lessons, speakers, and practical tools."]
];

const teamMembers = [
  ["Andrew Fu", "Co-Founder", "Leadership", "Co-Founder"],
  ["Sai Aathish Karthik", "VP", "Web Development", "Senior Associate"],
  ["Sashitej Palla", "VP", "Web Development", "Senior Associate"],
  ["Ackshat Tiwari", "Core Dev", "Web Development", "Senior Associate"],
  ["Kev Wong", "Frontend & UI", "Web Development", "Senior Associate"],
  ["Niranjana Suresh Preethy", "Frontend & UI", "Web Development", "Senior Associate"],
  ["Arnav Srivastava", "Regular Member", "General Member", "Member"]
];

const boardAdvisors = Array.from({ length: 9 }, (_, index) => [
  `Advisor ${index + 1}`,
  "Board of Advisors",
  "Add confirmed advisor name, title, company, photo, and LinkedIn link."
]);

const chapters = [
  ["Marquette High School", "Chesterfield, MO", "Founding chapter market"],
  ["Middleton High School", "Tampa, FL", "Founding chapter market"],
  ["Bridgewater-Raritan High School", "Bridgewater, NJ", "Founding chapter market"]
];

const openRoles = [
  {
    title: "Founding Web Developer Intern",
    team: "Web Development",
    commitment: "Part-time, student-led build cycle",
    description:
      "Help turn the public site, member portal, resources, and authenticated workflows into a reliable production experience.",
    link: "https://forms.gle/u12GhM5b8QyzqzgJ7"
  }
];

const posts = [
  ["Week 2 build plan", "June 2026", "Update", "The web team is stabilizing the foundation for public pages, portal routing, Supabase auth, and handoff-ready Figma work."],
  ["Member portal scope", "June 2026", "Announcement", "BFN's portal will centralize opportunities, curriculum, case competitions, resources, guest speakers, and member tier status."],
  ["Design system kickoff", "May 2026", "Spotlight", "The UI team started the shared visual language for buttons, cards, badges, locked states, and navigation."]
];

const events = [
  ["Week 2 Web Development Check-In", "June 2026", "Team check-in for demos, blockers, repo decisions, and Week 3 build ownership.", "Portal required"],
  ["BFN Info Session", "Coming soon", "Public session for prospective members covering eligibility, teams, tiers, and the application process.", "Public"],
  ["Case Competition Launch", "Coming soon", "Member competition format with submission guidance and judging criteria.", "Portal required"]
];

const resources = [
  ["Tools", "Finance calculators, templates, and market research utilities."],
  ["Reading Lists", "Books, reports, primers, and articles organized by level."],
  ["YouTube Channels", "Curated video explainers for valuation, markets, and accounting."],
  ["Programs", "Internal tracks and learning sequences for members."],
  ["Podcasts", "Audio resources for markets, investing, and career paths."]
];

const faqs = [
  ["What is BFN?", "Bridge Finance Network is a student-led nonprofit community for finance education, competitions, opportunities, and career preparation."],
  ["Do I need finance experience?", "No. BFN is built for motivated students at different starting points, from first exposure to advanced research and modeling."],
  ["How do I apply?", "Use the public Open Roles page. Application links are visible without a member account."],
  ["What happens after I apply?", "Approved applicants receive a registration code by email so they can create a member portal account."],
  ["What is the time commitment?", "Commitment depends on your team and tier. Members should expect recurring updates, projects, and check-ins."],
  ["What are the tiers?", "BFN uses Intern, Analyst, Associate, and Senior Associate tiers to reflect contribution level and advancement."],
  ["Is BFN open to all grade levels?", "The network is student-focused and evaluates applicants by interest, commitment, and role fit."],
  ["How do chapters work?", "School chapters bring BFN programming, events, and community to local student groups."],
  ["Who do I contact with questions?", "Email bridgefinancenetwork@gmail.com for general questions or afu8881@bths.edu for internal follow-up."]
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
  "/": ["Bridge Finance Network", "A student-led nonprofit network for finance education and opportunity access."],
  "/about": ["About | Bridge Finance Network", "Mission, story, founder section, and advisor structure for BFN."],
  "/team": ["Team & Members | Bridge Finance Network", "BFN team structure and public member directory surface."],
  "/opportunities": ["Opportunities | Bridge Finance Network", "Preview BFN opportunity categories before signing into the member portal."],
  "/chapters": ["Chapters | Bridge Finance Network", "Active chapter markets and the path to start a school chapter."],
  "/partners": ["Partners | Bridge Finance Network", "Partnership model for firms and organizations working with BFN."],
  "/open-roles": ["Open Roles | Bridge Finance Network", "Apply to join BFN through publicly visible role listings."],
  "/blog": ["Blog & News | Bridge Finance Network", "BFN updates, recaps, announcements, and member spotlights."],
  "/events": ["Events | Bridge Finance Network", "Upcoming BFN competitions, sessions, and chapter events."],
  "/resources": ["Resource Library | Bridge Finance Network", "Preview BFN resource categories before signing in."],
  "/portfolio": ["BFN Portfolio | Bridge Finance Network", "Public paper trading portfolio surface for approved equity positions."],
  "/faq": ["FAQ | Bridge Finance Network", "Common questions about joining BFN, tiers, chapters, and membership."],
  "/contact": ["Contact | Bridge Finance Network", "Contact BFN for general, partnership, press, and chapter inquiries."],
  "/login": ["Member Portal Login | Bridge Finance Network", "Sign into the BFN member portal."],
  "/register": ["Register | Bridge Finance Network", "Create a BFN member portal account with an approved registration code."],
  "/reset": ["Password Reset | Bridge Finance Network", "Request a BFN member portal password reset."],
  "/portal/dashboard": ["Dashboard | Bridge Finance Network", "Review member tier status, announcements, and quick links."],
  "/portal/opportunities": ["Portal Opportunities | Bridge Finance Network", "Filter unlocked opportunities by category."],
  "/portal/curriculum": ["Curriculum Hub | Bridge Finance Network", "Finance lessons organized by topic and difficulty."],
  "/portal/competitions": ["Competitions | Bridge Finance Network", "Active case studies, competitions, and submissions."],
  "/portal/resources": ["Portal Resources | Bridge Finance Network", "Unlocked tools, reading lists, videos, programs, and podcasts."],
  "/portal/speakers": ["Guest Speakers | Bridge Finance Network", "Portal-exclusive guest speaker recordings."],
  "/portal/profile": ["Profile | Bridge Finance Network", "Member profile, tier status, and promotion history."],
  "/manage-tiers": ["Manage Tiers | Bridge Finance Network", "Restricted HR and MD tier management surface."]
};

const $app = document.querySelector("#app");
const $nav = document.querySelector("[data-nav]");
const $toggle = document.querySelector("[data-menu-toggle]");

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

function renderHome() {
  return `
    <section class="hero">
      <div class="hero-inner">
        <div class="hero-copy">
          <p class="eyebrow">Finance education, access, and ambition</p>
          <h1>Bridge Finance Network</h1>
          <p>BFN connects driven students with finance curriculum, competitive experiences, professional resources, and a member community built for real career momentum.</p>
          <div class="actions">
            ${button("/opportunities", "Explore Opportunities", "primary")}
            ${button("/open-roles", "Join BFN", "ghost")}
          </div>
        </div>
      </div>
    </section>

    <section class="stats-band">
      <div class="section-inner">
        <div class="hero-metrics">${stats.map(metric).join("")}</div>
      </div>
    </section>

    <section class="section">
      <div class="section-inner section-header">
        <div>
          <p class="eyebrow">What BFN does</p>
          <h2>A finance network for students who want a real path in.</h2>
        </div>
        <p>BFN combines public credibility with a private member portal. Prospective members can learn the mission and apply publicly; approved members unlock opportunities, curriculum, resources, speakers, and profile/tier tools.</p>
      </div>
      <div class="section-inner grid cols-3">
        ${card("Learn", "Curriculum and resources", "Lessons, reading lists, tools, videos, and speaker recordings give members a practical base for finance work.")}
        ${card("Compete", "Case studies and events", "Competitions, info sessions, and chapter meetups help students practice judgment and communicate finance ideas clearly.")}
        ${card("Advance", "Tiers and leadership", "Member tiers and team roles create a visible path from intern-level contribution to senior associate responsibility.")}
      </div>
    </section>

    <section class="section soft">
      <div class="section-inner section-header">
        <div>
          <p class="eyebrow">Opportunity hub preview</p>
          <h2>Public preview, member access.</h2>
        </div>
        <p>The public site shows the categories. The portal protects the actual links, applications, resources, and recordings for approved members.</p>
      </div>
      <div class="section-inner grid cols-4">
        ${opportunityCategories.map(lockedCard).join("")}
      </div>
    </section>

    <section class="section">
      <div class="section-inner split">
        <div>
          <p class="eyebrow">Social proof</p>
          <h2>Built around contribution, not passive membership.</h2>
          <p class="lead">Members work across programs, curriculum, finance, resources, web development, operations, marketing, and partnerships. The site is structured so every team can publish updates without confusing the public and portal layers.</p>
          <div class="inline-actions">
            ${button("/team", "Meet the team", "dark")}
            ${button("/about", "Read the mission", "secondary")}
          </div>
        </div>
        <div class="grid">
          ${card("Member voice", "A network with direction", "BFN gives students a clear place to turn ambition into work: research, competitions, resources, and peer accountability.")}
          ${card("Member voice", "Access that compounds", "The best part is the mix of curated opportunities and people who are serious about improving together.")}
        </div>
      </div>
    </section>

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
    ${pageHero("About", "Student-led finance education with a member engine behind it.", "BFN exists to make high-quality finance learning, competitions, and career preparation more accessible for motivated students.")}
    <section class="section">
      <div class="section-inner split">
        <div class="text-stack">
          <p class="eyebrow">Mission</p>
          <h2>Build the bridge between curiosity and credible experience.</h2>
          <p>Finance can feel closed off until students already know the vocabulary, the roles, and the people. BFN gives members a structured place to learn, compete, contribute, and grow with peers who are moving in the same direction.</p>
          <p>The public site introduces the network and recruiting path. The member portal becomes the operating system: opportunities, curriculum, resources, guest speakers, competitions, profile history, and tier advancement.</p>
        </div>
        ${card("Founder", "Andrew Fu", "Co-Founder of Bridge Finance Network. Andrew is shown in the founder section, separate from the Board of Advisors.", `<ul class="feature-list"><li><span class="check">+</span><span>Founder section ready for final photo and full bio.</span></li><li><span class="check">+</span><span>Advisor grid now reflects nine board advisor positions.</span></li></ul>`)}
      </div>
    </section>
    <section class="section soft">
      <div class="section-inner section-header">
        <div>
          <p class="eyebrow">Board of Advisors</p>
          <h2>Nine advisor seats for organizational guidance.</h2>
        </div>
        <p>The board surface is intentionally clean: name, role, company or school context, and a LinkedIn-ready slot once final profile links are approved.</p>
      </div>
      <div class="section-inner grid cols-3">
        ${boardAdvisors.map(([name, label, body]) => card(label, name, body)).join("")}
      </div>
    </section>
  `;
}

function renderTeam() {
  const filters = ["All", "Leadership", "Web Development", "General Member"];
  return `
    ${pageHero("Team & Members", "A public team surface without exposing private contact data.", "BFN's member page is designed for HR-managed updates, tier badges, team filters, and an Airtable embed once the final public directory URL is approved.")}
    <section class="section">
      <div class="section-inner">
        <div class="filters" data-filters>
          ${filters.map((filter, index) => `<button class="filter-button ${index === 0 ? "active" : ""}" type="button" data-filter="${filter}">${filter}</button>`).join("")}
        </div>
        <div class="grid cols-3" data-team-grid>
          ${teamMembers.map(([name, role, team, tier]) => `
            <article class="card" data-team="${team}">
              <span class="badge tier-senior">${tier}</span>
              <h3>${escapeHtml(name)}</h3>
              <p><strong>${escapeHtml(role)}</strong><br>${escapeHtml(team)}</p>
            </article>
          `).join("")}
        </div>
      </div>
    </section>
    <section class="section mint">
      <div class="section-inner split">
        <div>
          <p class="eyebrow">Directory source</p>
          <h2>Airtable-ready member directory.</h2>
          <p class="lead">The production member directory should use HR's approved Airtable embed so updates do not require code changes.</p>
        </div>
        <div class="card">
          <span class="card-label">Embed slot</span>
          <h3>Public Airtable table</h3>
          <p>Add the approved Airtable iframe URL through the AIRTABLE_EMBED_URL environment key when the final public view is ready.</p>
        </div>
      </div>
    </section>
  `;
}

function renderOpportunities() {
  return `
    ${pageHero("Opportunities", "A clear preview of what members unlock.", "Public visitors see the structure. Approved members sign in for direct links, deadlines, forms, and internal programs.")}
    <section class="section">
      <div class="section-inner grid cols-4">${opportunityCategories.map(lockedCard).join("")}</div>
    </section>
  `;
}

function renderChapters() {
  return `
    ${pageHero("Chapters", "School chapters make BFN local.", "Chapters bring BFN programming, finance education, competitions, and member activity into student communities.")}
    <section class="section">
      <div class="section-inner grid cols-3">
        ${chapters.map(([school, city, status]) => card("Active chapter market", school, `${city}. ${status}.`)).join("")}
      </div>
    </section>
    <section class="section soft">
      <div class="section-inner split">
        <div>
          <p class="eyebrow">Start a chapter</p>
          <h2>Chapter applications route through the member portal.</h2>
          <p class="lead">Students interested in starting a chapter should apply first, then unlock the chapter form after member registration.</p>
        </div>
        <div class="card locked">
          <h3>Chapter form</h3>
          <p>Registration required to access the full chapter launch form and internal onboarding materials.</p>
          <div class="inline-actions">${button("/login", "Sign in", "dark")}</div>
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
  return `
    ${pageHero("Open Roles", "Apply first. Register after approval.", "Role listings are public. Applicants do not need a registration code to apply; approved applicants receive one by email.")}
    <section class="section">
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
  `;
}

function renderBlog() {
  return `
    ${pageHero("Blog & News", "Updates, recaps, spotlights, and announcements.", "The v1 content model is intentionally simple: hard-coded post entries that the web team can update without a CMS.")}
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
    ${pageHero("Resource Library Preview", "See the categories before signing in.", "Members unlock the full resource library inside the portal. The public page shows what BFN offers without exposing private links.")}
    <section class="section">
      <div class="section-inner grid cols-3">${resources.map(lockedCard).join("")}</div>
    </section>
  `;
}

function renderPortfolio() {
  return `
    ${pageHero("BFN Portfolio", "A public paper trading surface for approved positions.", "The master sheet notes that portfolio updates are not necessary yet, so this page is ready without fabricating active holdings.")}
    <section class="section">
      <div class="section-inner">
        <div class="grid cols-3">
          ${card("Summary", "Total value", "Pending first approved position set.")}
          ${card("Summary", "Total gain/loss", "Pending first approved position set.")}
          ${card("Summary", "Active positions", "0 published positions.")}
        </div>
        <div class="table-wrap" style="margin-top: 22px;">
          <table>
            <thead>
              <tr><th>Ticker</th><th>Company</th><th>Entry</th><th>Current</th><th>Gain/Loss</th><th>Thesis</th></tr>
            </thead>
            <tbody>
              <tr><td colspan="6"><div class="empty-state">No approved equity positions have been published yet.</div></td></tr>
            </tbody>
          </table>
        </div>
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
    ${pageHero("Contact", "Reach the right BFN team.", "Use the form for general, partnership, press, or chapter inquiries. Email links remain visible for direct contact.")}
    <section class="section">
      <div class="section-inner split">
        <div class="text-stack">
          <p class="eyebrow">Emails</p>
          <h2>Direct contact</h2>
          <p><a href="mailto:bridgefinancenetwork@gmail.com">bridgefinancenetwork@gmail.com</a></p>
          <p><a href="mailto:afu8881@bths.edu">afu8881@bths.edu</a></p>
        </div>
        <form class="card form" data-form>
          <label>Name<input name="name" autocomplete="name" required></label>
          <label>Email<input type="email" name="email" autocomplete="email" required></label>
          <label>Subject<select name="subject"><option>General</option><option>Partnership</option><option>Press</option><option>Chapter Inquiry</option></select></label>
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
    "/portal/resources": ["Resource Library", "Unlocked tools, reading lists, videos, programs, and podcasts."],
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
          ${card("Data source", "Hard-coded v1 content", "The master sheet calls for TypeScript-style data files in v1, with Supabase reserved for auth, profiles, registration codes, and tier history.")}
          ${card("Access", "Protected route", "Unauthenticated users should redirect to login once Supabase auth is wired.")}
          ${card("Next integration", "Supabase session", "Connect profile, tier, and role checks through server-side auth before using this for real members.")}
        </div>
      </div>
    </section>
  `;
}

function renderManageTiers() {
  return `
    ${pageHero("Restricted", "Manage Tiers", "This hidden page is reserved for HR and MD access after portal authentication is connected.")}
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
      if (status) status.textContent = "Received. The production endpoint can be connected through FORM_ENDPOINT.";
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

function render() {
  const path = normalizedPath();
  const isKnown = routes[path] || path.startsWith("/portal");
  const html = path.startsWith("/portal") ? portalContent(path) : (routes[path] || routes["/"])();
  $app.innerHTML = isKnown ? html : routes["/"]();
  updateMeta(path);
  setActiveNav(path);
  wireForms();
  wireFilters();
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
