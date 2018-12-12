let hamburger = function(x) {
  x.classList.toggle("change");
};

let toggleNavStatus = false;

let toggleNav = function() {
  let getSidebar = document.querySelector('.nav-sidebar');
  let getSidebarUL = document.querySelector('.nav-sidebar ul');
  let getSidebarLinks = document.querySelectorAll('.nav-sidebar a');

  if (toggleNavStatus == false) {
    getSidebarUL.style.visibility = "visible";
    getSidebar.style.width = "200px";
    getSidebar.style.opacity = "1";

    let arrayLength = getSidebarLinks.length;
    for (let i = 0; i < arrayLength; i++) {
      getSidebarLinks[i].style.opacity = "1";
    }

    toggleNavStatus = true;

  } else if (toggleNavStatus == true) {

    let arrayLength = getSidebarLinks.length;

    for (let i = 0; i < arrayLength; i++) {
      getSidebarLinks[i].style.opacity = "0";
    }

    getSidebarUL.style.visibility = "hidden";
    getSidebar.style.width = "50px";
    getSidebar.style.opacity = "0";

    toggleNavStatus = false;
  }
};
