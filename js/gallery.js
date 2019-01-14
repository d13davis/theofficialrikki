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
    getSidebar.style.width = "300px";
    getSidebar.style.margin = "0 auto";
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
    getSidebar.style.width = "0px";
    getSidebar.style.opacity = "0";

    toggleNavStatus = false;
  }
};

let unfocusNav = function() {
  if (toggleNavStatus == true) {
    toggleNav();
    let ham = document.querySelector('#hamburger');
    hamburger(ham);
  }
};

let gallArray = [$('.gall-1'), $('.gall-2'), $('.gall-3'), $('.gall-4')];

let i = 0;

let nextPic = function() {
  if (i < 3 && !gallArray[i].hasClass('hidden')) {
    gallArray[i].addClass('hidden');
    i = ++i;
    gallArray[i].removeClass('hidden');
  } else if (i == 3 && !gallArray[i].hasClass('hidden')) {
    gallArray[i].addClass('hidden');
    i = 0;
    gallArray[i].removeClass('hidden');
  }
};

let lastPic = function() {
  if (i == 0 && !gallArray[i].hasClass('hidden')) {
    gallArray[0].addClass('hidden');
    gallArray[3].removeClass('hidden');
    i = 3;
  } else if (i > 0 && !gallArray[i].hasClass('hidden')) {
    gallArray[i].addClass('hidden');
    i = --i;
    gallArray[i].removeClass('hidden');
  }
};

(function() {
  let documentElem = $(document);
  let next = $('#next'),
      nextOffset = next.offset().top,
      last = $('#last'),
      lastOffset = last.offset().top;
  documentElem.on('scroll', function() {
    if (documentElem.scrollTop() > nextOffset && next.hasClass('hidden')) next.removeClass('hidden');
    if (documentElem.scrollTop() > lastOffset && last.hasClass('hidden')) last.removeClass('hidden');
    if (documentElem.scrollTop() <= nextOffset) next.addClass('hidden');
    if (documentElem.scrollTop() <= lastOffset) last.addClass('hidden');
  });
})();
