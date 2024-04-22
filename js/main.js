new Swiper('.swiper',{
  pagination:{
    el:'.swiper-pagination',
  },

  breakpoints: {
    320: {
      enabled: true,
      loop: true,
      spaceBetween: 16,
      slidesPerView: 1.30,
    },

    576: {
      enabled: true,
      loop: true,
      spaceBetween: 16,
      slidesPerView: 2,
    },

    768: {
      enabled: false,
      loop: false,
      spaceBetween: 0,
      slidesPerView: "auto",
    },

    1120: {
      enabled: false,
      loop: false,
      spaceBetween: 0,
      slidesPerView: "auto",
  },
}
});

const showMoreButton = document.querySelector('.showMore');
const deskhideElements = document.querySelectorAll('.deskhide');
const more = document.querySelector('.more');
showMoreButton.addEventListener('click', () => {
  for (let i = 0; i < deskhideElements.length; i++) {
    deskhideElements[i].style.maxHeight = deskhideElements[i].style.maxHeight === '72px' ? '0px' : '72px';
  }
  showMoreButton.textContent = showMoreButton.textContent === 'Показать все' ? 'Скрыть' : 'Показать все';
  if (more.classList.contains('move')) {
    more.classList.remove('move');
  } else {
    more.classList.add('move');
  }
  
});

