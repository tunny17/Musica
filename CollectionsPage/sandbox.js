let logoContainer = document.getElementById('logoContainer');
let navOne = document.getElementById('nav1');
let navTwo = document.getElementById('nav2');
let menu = document.getElementById('menu');
  


menu.addEventListener('click', changeNav);

function changeNav() {
  let menuSrc = document.getElementById('menu').src;
  if(menuSrc.indexOf('/img/home/menu.svg')!=-1) {
    document.getElementById('menu').src = '/img/home/icon-close.svg';
  } else {
    document.getElementById('menu').src = '/img/home/menu.svg';
  }
  logoContainer.classList.toggle('background-color');
  navOne.classList.toggle('visible');
  navTwo.classList.toggle('visible');

}