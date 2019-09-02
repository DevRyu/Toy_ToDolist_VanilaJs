const title = document.querySelector("#title");

const BASE_COLOR = "rgb(52, 73, 94)";

const OTHER_COLOR = "#7f8c8d";

function handClick() {
  const currentColor = title.style.color;
  console.log(currentColor);
  if (currentColor === BASE_COLOR) {
    title.style.color = OTHER_COLOR;
  }
  //현재색과 같은 색갈이면 base컬러를 other로 바꿔달라는말
  else {
    title.style.color = BASE_COLOR;
  } //현재색과 다르면 BASE컬러로 해달라는말
}

function init() {
  title.style.color = BASE_COLOR;
  title.addEventListener("click", handClick);
}
init();

onf.addEventListener("offline");
