
function transitionNavbar() {
    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", function(){
        if(window.scrollY > 50) {
            navbar.classList.add("navbar__active")
        } else {
            navbar.classList.remove("navbar__active")
        }
    })
}

transitionNavbar()