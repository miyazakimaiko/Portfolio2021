const cursor  = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');
const h1Link = document.querySelectorAll('a')
const navLinks = document.querySelectorAll('.menu-link a')
const buttons = document.querySelectorAll('.button-container input')
const humberger = document.querySelector('.menu-icon')
const blogNav = document.querySelector('.blog-nav .header')

window.addEventListener("mousemove", positionCursor);

function positionCursor(e) {
    cursor.style.top = e.pageY + 'px';
    cursor.style.left = e.pageX + 'px';
}

let groupOfLinks = [...h1Link, ...navLinks, ...buttons, humberger, blogNav];

groupOfLinks.forEach(link => {
    link.addEventListener('mouseleave', () => {
        cursor.classList.remove("link-grow");
    });
    link.addEventListener('mouseover', () => {
        cursor.classList.add("link-grow");
    });
})