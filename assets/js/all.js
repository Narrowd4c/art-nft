"use strict";

var mobileMenu = document.querySelector("#mobile-menu");
var mobileSearch = document.querySelector("#mobile-search");
var toggleSearch = document.querySelector("#toggleSearch");
var menuIcon = document.querySelector(".menuIcon");

function toggleMenu(e) {
  e.classList.toggle("change");
  mobileMenu.classList.toggle("d-none");
}

function removeMenu(e) {
  menuIcon.classList.toggle("change");
  e.parentElement.classList.add("d-none");
}

function removeBtn(e) {
  e.parentElement.classList.add("d-none");
}

toggleSearch.addEventListener("click", function (e) {
  e.stopPropagation();
  mobileSearch.classList.toggle("d-none");
});
"use strict";

AOS.init({
  // Global settings:
  disable: false,
  // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: "DOMContentLoaded",
  // name of the event dispatched on the document, that AOS should initialize on
  initClassName: "aos-init",
  // class applied after initialization
  animatedClassName: "aos-animate",
  // class applied on animation
  useClassNames: false,
  // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false,
  // disables automatic mutations' detections (advanced)
  debounceDelay: 50,
  // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99,
  // the delay on throttle used while scrolling the page (advanced)
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120,
  // offset (in px) from the original trigger point //120~150
  delay: 0,
  // values from 0 to 3000, with step 50ms
  duration: 1000,
  // values from 0 to 3000, with step 50ms
  easing: "ease",
  // default easing for AOS animations
  once: false,
  // whether animation should happen only once - while scrolling down
  mirror: true,
  // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom" // defines which position of the element regarding to window should trigger the animation

});
"use strict";

var row = document.querySelectorAll(".row");
imagesLoaded(row);
"use strict";

var swiper = new Swiper(".artistSwiper", {
  loop: true,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 1,
  spaceBetween: 24,
  autoplay: {
    delay: 5000
  },
  breakpoints: {
    992: {
      slidesPerView: 3,
      spaceBetween: 24
    }
  },
  speed: 500,
  pagination: {
    el: ".swiper-pagination"
  }
});
//# sourceMappingURL=all.js.map
