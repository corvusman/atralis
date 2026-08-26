const header = document.querySelector('.site-header');
const setHeader = () => header.classList.toggle('scrolled', window.scrollY > 24);
setHeader();
window.addEventListener('scroll', setHeader, { passive: true });

document.querySelectorAll('[data-tabs]').forEach((tabs) => {
  const buttons = [...tabs.querySelectorAll('[data-tab-target]')];
  const panels = [...tabs.querySelectorAll('.tab-panel')];

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const target = button.dataset.tabTarget;
      buttons.forEach((btn) => {
        const active = btn === button;
        btn.classList.toggle('is-active', active);
        btn.setAttribute('aria-selected', String(active));
      });
      panels.forEach((panel) => {
        const active = panel.id === target;
        panel.classList.toggle('is-active', active);
        panel.hidden = !active;
      });
    });
  });
});
