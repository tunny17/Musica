const rangeInputs = document.querySelectorAll('input[type="range"]');
let logoContainer = document.getElementById('logoContainer');
let navOne = document.getElementById('nav1');
let navTwo = document.getElementById('nav2');
let menu = document.getElementById('menu');




function handleInputChange(e) {
  let target = e.target
  if (e.target.type !== 'range') {
    target = document.getElementById('range')
  } 
  const min = target.min
  const max = target.max
  const val = target.value
  
  target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'
}

rangeInputs.forEach(input => {
    input.addEventListener('input', handleInputChange)
})
  


menu.addEventListener('click', changeNav);

function changeNav() {
  let menuSrc = document.getElementById('menu').src;
  if(menuSrc.indexOf('/img/home/hammenu.svg')!=-1) {
    document.getElementById('menu').src = '/img/home/icon-close.svg';
  } else {
    document.getElementById('menu').src = '/img/home/hammenu.svg';
  }
  logoContainer.classList.toggle('background-color');
  navOne.classList.toggle('visible');
  navTwo.classList.toggle('visible');

}