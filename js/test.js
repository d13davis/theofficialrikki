let picIndex = 0;
let gall1 = $('.gall-1');
let gall2 = $('.gall-2');
let gall3 = $('.gall-3');

let lastPic = function() {
  if (picIndex == 0) {
    gall3.css('left', '-100%');
    gall1.css('right', '-100%');
    gall1.css('opacity', '0');
    gall3.css('left', '35%');
    gall3.css('opacity', '1');
    picIndex = 2;
  } else if (picIndex == 1) {
    gall1.css('left', '-100%');
    gall2.css('right', '-100%');
    gall2.css('opacity', '0');
    gall1.css('left', '35%');
    gall1.css('opacity', '1');
    picIndex = 0;
  } else if (picIndex == 2) {
    gall2.css('left', '-100%');
    gall3.css('right', '-100%');
    gall3.css('opacity', '0');
    gall2.css('left', '35%');
    gall2.css('opacity', '1');
    picIndex = 1;
  }
}

let nextPic = function() {
  if (picIndex == 0) {
    gall2.css('left', '-100%');
    gall1.css('right', '-100%');
    gall1.css('opacity', '0');
    gall2.css('left', '35%');
    gall2.css('opacity', '1');
    picIndex = 1;
  } else if (picIndex == 1) {
    gall3.css('left', '-100%');
    gall2.css('right', '-100%');
    gall2.css('opacity', '0');
    gall3.css('left', '35%');
    gall3.css('opacity', '1');
    picIndex = 2;
  } else if (picIndex == 2) {
    gall1.css('left', '-100%');
    gall3.css('right', '-100%');
    gall3.css('opacity', '0');
    gall1.css('left', '35%');
    gall1.css('opacity', '1');
    picIndex = 0;
  }
}
