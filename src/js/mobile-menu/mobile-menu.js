const blur = document.querySelector('.blur');

const headerWrapper = document.querySelector('.header');

const burgerButton = headerWrapper.querySelector('.button-link__logo--burger');

const mobileMenu = document.querySelector('.mobile-menu');

burgerButton.addEventListener('click', function () {
  if (mobileMenu.classList.contains('mobile-menu--hidden')) {
    mobileMenu.classList.remove('mobile-menu--hidden');
    document.body.style.overflow = 'hidden';
    blur.style.zIndex = '5';
  }
});

function closeMenu() {
  if (!mobileMenu.classList.contains('mobile-menu--hidden')) {
    mobileMenu.classList.add('mobile-menu--hidden');
    document.body.style.overflow = 'auto';
    blur.style.zIndex = '-1';
  }
}

function closeAllWindows() {
  closeMenu();
  closeCallModal();
  closeFeedbackModal();
}

const closeMenuButton = mobileMenu.querySelector('.mobile-button-link__btn--close');

closeMenuButton.addEventListener('click', closeMenu );

blur.addEventListener('click', closeAllWindows);