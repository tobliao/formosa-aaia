//typing header
/*
var i1 = 0;
var i2 = 0;
var i3 = 0;
var txt1 = "WHAT IS BOROHMA? BOROHMA IS BOROHMA   ";
var txt2 = "GOOD";
var speed = 150;
const delete_len = 10;
const type = () => {
  const type_elem = document.getElementById("reflect-text");
  //const head_img = document.getElementById("head-img");
  if (type_elem) {
    function typeWriter() {
      if (i1 < txt1.length) {
        type_elem.innerHTML += txt1.charAt(i1);
        i1++;
      }
      if (i1 == txt1.length && i2 < delete_len) {
        type_elem.innerHTML = type_elem.innerHTML.slice(0, -1);
        i2++;
      }
      if (i2 == delete_len && i3 < txt2.length) {
        type_elem.innerHTML += txt2.charAt(i3);
        i3++;
      }
      setTimeout(typeWriter, speed);
    }
    typeWriter();
  }
};

var head_img = document.querySelector("#head-img");
if (head_img) {
  var navbar = document.querySelector(".navbar");
  navbar.style.backgroundColor = "#D8C891";
  if (head_img.complete) {
    type();
  } else {
    // head_img.addEventListener("canplay", type, false);
    head_img.addEventListener("load", type, false);
  }
  var dropdowns = document.querySelectorAll(".dropdown-menu");
  dropdowns.forEach((i) => {
    i.style.backgroundColor = "#D8C891";
  });
}
*/

//type boroma
var i1 = 0;
var txt1 = "BOROHMA";
var speed = 200;

const type1 = () => {
  const type_elem_1 = document.getElementById("reflect-text-1");
  if (type_elem_1) {
    function typeWriter1() {
      if (i1 < txt1.length) {
        type_elem_1.innerHTML += txt1.charAt(i1);
        i1++;
        setTimeout(typeWriter1, speed);
      }
    }
    typeWriter1();
  }
};
window.onpageshow = type1;


/*type formosa igem 2024*/
var i2 = 0;
var txt2 = "Formosa iGEM 2024";
var speed2 = 200;
const type2 = () => {
  const type_elem_2 = document.getElementById("reflect-text-2");
  if (type_elem_2) {
    function typeWriter2() {
      if (i2 < txt2.length) {
        type_elem_2.innerHTML += txt2.charAt(i2);
        i2++;
        setTimeout(typeWriter2, speed2);
      }
    }
    setTimeout(typeWriter2);
  }
};

//start typing on view
window.onscroll = function() {
  let triggerHeight = window.innerHeight * 0.8;
  if (window.scrollY > triggerHeight) {
    type2();
    window.onscroll = null;
  }
};


// Table of content and scroll to section

const scrollHeight = document.documentElement.scrollHeight;
const clientHeight = document.documentElement.clientHeight;
const tocsections = document.querySelectorAll(".toc-section");
const toclinks = document.querySelectorAll(".toc");
const scrollToSec = () => {
  tocsections.forEach((s) => {
    const scroll = scrollY + 200;
    const offset = s.offsetTop;
    const height = s.offsetHeight;
    if (scroll > offset && scroll < offset + height) {
      toclinks.forEach((l) => {
        if (l.getAttribute("href").includes(s.getAttribute("id"))) {
          l.classList.add("sidenav-active");
        } else {
          l.classList.remove("sidenav-active");
        }
      });
    }
  });
};
const clickScroll = (e) => {
  e.preventDefault();
  const link = e.target;
  const item = document.querySelector(link.getAttribute("href"));
  const height = item.offsetTop;
  window.scroll(0, height - 150);
};
if (tocsections && toclinks) {
  scrollToSec();
  document.addEventListener("scroll", scrollToSec);
  toclinks.forEach((l) => {
    l.addEventListener("click", clickScroll);
  });
}
const progressbar = document.querySelector("#progressbar");
const progressBar = () => {
  const percentage = (scrollY / (scrollHeight - clientHeight)) * 100;
  progressbar.style.width = percentage + "%";
};
document.addEventListener("scroll", progressBar);

