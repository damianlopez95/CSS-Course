//With JS we can add inline styles
const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const toggleNavBtn = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');
const selectPlanBtns = document.querySelectorAll('.plan .button');
const closeModalBtn = document.querySelector('.modal__action--negative');
const ctaBtn = document.querySelector('.main-nav__item--cta');

const showModalHandler = () => {
  /* Working solution with styles */
  /* backdrop.style.display = 'block';
  modal.style.display = 'block'; */

  /* Working solution with classes */
  if (modal) {
    modal.classList.add('open');
  }
  /* Since I want a transition in the backdrop, I neeed to update the display prop */
  /* and then add the class that makes the transition effect. */
  backdrop.style.display = 'block';
  setTimeout(() => {
    backdrop.classList.add('open');
  }, 10);
}

const hideModalHandler = () => {
  /* Working solution with styles */
  /* backdrop.style.display = 'none';
  modal.style.display = 'none';
  mobileNav.style.display = 'none'; */

  /* Working solution with classes */
  if (modal) {
    modal.classList.remove('open');
  }
  backdrop.classList.remove('open');
  setTimeout(() => {
    backdrop.style.display = 'none';
  }, 200);
  mobileNav.classList.remove('open');
}

const toggleMobileNav = () => {
  /* Working solution with styles */
  /* mobileNav.style.display = 'block';
  backdrop.style.display = 'block'; */

  /* Working solution with classes */
  backdrop.style.display = 'block';
  setTimeout(() => {
    backdrop.classList.add('open');
  }, 10);
  mobileNav.style.display = 'block';
  setTimeout(() => {
    mobileNav.classList.add('open');
  }, 10);
}

for (btn of selectPlanBtns) {
  btn.addEventListener('click', showModalHandler);
}

/* closeModalBtn is not in all pages */
if (closeModalBtn) {
  closeModalBtn.addEventListener('click', hideModalHandler);
}
backdrop.addEventListener('click', hideModalHandler);
toggleNavBtn.addEventListener('click', toggleMobileNav);

ctaBtn.addEventListener('animationstart', (event) => {
  console.log('animation started', event)
});

ctaBtn.addEventListener('animationend', (event) => {
  console.log('animation ended', event)
});

ctaBtn.addEventListener('animationiteration', (event) => {
  console.log('animation iteration', event)
});
