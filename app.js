const navLinks = document.querySelectorAll('.nav-links a');
const sections = Array.from(document.querySelectorAll('main section'));

function updateActiveNav() {
  const scrollPosition = window.scrollY + window.innerHeight * 0.25;
  let activeSectionId = sections[0].id;

  for (const section of sections) {
    const top = section.offsetTop;
    if (scrollPosition >= top) {
      activeSectionId = section.id;
    }
  }

  navLinks.forEach((link) => {
    const target = link.getAttribute('href').replace('#', '');
    link.classList.toggle('active', target === activeSectionId);
  });
}

navLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const id = link.getAttribute('href');
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

window.addEventListener('scroll', updateActiveNav);
window.addEventListener('DOMContentLoaded', updateActiveNav);
