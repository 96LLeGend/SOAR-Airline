//Script for toggle menu
var menu = document.getElementById('toggleMenu');
var nav = document.getElementById('nav');
var exit = document.getElementById('exit');

menu.addEventListener('click', function(e){
  nav.style.width = "60%";
  e.proventDefault();
})

exit.addEventListener('click', function(e){
  nav.style.width = "0px";
  e.proventDefault();
})

function go(){

}
