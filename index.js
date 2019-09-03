const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handClick() {
  const hasClass = title.classList.contains(CLICKED_CLASS);
  //contains는 clicked라는 클래스명을 추가적으로 존재하는지 아닌지 알려주지
  if (hasClass) {
    title.classList.remove(CLICKED_CLASS);
    // 처음에는 html에 btn 밖에없으니 지
  } else {
    title.classList.add(CLICKED_CLASS);
    // 클래스가 있으면 클래스를 비워줘 라는거야
  }
}

function init() {
  title.addEventListener("click", handClick);
}
init();
