let picIndex = 0;
let gall1 = $('.gall-1');
let gall2 = $('.gall-2');
let gall3 = $('.gall-3');
let gall4 = $('.gall-4');

let gallArray = [$('.gall-1'), $('.gall-2'), $('.gall-3'), $('.gall-4')];

let i = 0;

//let lastPic = function() {
//  if (picIndex == 0) {
//    gall3.css('left', '-100%');
//    gall1.css('right', '-100%');
//    gall1.css('opacity', '0');
//    gall3.css('left', '35%');
//    gall3.css('opacity', '1');
//    picIndex = 2;
//  } else if (picIndex == 1) {
//    gall1.css('left', '-100%');
//    gall2.css('right', '-100%');
//    gall2.css('opacity', '0');
//    gall1.css('left', '35%');
//    gall1.css('opacity', '1');
//    picIndex = 0;
//  } else if (picIndex == 2) {
//    gall2.css('left', '-100%');
//    gall3.css('right', '-100%');
//    gall3.css('opacity', '0');
//    gall2.css('left', '35%');
//    gall2.css('opacity', '1');
//    picIndex = 1;
//  }
//}

//let nextPic = function() {
//  if (picIndex == 0) {
//    gall2.css('left', '-100%');
//    gall1.css('right', '-100%');
//    gall1.css('opacity', '0');
//    gall2.css('left', '35%');
//    gall2.css('opacity', '1');
//    picIndex = 1;
//  } else if (picIndex == 1) {
//    gall3.css('left', '-100%');
//    gall2.css('right', '-100%');
//    gall2.css('opacity', '0');
//    gall3.css('left', '35%');
//    gall3.css('opacity', '1');
//    picIndex = 2;
//  } else if (picIndex == 2) {
//    gall1.css('left', '-100%');
//    gall3.css('right', '-100%');
//    gall3.css('opacity', '0');
//    gall1.css('left', '35%');
//    gall1.css('opacity', '1');
//    picIndex = 0;
//  }
//}

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
  /* if (!gall1.hasClass('hidden')) {
    gall1.addClass('hidden');
    gall2.removeClass('hidden');
  } else if (!gall2.hasClass('hidden')) {
    gall2.addClass('hidden');
    gall3.removeClass('hidden');
  } else if (!gall3.hasClass('hidden')) {
    gall3.addClass('hidden');
    gall4.removeClass('hidden');
  } else if (!gall4.hasClass('hidden')) {
    gall4.addClass('hidden');
    gall1.removeClass('hidden');
  } */
}

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
  /* if (!gall1.hasClass('hidden')) {
    gall1.addClass('hidden');
    gall4.removeClass('hidden');
  } else if (!gall2.hasClass('hidden')) {
    gall2.addClass('hidden');
    gall1.removeClass('hidden');
  } else if (!gall3.hasClass('hidden')) {
    gall3.addClass('hidden');
    gall2.removeClass('hidden');
  } else if (!gall4.hasClass('hidden')) {
    gall4.addClass('hidden');
    gall3.removeClass('hidden');
  } */
}
