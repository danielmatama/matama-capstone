
const dropdownButton = document.querySelector('.dropdown-button');
const dropdownMenu = document.querySelector('.dropdown-menu');
const mark = document.querySelector('.xmark');
const Items = document.querySelectorAll('.nav-bar .ax');
dropdownButton.addEventListener('click', () => {
  dropdownMenu.classList.remove('hide');
});
mark.addEventListener('click', () => {
  dropdownMenu.classList.toggle("hide");
});

Items.forEach((n) => {
  n.addEventListener('click', () => {
    dropdownMenu.classList.toggle('hide');
  });
});
