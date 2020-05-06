//With JS we can add inline styles
const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const toggleNavBtn = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');
const selectPlanBtns = document.querySelectorAll('.plan .button');
const closeModalBtn = document.querySelector('.modal__action--negative');

const showModalHandler = () => {
  /* Working solution with styles */
  /* backdrop.style.display = 'block';
  modal.style.display = 'block'; */

  /* Working solution with classes */
  if (modal) {
    modal.classList.remove('close');
    modal.classList.add('open');
  }
  backdrop.classList.remove('close');
  backdrop.classList.add('open');
}

const hideModalHandler = () => {
  /* Working solution with styles */
  /* backdrop.style.display = 'none';
  modal.style.display = 'none';
  mobileNav.style.display = 'none'; */

  /* Working solution with classes */
  if (modal) {
    modal.classList.remove('open');
    modal.classList.add('close');
  }
  backdrop.classList.remove('open');
  mobileNav.classList.remove('open');
  backdrop.classList.add('close');
  mobileNav.classList.add('close');
}

const toggleMobileNav = () => {
  /* Working solution with styles */
  /* mobileNav.style.display = 'block';
  backdrop.style.display = 'block'; */

  /* Working solution with classes */
  backdrop.classList.remove('close');
  backdrop.classList.add('open');
  mobileNav.classList.remove('close');
  mobileNav.classList.add('open');
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
