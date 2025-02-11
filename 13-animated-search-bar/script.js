const magnifierEl =  document.querySelector(".magnifier");
const searchBarContEl = document.querySelector(".search-bar-container");

magnifierEl.addEventListener("click", ()=> {
    searchBarContEl.classList.toggle("active");
})