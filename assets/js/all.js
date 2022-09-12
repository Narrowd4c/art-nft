"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
}); //

var triggerTabList = document.querySelectorAll("#aritstTab a");
triggerTabList = _toConsumableArray(triggerTabList);
triggerTabList.forEach(function (triggerEl) {
  var tabTrigger = new bootstrap.Tab(triggerEl);
  triggerEl.addEventListener("click", function (event) {
    event.preventDefault();
    tabTrigger.show();
  });
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

var artWork = document.querySelector("#art-work");
var msnry = new Masonry(artWork, {
  percentPosition: true,
  horizontalOrder: true
});

var msInit = function msInit() {
  var msnry = new Masonry(artWork, {
    percentPosition: true,
    horizontalOrder: true
  });
};

var collectionTab = document.querySelector("#collection-tab");

if (collectionTab) {
  collectionTab.addEventListener("shown.bs.tab", msInit);
}

imagesLoaded(artWork).on("progress", function () {
  msnry.layout();
});
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
  speed: 800,
  pagination: {
    el: ".swiper-pagination"
  }
});
//# sourceMappingURL=all.js.map
