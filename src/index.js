import ClipboardJS from 'clipboard'

document.addEventListener("DOMContentLoaded", () => {
  new ClipboardJS("#copy-btn");
})