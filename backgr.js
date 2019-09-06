const body = document.querySelector("body");

const IMG_NUMBER = 6;

function handleImgLoad() {
  console.log("f");
}

function paintImage(imgNumber) {
  const image = new Image();
  image.src = `image/${imgNumber + 1}.jpg`;
  image.classList.add("bgImage");
  body.prepend(image);
  //   image.addEventListener("loadend");
  //약간의 치팅으로 테이블 리스너를 이미지화 하는것 loadend 말그대로 로드엔드후 보여주기!

  //body.appendChild(image);
  //이미지를 객체로 불러와 저장한후 바디에 추가
}

function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);

  return number;
}
//랜덤숫자 만들기

function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}

init();
