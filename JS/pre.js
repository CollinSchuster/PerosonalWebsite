//preloader
var loader = document.querySelector(".loader")
window.addEventListener("load",vanish); //vanish is the name of the function and load is the event. so the function vanish will run after the page has loaded

function vanish() {
  loader.classList.add("disappear") //targets the loader variable. disappear will target the disappear in css
}

  // typed.js 

