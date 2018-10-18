const elements = document.querySelectorAll('.hud-piece')
const menuToggle = document.querySelector('.button-toggle-menu')
const menu = document.querySelector('.menu')
const container = document.querySelector('.hud-big-container')
const loaderContainer = document.querySelector('.loader-container')
const cubeElements = document.querySelectorAll('.cube-3d')
const width = 400;
const heigth = 200;
menuToggle.addEventListener('click', () =>
{
    menu.classList.toggle('open')
    container.classList.toggle('small')
    menuToggle.classList.toggle('move')
})
elements[1].addEventListener('click', () =>
{
    cubeElements[0].classList.toggle('changePlus')
    cubeElements[1].classList.toggle('changeMinus')
})
setTimeout(function(){loaderContainer.style.zIndex = '-15'; }, 1000);
window.addEventListener('mousemove', (_event) =>
{
  const x = (window.innerWidth/2 -_event.clientX)/300
  const y = (window.innerHeight/2 - _event.clientY)/100
  for(let i = 0; i < elements.length; i++){
      elements[i].style.transform = "rotateY("+x+"deg) rotateX("+y+"deg)";
  }
})
