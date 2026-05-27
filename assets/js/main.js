// Highlight the sidebar link that matches the current page
const filename = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.sidebar-link').forEach(link => {
  if (link.getAttribute('href') === filename) link.classList.add('active');
});

// Build TOC from data-toc attribute on .page
function buildToc() {
  const tocList = document.getElementById('tocList');
  if (!tocList) return;
  const page = document.querySelector('.page');
  if (!page || !page.dataset.toc) return;
  try {
    const items = JSON.parse(page.dataset.toc);
    tocList.innerHTML = items.map(i => `<a href="#${i.id}">${i.label}</a>`).join('');
  } catch (e) { /* malformed JSON — leave TOC empty */ }
}

// Smooth-scroll TOC links
document.addEventListener('click', e => {
  const tocLink = e.target.closest('.toc-list a');
  if (!tocLink) return;
  e.preventDefault();
  const target = document.getElementById(tocLink.getAttribute('href').slice(1));
  if (target) window.scrollTo({ top: target.getBoundingClientRect().top + window.pageYOffset - 80, behavior: 'smooth' });
});

// Scrollspy
let scrollTimer;
window.addEventListener('scroll', () => {
  clearTimeout(scrollTimer);
  scrollTimer = setTimeout(() => {
    let current = null;
    document.querySelectorAll('h2[id], h3[id]').forEach(h => {
      if (h.getBoundingClientRect().top < 120) current = h.id;
    });
    document.querySelectorAll('.toc-list a').forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });
  }, 50);
});

// Mobile sidebar toggle
document.getElementById('menuToggle').addEventListener('click', () => {
  document.getElementById('sidebar').classList.toggle('open');
});

// Infographic: try loading a local image, fall back to inline SVG
const infographicImg = document.getElementById('infographic-img');
if (infographicImg) {
  const candidates = [
    'assets/images/image.png', 'assets/images/image.jpg', 'assets/images/image.jpeg', 'assets/images/image.webp',
    'assets/images/infographic.png', 'assets/images/infographic.jpg',
    'assets/images/processo.png', 'assets/images/processo.jpg',
    'assets/images/diagrama.png', 'assets/images/diagrama.jpg',
  ];
  (async () => {
    for (const src of candidates) {
      const found = await new Promise(resolve => {
        const probe = new Image();
        probe.onload = () => resolve(true);
        probe.onerror = () => resolve(false);
        probe.src = src;
      });
      if (found) {
        infographicImg.src = src;
        infographicImg.style.display = 'block';
        document.getElementById('infographic-fallback').style.display = 'none';
        break;
      }
    }
  })();
}

buildToc();
