document.addEventListener('click', (event) => {
  const menu = document.querySelector('.mobile-menu[open]');
  if (menu && !menu.contains(event.target)) menu.removeAttribute('open');
});

document.addEventListener('shopify:section:load', () => {
  document.documentElement.style.scrollBehavior = 'smooth';
});
