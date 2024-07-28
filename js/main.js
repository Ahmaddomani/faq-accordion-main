// start function
let imges = document.querySelectorAll("div.img");
imges.forEach((img) => {
  img.addEventListener("click", () => {
    img.classList.toggle("ch-bd");
    img.parentElement.parentElement.querySelector("p").classList.toggle("show");
  });
});
// end function
