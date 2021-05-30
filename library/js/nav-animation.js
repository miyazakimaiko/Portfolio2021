let NavIsOpen = false;

function OpenNavigation(n) {
  if (NavIsOpen == false) {
    NavIsOpen = true

    let mainArea = document.querySelector("main")
    mainArea.style.display = "none"

    let footerArea = document.querySelector("footer")
    footerArea.style.display = "none"

    // Show background
    let navScreen = document.getElementById("nav-screen")
    navScreen.style.display = "flex"

    // fix the header
    let header = document.querySelector("header")
    header.style.position = "fixed"

    let logo = document.getElementById("header-logo")
    logo.style.display = "none"

  } else if (NavIsOpen == true) {
    NavIsOpen = false

    // Hide menu links first
    // SlideOutMenuLink()

    // Then hide background
    let navScreen = document.getElementById("nav-screen");
    navScreen.style.display = "none";

    let mainArea = document.querySelector("main")
    mainArea.style.display = "grid"

    let footerArea = document.querySelector("footer")
    footerArea.style.display = "block"

    // unfix the header
    let header = document.querySelector("header");
    header.style.position = "absolute";

    let logo = document.getElementById("header-logo")
    logo.style.display = "block"
  }
}