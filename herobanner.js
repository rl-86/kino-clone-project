var current = 0;
const item = document.querySelectorAll('.herobanner_item');
const dot = document.querySelectorAll('.dot');

function reset() {
  for (i = 0; i < item.length; i++) {
    item[i].style.display = 'none';
    dot[i].style.background = '#e6e6e6';
  }
}
//previous arrow
function previousSlide() {
  reset();
  if (current == 0) {
    current = item.length;
  }
  item[current - 1].style.display = 'block';
  dot[current - 1].style.background = 'transparent';
  current--;
}
//next arrow
function nextSlide() {
  reset();
  if (current == item.length - 1) {
    current = -1;
  }
  item[current + 1].style.display = 'block';
  dot[current + 1].style.background = 'transparent';
  current++;
}

function currentSlide(i) {
  reset();
  item[i].style.display = 'block';
  dot[i].style.background = 'transparent';
  current = i;
}

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
