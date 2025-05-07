function setupMobileMenu() {
  const mobileMenuButton = document.getElementById('mobile-menu-toggle');
  const sidebar = document.querySelector('.app-sidebar');
  const overlay = document.getElementById('overlay');
  const menuIcon = mobileMenuButton.querySelector('i');

  mobileMenuButton.addEventListener('click', function () {
    sidebar.classList.toggle('is-open');

    if (overlay) {
      overlay.classList.toggle('is-visible');
    }

    const isNowOpen = sidebar.classList.contains('is-open');
    if (isNowOpen) {
      mobileMenuButton.setAttribute('aria-expanded', 'true');
      menuIcon.classList.remove('fa-bars');
      menuIcon.classList.add('fa-times');
    } else {
      mobileMenuButton.setAttribute('aria-expanded', 'false');
      menuIcon.classList.remove('fa-times');
      menuIcon.classList.add('fa-bars');
    }
  });

  if (overlay) {
    overlay.addEventListener('click', function () {
      sidebar.classList.remove('is-open');
      overlay.classList.remove('is-visible');
      mobileMenuButton.setAttribute('aria-expanded', 'false');
      menuIcon.classList.remove('fa-times');
      menuIcon.classList.add('fa-bars');
    });
  }
}

export default setupMobileMenu;
