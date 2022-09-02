const mobileMenu = document.querySelector("#mobile-menu");
const mobileSearch = document.querySelector("#mobile-search");
const toggleSearch = document.querySelector("#toggleSearch");
const menuIcon = document.querySelector("#menuIcon");

function toggleMenu(x) { 
  x.classList.toggle("change");
  mobileMenu.classList.toggle("d-none");
}
function removeMenu(x) { 
    menuIcon.classList.toggle("change")
    x.parentElement.classList.add("d-none"); 
}
function removeBtn(x) { 
  x.parentElement.classList.add("d-none"); 
}

toggleSearch.addEventListener("click", (e)=>{
  e.stopPropagation()
  mobileSearch.classList.toggle("d-none")
  }
)