// Fade animation
const observerFadeIn = new IntersectionObserver(
  (items) => {
    items.forEach((i) => {
      if (i.isIntersecting) {
        i.target.classList.add("fade-in");
      } else {
        i.target.classList.remove("fade-in");
      }
    });
  },
  {
    threshold: 1,
  }
);

const fadeInItems = document.querySelectorAll(".to-fade-in");
fadeInItems.forEach((i) => {
  observerFadeIn.observe(i);
});

const observerFadeInFast = new IntersectionObserver(
  (items) => {
    items.forEach((i) => {
      if (i.isIntersecting) {
        i.target.classList.add("fade-in");
      } else {
        i.target.classList.remove("fade-in");
      }
    });
  },
  {
    threshold: 0.5,
  }
);

const fadeInFastItems = document.querySelectorAll(".to-fade-in-fast");
fadeInFastItems.forEach((i) => {
  observerFadeInFast.observe(i);
});

//rotating taiwan
const observer2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting) {
          entry.target.classList.add('rotateshow');
      } else {
          entry.target.classList.remove('rotateshow');
      }
  });
});


const hiddenElements2 = document.querySelectorAll('.rotatehidden');
hiddenElements2.forEach((el) => observer2.observe(el));

const observer3 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting) {
          entry.target.classList.add('showleft');
      } else {
          entry.target.classList.remove('showleft');
      }
  });
});


const hiddenElements3 = document.querySelectorAll('.hiddenleft');
hiddenElements3.forEach((el) => observer3.observe(el));


const observerLeft = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('rotateshow-left');
    } else {
      entry.target.classList.remove('rotateshow-left');
    }
  });
});

const hiddenElementsLeft = document.querySelectorAll('.rotatehidden-left');
hiddenElementsLeft.forEach((el) => observerLeft.observe(el));

const observer4 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting) {
          entry.target.classList.add('showright');
      }
      else {
          entry.target.classList.remove('showright');
      }
  });
});


const hiddenElements4 = document.querySelectorAll('.hiddenright');
hiddenElements4.forEach((el) => observer4.observe(el));

// Number increment on homepage
const totalTime = 3000;
const num1 = 400;
const num2 = 8;
const num3 = 100;
var called1 = false;
var called2 = false;
var called3 = false;

const increment1 = () => {
  const num = document.querySelector("#num1");
  if (num) {
    const i = parseInt(num.innerHTML);
    if (i < num1) {
      num.innerHTML = String(i + 4);
      setTimeout(increment1, totalTime / (num1 / 2));
    }
  }
};
const increment2 = () => {
  const num = document.querySelector("#num2");
  if (num) {
    const i = parseInt(num.innerHTML);
    if (i < num2) {
      num.innerHTML = String(i + 1);
      setTimeout(increment2, totalTime / (num2 * 1.2));
    }
  }
};
const increment3 = () => {
  const num = document.querySelector("#num3");
  if (num) {
    const i = parseInt(num.innerHTML);
    if (i < num3) {
      num.innerHTML = String(i + 2);
      setTimeout(increment3, totalTime / (num3 / 1.5));
    }
  }
};

const callback = () => {
  const num1 = document.querySelector("#num1");
  const num2 = document.querySelector("#num2");
  const num3 = document.querySelector("#num3");
  if (num1 && num1.getBoundingClientRect().bottom < screen_h && !called1) {
    increment1();
    called1 = true;
  }
  if (num2 && num2.getBoundingClientRect().bottom < screen_h && !called2) {
    increment2();
    called2 = true;
  }
  if (num3 && num3.getBoundingClientRect().bottom < screen_h && !called3) {
    increment3();
    called3 = true;
  }
};

document.addEventListener("scroll", callback);

const scale = (entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      e.target.classList.add("scaleToNormal");
    } else {
      e.target.classList.remove("scaleToNormal");
    }
  });
};
const scaleNormalObserver = new IntersectionObserver(scale);
const numbers = document.querySelectorAll(".problem-im-text");
if (numbers) {
  numbers.forEach((n) => scaleNormalObserver.observe(n));
}

const screen_h = window.innerHeight;
const vh = screen_h / 100;
const vw = window.innerWidth / 100;

