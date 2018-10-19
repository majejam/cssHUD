const elements = document.querySelectorAll('.hud-piece')
const menuToggle = document.querySelector('.button-toggle-menu')
const menu = document.querySelector('.menu')
const container = document.querySelector('.hud-big-container')
const loaderContainer = document.querySelector('.loader-container')
const cubeElements = document.querySelectorAll('.cube-3d')
const rippleElements = document.querySelectorAll('.ripple-style')
const rippleContainer = document.querySelector('.ripple-container')
const cubeContainer = document.querySelector('.cube-container')
const wavesHoverElements = document.querySelectorAll('.single-wave-container')
const wavesElements = document.querySelectorAll('.wave-style')
console.log(wavesElements)
const width = 400;
const heigth = 200;
for(let i = 0; i < wavesElements.length; i++){
  wavesElements[i].style.height = "10px";
}
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
function wavesOnHover(wavesHoverElements, wavesElements){
  for(let i = 0; i < wavesHoverElements.length; i++){
    wavesHoverElements[i].addEventListener("mouseover", () =>
    {
      if(wavesElements[i].style.height == "10px"){
        wavesElements[i].style.height = "100px";
      }else{
        wavesElements[i].style.height = "10px";
      }
    });
  }
}

wavesOnHover(wavesHoverElements, wavesElements);
elements[1].addEventListener('click', () =>
{
    cubeElements[0].classList.toggle('changePlus')
    cubeElements[1].classList.toggle('changeMinus')
    cubeContainer.style.visibility = "visible"
    rippleContainer.style.visibility = "hidden"
})
elements[2].addEventListener('click', () =>
{
  for(let i = 0; i < wavesElements.length; i++){
    wavesElements[i].style.height = "10px";
    wavesElements[i].classList.toggle('wave-animation')
  }
})
elements[3].addEventListener('click', () =>
{
    rippleContainer.style.visibility = "visible"
    cubeContainer.style.visibility = "hidden"
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
