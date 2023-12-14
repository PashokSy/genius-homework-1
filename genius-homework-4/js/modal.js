const modalOpenBtn = document.querySelector('.modal-btn-open');
const modalCloseBtn = document.querySelector('.modal__btn-close');
const backdrop = document.querySelector('.backdrop');

const modalToggle = function () {
  backdrop.classList.toggle('is-hidden');
};

modalOpenBtn.addEventListener('click', modalToggle);
modalCloseBtn.addEventListener('click', modalToggle);
