const blur = document.querySelector('.blur');

const headerWrapper = document.querySelector('.header');

const burgerButton = headerWrapper.querySelector('.button-link__logo--burger');

const mobileMenu = document.querySelector('.mobile-menu');

/*modalCall*/

const modalCall = document.querySelector('.modal-call');

function openCallModal() {
  if (modalCall.classList.contains('modal-call--hidden')) {
    modalCall.classList.remove('modal-call--hidden');
    document.body.style.overflow = 'hidden';
    blur.style.zIndex = '8';
    modalCall.focus();
  }
}

function closeCallModal() {
  if (!modalCall.classList.contains('modal-call--hidden')) {
    modalCall.classList.add('modal-call--hidden');
    document.body.style.overflow = 'auto';
    blur.style.zIndex = '6';
  }
  if (mobileMenu.classList.contains('mobile-menu--hidden')) {
    blur.style.zIndex = '-1';
  }
}

const openModalCallButton = mobileMenu.querySelector('.mobile-button-link__btn--call');

openModalCallButton.addEventListener('click', openCallModal);

const headerOpenModalCallButton = headerWrapper.querySelector('.button-link__logo--call');

headerOpenModalCallButton.addEventListener('click', openCallModal);

const closeModalCallButton = modalCall.querySelector('.modal-call__btn--close');

closeModalCallButton.addEventListener('click', closeCallModal);

/*modalFeedback*/

const modalFeedback = document.querySelector('.modal-feedback');

function openFeedbackModal() {
  if (modalFeedback.classList.contains('modal-feedback--hidden')) {
    modalFeedback.classList.remove('modal-feedback--hidden');
    document.body.style.overflow = 'hidden';
    blur.style.zIndex = '8';
    modalFeedback.focus();
  }
}

function closeFeedbackModal() {
  if (!modalFeedback.classList.contains('modal-feedback--hidden')) {
    modalFeedback.classList.add('modal-feedback--hidden');
    document.body.style.overflow = 'auto';
    blur.style.zIndex = '6';
  }
  if (mobileMenu.classList.contains('mobile-menu--hidden')) {
    blur.style.zIndex = '-1';
  }
}

const openModalFeedbackButton = mobileMenu.querySelector('.mobile-button-link__btn--chat');

openModalFeedbackButton.addEventListener('click', openFeedbackModal);

const headerOpenModalFeedbackButton = headerWrapper.querySelector('.button-link__logo--chat');

headerOpenModalFeedbackButton.addEventListener('click', openFeedbackModal);

const closeModalFeedbackButton = modalFeedback.querySelector('.modal-feedback__btn--close');

closeModalFeedbackButton.addEventListener('click', closeFeedbackModal);

/**/

function closeAllWindows() {
  closeMenu();
  closeCallModal();
  closeFeedbackModal();
}

const closeMenuButton = mobileMenu.querySelector('.mobile-button-link__btn--close');

closeMenuButton.addEventListener('click', closeMenu );

blur.addEventListener('click', closeAllWindows);