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

let gallArray = [$('#gall-01'), $('#gall-02'), $('#gall-03'), $('#gall-04')];

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
      lastOffset = last.offset().top,
      i = 60,
      gallShCh = $('.gallery-shot-choice'),
      gallHeader = $('header'),
      gallHeaderOffset = gallHeader.offset().top,
      gallC = [$('.c1'), $('.c2'), $('.c3'), $('.c4')];
  documentElem.on('scroll', function() {
    if (documentElem.scrollTop() > nextOffset && next.hasClass('hidden')) next.removeClass('hidden');
    if (documentElem.scrollTop() > lastOffset && last.hasClass('hidden')) last.removeClass('hidden');
    if (documentElem.scrollTop() <= nextOffset) next.addClass('hidden');
    if (documentElem.scrollTop() <= lastOffset) last.addClass('hidden');

    if (documentElem.scrollTop() < i && gallShCh.hasClass('attached')) {
      gallShCh.removeClass('attached');
    }

    if (documentElem.scrollTop() > i && !gallShCh.hasClass('attached')) {
      gallShCh.addClass('attached');
    }

    if (documentElem.scrollTop() > 10 && toggleNavStatus == true) {
      unfocusNav();
    }


    if (documentElem.scrollTop() <= (gallArray[0].offset().top - 200)) {//top space d
      gallC[0].attr('fill', 'none');
      gallC[1].attr('fill', 'none');
      gallC[2].attr('fill', 'none');
      gallC[3].attr('fill', 'none');
    } else if (documentElem.scrollTop() >= (gallArray[0].offset().top - 200) && documentElem.scrollTop() < gallArray[1].offset().top - 200) {//picture 1 d
      gallC[0].attr('fill', '#EBFDFD');
      gallC[1].attr('fill', 'none');
      gallC[2].attr('fill', 'none');
      gallC[3].attr('fill', 'none');
    } else if (documentElem.scrollTop() >= (gallArray[1].offset().top - 200) && documentElem.scrollTop() < gallArray[2].offset().top - 200) {//picture 2 d
      gallC[1].attr('fill', '#EBFDFD');
      gallC[0].attr('fill', 'none');
      gallC[2].attr('fill', 'none');
      gallC[3].attr('fill', 'none');
    } else if (documentElem.scrollTop() >= (gallArray[2].offset().top - 200) && documentElem.scrollTop() < gallArray[3].offset().top - 300) {//picture 3
      gallC[2].attr('fill', '#EBFDFD');
      gallC[1].attr('fill', 'none');
      gallC[0].attr('fill', 'none');
      gallC[3].attr('fill', 'none');
    } else if (documentElem.scrollTop() >= (gallArray[3].offset().top - 300)) {//picture 4
      gallC[3].attr('fill', '#EBFDFD');
      gallC[1].attr('fill', 'none');
      gallC[2].attr('fill', 'none');
      gallC[0].attr('fill', 'none');
    }
  });

  $(".gallery-shot-option").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      let hash = this.hash;
      $('html, body').animate({scrollTop: $(hash).offset().top - 10}, 1200, function() {window.location.hash = hash - 10;});
    }
  });
})();
