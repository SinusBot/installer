import ClipboardJS from 'clipboard'

document.addEventListener("DOMContentLoaded", () => {
  new ClipboardJS("#copy-btn");

  const burgerBtn = document.getElementById("burger-btn")
  const mainNavbar = document.getElementById("navbar-main")
  burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('is-active');
    mainNavbar.classList.toggle('is-active');
  })
})