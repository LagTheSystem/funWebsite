var root = document.querySelector(":root");
var honey = document.getElementById("honey");
var lts = document.getElementById("lts");
var carousel = document.getElementById("carousel");
var mac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;

function change() {
  var checkbox = document.getElementById("hidden-checkbox");
  if (checkbox.checked) {
    document.getElementById("carousel").classList.add("nav-filter");
    document.body.classList.add('hide-overflow');
    root.style.setProperty('--highlight', 'hsl(33, 100%, 25%)');
    root.style.setProperty('--background', 'hsl(35, 18%, 43%)');
    if (!mac) {
      root.style.setProperty('--svg-filter', 'invert(21%) sepia(70%) saturate(2882%) hue-rotate(36deg) brightness(90%) contrast(101%)');
    }
  } else {
    document.getElementById("carousel").classList.remove("nav-filter");
    document.body.classList.remove('hide-overflow');
    root.style.setProperty('--svg-filter', 'invert(68%) sepia(94%) saturate(3541%) hue-rotate(2deg) brightness(101%) contrast(101%)');
    root.style.setProperty('--highlight', '#FB8C00');
    root.style.setProperty('--background', '#ffe0b2');
  }
}
