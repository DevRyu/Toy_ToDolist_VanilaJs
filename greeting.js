const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}
// 파일을 저장하는 로직

function handleSubmit(event) {
  event.preventDefault();
  //디폴트로 전체호출하는거 보호하고
  const currentValue = input.value;
  //html 인풋값 받아서
  paintGreeting(currentValue);
  //페인트그리드로 보내서 화면에 출력해보자
  saveName(currentValue);
  //저장하는 로직도 만들자

  // console.log(currentValue);
  //콘솔로그에 출력해주자
}

function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
  //엔터를 쳐도 알아듣기핟자
  //이벤트의 preventDefault 라는것임
  //보통이벤트는 form에 제출하면 root까지 다올라가서 반응함
  //그래서 세로고침됨
  //이벤트리스너에 제출기능과 실행함수로 넣어줌
}
function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  //삭제하고
  greeting.classList.add(SHOWING_CN);
  //
  greeting.innerText = `Hello ${text}`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName();
    //로컬스토리지에 유저가 없을때
  } else {
    paintGreeting(currentUser);
  }
  //로컬스토리지에에 유저가 있을떄
}
function init() {
  loadName();
}

init();
