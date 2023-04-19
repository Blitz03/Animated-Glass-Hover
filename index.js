const shoesImgs = document.querySelectorAll(".shoes li img");

shoesImgs.forEach((img) => {
  img.addEventListener("mouseover", () => {
    changeImgSrc(img.src);
  });
});

function changeImgSrc(newSrc) {
  document.querySelector(".main-img").src = newSrc;
}
