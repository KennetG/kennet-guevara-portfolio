import logoBlackUrl from './assets/logo/kg-logo-black-256.png';
import logoWhiteUrl from './assets/logo/kg-logo-white-256.png';
import heroLogoBlackUrl from './assets/logo/kg-logo-black-1024.png';
import heroLogoWhiteUrl from './assets/logo/kg-logo-white-1024.png';

const roles = [
  { dates: 'Apr 2026 — Present', title: 'CIAM Solutions Architect', company: 'Equifax', text: 'Guiding client-facing identity product migrations, delivering identity providers, and improving API workflows through automation.', tools: 'Okta · Ping Identity · Python · APIs · AI-assisted scripting' },
  { dates: 'Jan 2023 — Apr 2026', title: 'Identity & Access Management Engineer', company: 'L.L.Bean', text: 'Administered hybrid identity, SSO, privileged access, and identity governance while strengthening Zero Trust controls.', tools: 'Active Directory · Entra ID · SAML/OIDC · Delinea · Saviynt · BeyondTrust · ServiceNow · PowerShell · CrowdStrike Identity Protection · Confluence · Jira' },
  { dates: 'Dec 2021 — Jan 2023', title: 'Identity Security Specialist', company: 'Oxford Computer Group', text: 'Supported tenant migrations, cloud security, identity administration, and threat response across client environments.', tools: 'Microsoft 365 · Microsoft Sentinel · Azure · Active Directory · Azure AD · Azure AD Connect · ServiceNow' },
  { dates: 'Apr 2021 — Aug 2021', title: 'Web Developer', company: 'Mueblería Pérez Luna', text: 'Built a cloud-backed furniture showroom and connected its media workflow to a hosted image service.', tools: 'JavaScript · Bootstrap · MongoDB Atlas · Express.js · Node.js · Cloudinary API' },
  { dates: 'Jul 2018 — Jan 2020', title: 'Machine Learning Data Associate', company: 'Amazon Costa Rica', text: 'Worked with audio data in annotation and quality assurance, then coached teammates toward stronger quality and delivery.', tools: 'Audio annotation · Transcription · Data entry · Quality assurance', toolsLabel: 'Focus' }
];

const credentials = [
  ['Degree', 'Computer Systems Engineering', 'Universidad Tecnológica Costarricense · 2017–2021'],
  ['Specialization', 'Cybersecurity', 'Universidad Fidélitas · 2025'],
  ['Executive education', 'Digital Leadership: Innovation & Digital Transformation 4.0', 'INCAE Business School · 2025'],
  ['Course', 'Crash Course on Python', 'Google / Coursera · 2026'],
  ['Microsoft', 'Security, Compliance, and Identity Fundamentals', 'SC-900'],
  ['Microsoft', 'Security Operations Analyst Associate', 'SC-200'],
  ['Microsoft', 'Identity and Access Administrator Associate', 'SC-300']
];

const sectionRail = (number, label, note = '') => `<aside class="section-rail" aria-hidden="true"><strong>${number}</strong><span>${label}</span><i></i>${note ? `<small>${note}</small>` : ''}</aside>`;

