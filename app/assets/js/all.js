const mobileMenu = document.querySelector("#mobile-menu");
const mobileSearch = document.querySelector("#mobile-search");
const toggleSearch = document.querySelector("#toggleSearch");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu(e) { 
  e.classList.toggle("change");
  mobileMenu.classList.toggle("d-none");
}
function removeMenu(e) { 
    menuIcon.classList.toggle("change")
    e.parentElement.classList.add("d-none"); 
}
function removeBtn(e) { 
  e.parentElement.classList.add("d-none"); 
}

toggleSearch.addEventListener("click", (e)=>{
  e.stopPropagation()
  mobileSearch.classList.toggle("d-none")
  }
)
//
let triggerTabList = document.querySelectorAll("#aritstTab a");
triggerTabList = [...triggerTabList];
triggerTabList.forEach(function (triggerEl) {
  let tabTrigger = new bootstrap.Tab(triggerEl);
  triggerEl.addEventListener("click", function (event) {
    event.preventDefault();
    tabTrigger.show();
  });
});