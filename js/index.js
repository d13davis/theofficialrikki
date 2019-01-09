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


(function() {
  let documentElem = $(document);
  let aboutMeTitle = $('.about-me h3'), aboutMeTitleOffset = aboutMeTitle.offset().top/2;
  let aboutMeImage = $('.about-me .img-choose'), aboutMeImageOffset = aboutMeImage.offset().top/2;
  let aboutMeYellowSp = $('.about-me .about-me-p .yellow-spacer'), aboutMeYellowSpOffset = aboutMeYellowSp.offset().top/2;
  let aboutMeBase = $('.about-me .about-me-p .base'), aboutMeBaseOffset = aboutMeBase.offset().top/2;
  let aboutMeYellowSpP = $('.about-me .about-me-p .yellow-spacer-p'), aboutMeYellowSpPOffset = aboutMeYellowSpP.offset().top/2;
  let aboutMeQuote = $('.about-me .about-me-p .quote'), aboutMeQuoteOffset = aboutMeQuote.offset().top/2.25;
  documentElem.on('scroll', function() {
    if (documentElem.scrollTop() > aboutMeTitleOffset && aboutMeTitle.hasClass('hidden')) aboutMeTitle.removeClass('hidden');

    if (documentElem.scrollTop() > aboutMeImageOffset && aboutMeImage.hasClass('hidden')) aboutMeImage.removeClass('hidden');

    if (documentElem.scrollTop() > aboutMeYellowSpOffset && aboutMeYellowSp.hasClass('hidden')) aboutMeYellowSp.removeClass('hidden');

    if (documentElem.scrollTop() > aboutMeBaseOffset && aboutMeBase.hasClass('hidden')) aboutMeBase.removeClass('hidden');

    if (documentElem.scrollTop() > aboutMeYellowSpPOffset && aboutMeYellowSpP.hasClass('hidden')) aboutMeYellowSpP.removeClass('hidden');

    if (documentElem.scrollTop() > aboutMeQuoteOffset && aboutMeQuote.hasClass('hidden')) aboutMeQuote.removeClass('hidden');
  });
})();

let unfocusNav = function() {
  if (toggleNavStatus == true) {
    toggleNav();
    let ham = document.querySelector('#hamburger');
    hamburger(ham);
  }
};
