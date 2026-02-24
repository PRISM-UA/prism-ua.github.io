// ── DATA ──────────────────────────────────────────────────────────────────────

const teamMembers = [
  { name: 'João Ferreira',  avatar: '/public/images/team/joao_ferreira.jpeg', linkedin: '#', github: '#' },
  { name: 'Ana Santos',     avatar: '/public/images/team/ana_santos.jpeg', linkedin: '#', github: '#' },
  { name: 'Roberto Mota',   avatar: '/public/images/team/roberto_mota.jpg', linkedin: '#', github: '#' },
  { name: 'Rita Godinho',   avatar: '/public/images/team/rita_godinho.jpg', linkedin: '#', github: '#' },
  { name: 'Tomás Coutinho', avatar: '/public/images/team/tomas_coutinho.jpg', linkedin: '#', github: '#' },
];

const supervisors = [
  { name: 'Nuno Almeida',    avatar: '/public/images/supervisors/nuno-almeida.jpeg', linkedin: '#', github: '#' },
  { name: 'Antônio Teixeira',avatar: '/public/images/supervisors/antonio_teixeira.png', linkedin: '#', github: '#' },
  { name: 'Ana Rocha',       avatar: '/public/images/supervisors/ana_rocha.jpeg', linkedin: '#', github: '#' },
  { name: 'Samuel Silva',    avatar: '/public/images/supervisors/samuel_silva.jpg', linkedin: '#', github: '#' },
];

// ── SVG ICONS ─────────────────────────────────────────────────────────────────

const linkedinSVG = `
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>`;

const githubSVG = `
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
  </svg>`;

// ── RENDER HELPERS ────────────────────────────────────────────────────────────

function createMemberCard(person) {
  const card = document.createElement('div');
  card.className = 'team-member';
  card.innerHTML = `
    <div class="avatar-wrap">
      <img src="${person.avatar}" alt="${person.name}" />
      <div class="avatar-overlay">
        <a href="${person.linkedin}" class="social-link" title="LinkedIn" target="_blank" rel="noopener">
          ${linkedinSVG}
        </a>
        <a href="${person.github}" class="social-link" title="GitHub" target="_blank" rel="noopener">
          ${githubSVG}
        </a>
      </div>
    </div>
    <span class="member-name">${person.name}</span>
  `;
  return card;
}

function renderTeam() {
  const teamGrid = document.getElementById('team-members');
  const supervisorsGrid = document.getElementById('supervisors');

  teamMembers.forEach(p => teamGrid.appendChild(createMemberCard(p)));
  supervisors.forEach(p => supervisorsGrid.appendChild(createMemberCard(p)));
}

// ── SCROLL REVEAL ─────────────────────────────────────────────────────────────

function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  reveals.forEach(el => observer.observe(el));
}

// ── ACTIVE NAV ────────────────────────────────────────────────────────────────

function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      if (window.scrollY >= section.offsetTop - 100) {
        current = section.id;
      }
    });

    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === '#' + current);
    });
  });
}

// ── INIT ──────────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  renderTeam();
  initScrollReveal();
  initActiveNav();
});
