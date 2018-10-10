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
    menuToggle.classList.toggle('move')
})

window.addEventListener('mousemove', (_event) =>
{
  const x = (window.innerWidth/2 -_event.clientX)/300
  const y = (window.innerHeight/2 - _event.clientY)/100
  for(let i = 0; i < elements.length; i++){
      elements[i].style.transform = "rotateY("+x+"deg) rotateX("+y+"deg)";
  }
})
