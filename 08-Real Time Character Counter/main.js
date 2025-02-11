const textAreaEl = document.getElementById("textarea");

const totalCounterEl = document.getElementById("total-counter");

const remainingCoEl = document.getElementById("remaining-counter");


textAreaEl.addEventListener("keyup", ()=> {
    updateCounter();
})


function updateCounter() {
    totalCounterEl.innerText =textAreaEl.value.length;

    remainingCoEl.innerText = textAreaEl.getAttribute("maxLength") -  textAreaEl.value.length;
}