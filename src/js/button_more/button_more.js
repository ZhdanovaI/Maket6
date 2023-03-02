const main = document.querySelector('.main');



function buttonHandler(wrapper, wrapperClass, button, buttonClass) {
  return function changer() {
    if (wrapper.classList.contains(wrapperClass)) {
      wrapper.classList.remove(wrapperClass);
      button.textContent = 'Скрыть';
      button.classList.add(buttonClass);
    } else {
      wrapper.classList.add(wrapperClass);
      button.textContent = 'Показать все';
      button.classList.remove(buttonClass);
    }
    
  }
}



/*repairBrands*/

const repairBrandsButtonMore = main.querySelector('.repair-brands__button-more');

const repairBrandWrapper = main.querySelector('.repair-brands__swiper-wrapper');

const repairBrandsButtonHandler = buttonHandler(repairBrandWrapper, 'repair-brands__swiper-wrapper--hidden', repairBrandsButtonMore, 'repair-brands__button-more--rotate' );

repairBrandsButtonMore.addEventListener('click', repairBrandsButtonHandler);

/*repairTechnics*/

const repairTechnicsButtonMore = main.querySelector('.repair-technics__button-more');

const repairTechnicsWrapper = main.querySelector('.repair-technics__swiper-wrapper');

const repairTechnicsButtonHandler = buttonHandler(repairTechnicsWrapper, 'repair-technics__swiper-wrapper--hidden', repairTechnicsButtonMore, 'repair-technics__button-more--rotate' );

repairTechnicsButtonMore.addEventListener('click', repairTechnicsButtonHandler);

/*companyInfo*/

const companyInfoButtonMore = main.querySelector('.company-info__button-more');

const companyInfoText = main.querySelector('.company-info__text');

const companyInfoButtonHandler = buttonHandler(companyInfoText, 'company-info__text--hidden', companyInfoButtonMore, 'company-info__button-more--rotate' );

companyInfoButtonMore.addEventListener('click', companyInfoButtonHandler);