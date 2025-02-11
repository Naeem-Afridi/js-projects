const imgcontEl = document.querySelector(".image-container");

const btnEl = document.querySelector(".btn");

btnEl.addEventListener("click", () => {
  imageNum = 10;
  addNewImg();
});

function addNewImg() {
  for (let i = 0; i < imageNum; i++) {
    const newImgEl = document.createElement("img");
    newImgEl.src = `https://picsum.photos/300?random=${Math.floor(
      Math.random() * 2000
    )}`;

    imgcontEl.appendChild(newImgEl);
  }
}
