// console.log(document);
const title = document.querySelector("#title");

function handClick() {
  title.style.color = "blue";
}

title.addEventListener("click", handClick);
