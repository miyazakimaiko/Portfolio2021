let BlogNavIsOpen = false;

let headerHeight = document.querySelector('.blog-nav').offsetHeight;
let navScreen = document.querySelector('.blog-nav-list');
let navHeight = navScreen.offsetHeight;
navScreen.style.top = "-" + navHeight + "px";

function OpenBlogNav(n) {
  let icon = document.querySelector('.down-arrow')

  if (BlogNavIsOpen == false) {
    BlogNavIsOpen = true

    // Show nav list
    navScreen.style.top = headerHeight + "px"
    icon.classList.add("upside-down")

  } else if (BlogNavIsOpen == true) {
    BlogNavIsOpen = false
    navScreen.style.top = "-" + navHeight + "px"
    icon.classList.remove("upside-down")
  }
}