const clockContainer = document.querySelector(".js-clock");
//js-clock의 클래스를 찾아주지
//쿼리셀렉터는 엘리먼트(내용)의 자식을 탐색하지
const clockTitle = clockContainer.querySelector("h1");
//js-clock의 자식만 보고싶은거야 h1의 엘리먼트만!
function getTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  clockTitle.innerText = `${hours}:${minutes}:${seconds}`;
  //키보드 숫자 1 옆에있는 ``백틱기호를 사용할거야
}

function init() {
  getTime();
}

init();
