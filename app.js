const elements = document.querySelectorAll('.hud-piece')
const menuToggle = document.querySelector('.button-toggle-menu')
const menu = document.querySelector('.menu')
const container = document.querySelector('.hud-big-container')
const loaderContainer = document.querySelector('.loader-container')
const cubeElements = document.querySelectorAll('.cube-3d')
const rippleElement = document.querySelector('.ripple-style')
const width = 400;
const heigth = 200;
menuToggle.addEventListener('click', () =>
{
    menu.classList.toggle('open')
    menuToggle.classList.toggle('move')
    if(menu.classList.contains('open')){
      menu.style.zIndex = "15";
    }
    else{
      setTimeout(function(){menu.style.zIndex = "-1"}, 1000);
    }

})
elements[1].addEventListener('click', () =>
{
    cubeElements[0].classList.toggle('changePlus')
    cubeElements[1].classList.toggle('changeMinus')
})
elements[3].addEventListener('click', () =>
{
  rippleEffect(rippleElement)
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

function rippleEffect(rippleElement){
  window.addEventListener('click', () =>
  {
    let posx = event.clientX;
    let posy = event.clientY;
    rippleElement.classList.toggle('ripple-style-after')
    rippleElement.style.top = `${posy}px`
    rippleElement.style.left = `${posx}px`
    setTimeout(function(){
      if(rippleElement.classList.contains('ripple-style-after')){
        rippleElement.classList.remove('ripple-style-after')
      }
    }, 1000);
  })
}
