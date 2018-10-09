const elements = document.querySelectorAll('.hud-piece')
const menuToggle = document.querySelector('.button-toggle-menu')
const menu = document.querySelector('.menu')
const container = document.querySelector('.hud-big-container')
const width = 400;
const heigth = 200;
menuToggle.addEventListener('click', () =>
{
    menu.classList.toggle('open')
    container.classList.toggle('small')
})
window.addEventListener('mousemove', (_event) =>
{
  const x = - (window.innerWidth/2 -_event.clientX)/300
  const y = (450 - _event.clientY)/100
  console.log(((window.innerWidth/2 -_event.clientX)/100),450 - _event.clientY)
  elements[0].style.transform = "rotateY("+x+"deg) rotateX("+y+"deg)";
  elements[1].style.transform = "rotateY("+x+"deg) rotateX("+y+"deg)";
  elements[2].style.transform = "rotateY("+x+"deg) rotateX("+y+"deg)";
  elements[3].style.transform = "rotateY("+x+"deg) rotateX("+y+"deg)";
})
