/**
 *  Functionality will be given here.
 * 
**/


/**
 * nabvar 
 */



const navOpenBtn = document.querySelector("[data-menu-open-btn]");

const navCloseBtn = document.querySelector("[data-menu-close-btn]");

const navbar = document.querySelector("[data-navbar]");

const overlay = document.querySelector("[data-overlay]");

const navElemArray = [navOpenBtn, navCloseBtn, overlay];

for (let i = 0; i < navElemArray.length; i++) {

  navElemArray[i].addEventListener("click", function () {

    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("active");

  });
};


/**
 * Making sticky Header
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
    this.window.scrollY >= 10 ? header.classList.add("active") : header.classList.remove("active")
})



/**
 * go top
 */

const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  window.scrollY >= 500 ? goTopBtn.classList.add("active") : goTopBtn.classList.remove("active");

});



const video = document.getElementById('myVideo');
video.volume = 0.1




