// Nav toggle, scroll reveals. Content is visible without JS; reveals only apply when .js is set.
const nav = document.querySelector<HTMLElement>('.nav');
const toggle = document.querySelector<HTMLButtonElement>('.nav-toggle');
toggle?.addEventListener('click', () => {
  const open = nav!.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
  toggle.textContent = open ? 'Close' : 'Menu';
});
document.querySelectorAll('.nav-links a').forEach((a) => a.addEventListener('click', () => nav?.classList.remove('open')));

const items = document.querySelectorAll<HTMLElement>('.reveal');
if ('IntersectionObserver' in window && items.length) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      e.target.classList.add('is-visible');
      io.unobserve(e.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -4% 0px' });
  items.forEach((el, i) => { el.style.transitionDelay = `${(i % 3) * 60}ms`; io.observe(el); });
} else {
  items.forEach((el) => el.classList.add('is-visible'));
}
