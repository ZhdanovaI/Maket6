function closeAllWindows() {
    closeMenu();
    closeCallModal();
    closeFeedbackModal();
  }
  
  const closeMenuButton = mobileMenu.querySelector('.mobile-button-link__btn--close');
  
  closeMenuButton.addEventListener('click', closeMenu );
  
  blur.addEventListener('click', closeAllWindows);