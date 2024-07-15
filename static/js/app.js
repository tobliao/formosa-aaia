//typing header
var i1 = 0;
var i2 = 0;
var i3 = 0;
var txt1 = "WHAT IS BOROMA? BOROMA IS BOROMA   ";
var txt2 = "GOOD";
var speed = 150;
const delete_len = 9;
const type = () => {
  const type_elem = document.getElementById("reflect-text");
  const head_img = document.getElementById("head-img");
  if (type_elem && head_img) {
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