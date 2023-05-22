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




