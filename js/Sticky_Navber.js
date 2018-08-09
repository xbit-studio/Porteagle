// JavaScript Document
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("ban-top");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
	console.log("added");  	  
    navbar.classList.add("sticky")
  } else {
	console.log('removed');  
    navbar.classList.remove("sticky");
  }
}