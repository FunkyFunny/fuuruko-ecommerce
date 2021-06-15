// Bagian NavBar
const menuToggle = document.querySelector('.menu input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function() {
    nav.classList.toggle('slide');
});

window.addEventListener("scroll", function(){
	var nav = document.querySelector("nav");
	nav.classList.toggle("sticky", window.scrollY > 0);
});

let themeSwitch = document.querySelector('.themeSwitch');
let body = document.querySelector('body');
themeSwitch.onclick = function(){
	themeSwitch.classList.toggle('active');
	body.classList.toggle('dark');
}