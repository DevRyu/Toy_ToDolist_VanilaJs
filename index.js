// console.log(document);
const title = document.querySelector("#title");

function handClick() {
  title.style.color = "red";
}

title.addEventListener("click", handClick);
