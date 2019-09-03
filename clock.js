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
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
  //키보드 숫자 1 옆에있는 ``백틱기호를 사용할거야
  // 조건 if(?) `참` :(else) 거짓 순으로 되어있는 삼항연산자를 쓸거야
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