document.querySelector('#app').innerHTML = `
  <header class="site-header">
    <a class="brand" href="#top" aria-label="Kennet Guevara, home"><img class="brand-logo logo-light" src="${logoBlackUrl}" width="32" height="32" alt="" /><img class="brand-logo logo-dark" src="${logoWhiteUrl}" width="32" height="32" alt="" /><span>Kennet Guevara</span></a>
    <span class="header-location" aria-label="Located in Costa Rica">Costa Rica</span>
    <nav aria-label="Primary navigation">
      <a href="#experience">Experience</a><a href="#development">Development</a><a href="#credentials">Credentials</a><a href="#contact">Contact</a>
    </nav>
    <div class="theme-picker" role="group" aria-label="Color theme">
      <button class="theme-button" type="button" data-theme-option="system" aria-label="Use system theme" aria-pressed="false"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="4.5" width="17" height="12" rx="1.5"></rect><path d="M8 20h8M12 16.5V20"></path></svg></button>
      <button class="theme-button" type="button" data-theme-option="light" aria-label="Use light theme" aria-pressed="false"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="3.5"></circle><path d="M12 2.5V5M12 19v2.5M2.5 12H5M19 12h2.5M5.3 5.3l1.8 1.8M16.9 16.9l1.8 1.8M18.7 5.3l-1.8 1.8M7.1 16.9l-1.8 1.8"></path></svg></button>
      <button class="theme-button" type="button" data-theme-option="dark" aria-label="Use dark theme" aria-pressed="false"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 15.1A8.5 8.5 0 0 1 8.9 4a8.5 8.5 0 1 0 11.1 11.1Z"></path></svg></button>
    </div>
    <button class="menu" type="button" aria-expanded="false" aria-controls="mobile-nav"><span></span><span></span><span class="sr-only">Open menu</span></button>
  </header>
  <div class="mobile-nav" id="mobile-nav" hidden><a href="#experience">Experience</a><a href="#development">Development</a><a href="#credentials">Credentials</a><a href="#contact">Contact</a></div>
  <main id="main">
    <section class="hero indexed" id="top">
      ${sectionRail('01', 'Intro', 'Systems · Identity · AI')}
      <div class="hero-copy">
        <h1>Engineering systems,<br>learning what’s next<span>.</span></h1>
        <p>Computer systems engineer with specialized experience in identity and access management — now expanding my development practice to create practical solutions with AI and Codex.</p>
        <div class="actions"><a class="button" href="#experience">View experience <span>→</span></a><a class="text-link" href="https://www.linkedin.com/in/kennetg/" target="_blank" rel="noreferrer">LinkedIn ↗</a></div>
      </div>
      <div class="trust-figure"><span>KG / 01</span><div class="hero-mark"><img class="hero-logo hero-logo-light" src="${heroLogoBlackUrl}" alt="Kennet Guevara monogram" /><img class="hero-logo hero-logo-dark" src="${heroLogoWhiteUrl}" alt="Kennet Guevara monogram" /></div><p>Systems thinking.<br>Identity expertise.<br>AI-assisted building.</p><small>COSTA RICA / 2026</small></div>
    </section>
    <section class="experience indexed" id="experience">
      ${sectionRail('02', 'Experience')}
      <div class="section-content">
        <h2 class="sr-only">Experience</h2>
        <div class="timeline">${roles.map((role, index) => `<article class="role ${index === 0 ? 'current' : ''}"><div class="marker"></div><div class="role-head"><h3>${role.title} <span>— ${role.company}</span></h3><time>${role.dates}</time></div><p>${role.text}</p><p class="role-tools"><b>${role.toolsLabel || 'Tools'}</b>${role.tools}</p></article>`).join('')}</div>
      </div>
    </section>
    <section class="development indexed" id="development">
      ${sectionRail('03', 'Development', 'Experience meets AI-assisted building.')}
      <div class="section-content">
        <div class="dev-intro"><h2>From systems experience<br>to AI-assisted solutions<span>.</span></h2><p>My background spans software development, cloud security, automation, and identity systems. I’m now learning to use Codex and AI as development partners to turn that experience into focused, useful software.<span class="dev-future">Over time, this space will grow into a curated list of projects and organizations I build with.</span></p></div>
      </div>
    </section>
    <section class="credentials indexed" id="credentials">
      ${sectionRail('04', 'Credentials', 'Education and certifications.')}
      <div class="section-content"><h2 class="sr-only">Credentials</h2><div class="credential-list">${credentials.map(([type, title, source]) => `<article><span>${type}</span><h3>${title}</h3><p>${source}</p></article>`).join('')}</div><a class="text-link credential-link" href="https://www.linkedin.com/in/kennetg/" target="_blank" rel="noreferrer">See complete credential history on LinkedIn ↗</a></div>
    </section>
    <section class="contact indexed" id="contact">
      ${sectionRail('05', 'Contact', 'Let’s connect.')}
      <div class="section-content"><h2>I’m open to exploring<br>exciting opportunities.</h2><div class="contact-links"><a href="mailto:keguevara18@gmail.com"><span>Email</span>keguevara18@gmail.com</a><a href="https://www.linkedin.com/in/kennetg/" target="_blank" rel="noreferrer"><span>Network</span>LinkedIn ↗</a><p><span>Based in</span>Costa Rica</p></div></div>
    </section>
  </main>
  <footer><span>${new Date().getFullYear()}</span></footer>`;

const menu = document.querySelector('.menu');
const mobileNav = document.querySelector('.mobile-nav');
const themeButtons = [...document.querySelectorAll('.theme-button')];
const themeMedia = matchMedia('(prefers-color-scheme: dark)');
const themeMeta = document.querySelector('meta[name="theme-color"]');

const applyTheme = (preference, persist = true) => {
  const resolved = preference === 'system' ? (themeMedia.matches ? 'dark' : 'light') : preference;
  document.documentElement.dataset.theme = resolved;
  document.documentElement.dataset.themePreference = preference;
  themeMeta?.setAttribute('content', resolved === 'dark' ? '#101411' : '#f2f0e9');
  themeButtons.forEach((button) => button.setAttribute('aria-pressed', String(button.dataset.themeOption === preference)));
  if (persist) {
    try { localStorage.setItem('kg-theme', preference); } catch {}
  }
};

applyTheme(document.documentElement.dataset.themePreference || 'system', false);
themeButtons.forEach((button) => button.addEventListener('click', () => applyTheme(button.dataset.themeOption)));
themeMedia.addEventListener('change', () => {
  if (document.documentElement.dataset.themePreference === 'system') applyTheme('system', false);
});
menu.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') === 'true';
  menu.setAttribute('aria-expanded', String(!open));
  mobileNav.hidden = open;
});
mobileNav.addEventListener('click', (event) => {
  if (event.target.matches('a')) { mobileNav.hidden = true; menu.setAttribute('aria-expanded', 'false'); }
});

const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add('visible'); }), { threshold: 0.12 });
document.querySelectorAll('section').forEach((section) => observer.observe(section));
