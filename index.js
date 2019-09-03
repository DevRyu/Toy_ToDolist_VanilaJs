const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handClick() {
  const currentClass = title.className;
  if (currentClass !== CLICKED_CLASS) {
    title.className = CLICKED_CLASS;
    // 클래스명이 없으면 CLICKED_CLASS = "clicked"으로 클래스만들어주고
  } else {
    title.className = "";
    // 클래스가 있으면 클래스를 비워줘 라는거야
  }
}

function init() {
  title.addEventListener("click", handClick);
}
init();
