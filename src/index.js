import ClipboardJS from 'clipboard'
import { toast } from 'bulma-toast'

document.addEventListener("DOMContentLoaded", () => {
  const clipboard = new ClipboardJS("#copy-btn");

  clipboard.on('success', function (e) {
    toast({
      message: "Copied command to clipboard!",
      type: "is-success",
      position: "bottom-center"
    })
  });

  const burgerBtn = document.getElementById("burger-btn")
  const mainNavbar = document.getElementById("navbar-main")
  burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('is-active');
    mainNavbar.classList.toggle('is-active');
  })

  const copyElement = document.getElementById("copy-input")
  copyElement.addEventListener("focus", () => {
    copyElement.select()
  })
})