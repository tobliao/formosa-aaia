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