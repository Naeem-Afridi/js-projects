const containerEl = document.querySelector(".container");


for (let index = 0; index < 30; index++) {
    const colorContainer = document.createElement("div");

    colorContainer.classList.add("color-container");

    containerEl.appendChild(colorContainer);
}

const colorContainerEls = document.querySelectorAll(".color-container");

genrateColors();

function genrateColors()
{
    colorContainerEls.forEach((colorContainer) =>
    {
        const newCode = randomColor();
        colorContainer.style.backgroundColor = "#" + newCode;
        colorContainer.innerText = "#" + newCode;
    })
}

function randomColor()
{
    let chars = '0123456789abcdef';
    const colorCodeLength = 6;
    let colorCode = "";

    for (let index = 0; index < colorCodeLength; index++) {
        const randomNo = Math.floor(Math.random() * chars.length);
        colorCode += chars.substring(randomNo, randomNo + 1);        
    }
    return colorCode;
}