// // Curtain
// var fiftyWrapperheight = $(".curtain-panel").height();
// var leftDistance = $(".left-curtain").width();
// var rightDistance = $(".right-curtain").width();
// var numberOfpix = 15;
// //const declaration
// const introVid = document.querySelector(".intro-video");
// const video = introVid.querySelector("video");
// const videoText = introVid.querySelector("h2");
// //  const content = document.querySelector(".content");
// //const heading = content.querySelector("h1");
// const sceneDuration = 3500;
// const videoLength = video.duration; //Value in second
// //ScrollMagic
// //https://scrollmagic.io/docs/ScrollMagic.Controller.html
// const controller = new ScrollMagic.Controller();

// //Scenses
// //https://scrollmagic.io/docs/ScrollMagic.Scene.html
// //https://scrollmagic.io/examples/basic/scene_manipulation.html
// const scene = new ScrollMagic.Scene({
//   offset: 0, // start scene after scrolling for 0px
//   duration: sceneDuration, // the scene should last for a scroll distance of 3000px | pin the element for a total of 3000px
//   triggerElement: introVid,
//   triggerHook: 0,
// })
//   .addIndicators()
//   .setPin(introVid)
//   .addTo(controller); // Add scene to ScrollMagic Controller

// //Text Animation
// const textAnimation = TweenMax.fromTo(
//   videoText, //element to Tween on
//   2, //duration of animation
//   { opacity: 0 },
//   { opacity: 1, color: "black" }
// );
// let scene2 = new ScrollMagic.Scene({
//   duration: sceneDuration,
//   triggerElement: introVid,
//   triggerHook: 0,
// })
//   .setTween(textAnimation)
//   .addTo(controller);
// //Video Animation

// let acceleration = 0.1;
// let scrollpos = 0;
// let delay = 0;

// scene.on("update", (e) => {
//   scrollpos = e.scrollPos / 333.4;
//   if (e.scrollPos > sceneDuration) {
  
//     console.log("video ended");
//   }
//   if (e.scrollPos == 0) {
//     $("body").removeClass("freeze");
//   }
//   //    var value = e.scrollPos / sceneDuration;
//   //    var videoSeekTime = video.duration * value;

//   //    console.log(e.scrollPos + " | " + videoSeekTime);
//   //    isFinite(videoSeekTime) && (video.currentTime = videoSeekTime);
// });

// setInterval(() => {
//   delay += (scrollpos - delay) * acceleration;

//   isFinite(delay) && (video.currentTime = delay);
// }, 30);

// $(window).on("wheel", function (event) {
//   event.preventDefault();
//   if (event.originalEvent.detail > 0 || event.originalEvent.wheelDelta < 0) {
//     //alternative options for wheelData: wheelDeltaX & wheelDeltaY
//     if (numberOfpix < leftDistance + 15) {
//       $(".left-curtain").css("left", -numberOfpix);
//       $(".right-curtain").css("right", -numberOfpix);
//       numberOfpix = numberOfpix + 15;
//     } else {
//       $("body").addClass("freeze");
//     }
//   } else {
//     if ($(".curtain-panel:visible").length == 1) {
//       if (-numberOfpix <= 0) {
//         $(".left-curtain").css("left", -numberOfpix);
//         $(".right-curtain").css("right", -numberOfpix);
//         numberOfpix = numberOfpix - 15;
//       }
//     }
//   }

//   //prevent page fom scrolling
// return false;
// });

$('.curtain__scrollbar')
  .attr('data-top', 'left: 0%; transform: scale(0)')
  .attr('data-top-bottom', 'left: 100%; transform: scale(1)');

$('.fold')
  .attr('data-top', 'background-position: 50% 0vh;')
  .attr('data-top-bottom', 'background-position: 50% -10vh;');

$('.fold--interior')
  .attr('data-top', 'transform: translate(0, 0vh);')
  .attr('data-top-bottom', 'transform: translate(0, -20vh);');

// Remember to initiate skrollr you goofball...
if($('.no-touch').length) {
	var s = skrollr.init({ forceHeight: false });
}