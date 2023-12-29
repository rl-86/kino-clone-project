import { currentSlide } from './herobanner';

// Function to add same header and footer to all html pages with id="header" or "footer"
async function includeHTML() {
  // Fetch the header HTML
  const headerFetch = await fetch('header.html');
  const headerHtml = await headerFetch.text();
  document.querySelector('header').innerHTML = headerHtml;

  // Fetch the footer HTML
  const footerFetch = await fetch('footer.html');
  const footerHtml = await footerFetch.text();
  document.querySelector('footer').innerHTML = footerHtml;
}

includeHTML();

// Herobanner

dot1 = document
  .getElementById('dot1')
  .addEventListener('click', currentSlide(0));
dot2 = document
  .getElementById('dot2')
  .addEventListener('click', currentSlide(1));
dot3 = document
  .getElementById('dot3')
  .addEventListener('click', currentSlide(2));
dot4 = document
  .getElementById('dot4')
  .addEventListener('click', currentSlide(3));
dot5 = document
  .getElementById('dot5')
  .addEventListener('click', currentSlide(4));
