const inputEl = document.querySelector("input");

const bodyEl = document.querySelector("body");

inputEl.checked = JSON.parse(localStorage.getItem("mode"));
changeBg();

function changeBg()
{
    if (inputEl.checked)
    {
        bodyEl.style.backgroundColor = "Black";
    }
    else
    {
        bodyEl.style.backgroundColor = "white";
    }
}

inputEl.addEventListener("input", () =>
{
    changeBg();
    updateLocalStorage();
})


function updateLocalStorage() {
    localStorage.setItem("mode", JSON.stringify(inputEl.checked));
  }