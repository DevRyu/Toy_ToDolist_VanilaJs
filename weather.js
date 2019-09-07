const weather = document.querySelector(".js-weather");

const API_KEY = "input-apikey";

const COORDS = "coords";

function getWeather(lat, lng) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
  )
    .then(function(response) {
      return response.json();
      //서버가 보내는 JSON 데이터가 준비되면
    })
    .then(function(json) {
      const temprature = json.main.temp;
      const place = json.name;
      weather.innerText = `${temprature} @ ${place}`;
      // 그데이터에 weather DOM에서 온도와 지역을실행시킨다.
    });
  // then은 데이터가 우리한데 완전히 넘어온 다음 호출하는 함수
  // 사용한이유는 fetch가 완료된후 이용되어저야 하기 때문
  // 가져올 데이터 링크만들어가면됨
}

function saveCoords(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude,
    // 키와 벨류값이 같게 하려면 그냥 latitude한번만써도됨
    longitude
  };
  saveCoords(coordsObj);
  getWeather(latitude, longitude);
}

function handleGeoError(position) {
  console.log("please allow to see");
}
function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
  //네비게이터 api사용할거임
  //지오 로케이션은 클래스, 겟커런트포지션에 성공과 에러함수써주자
}

function loadCoords() {
  const loadedCoords = localStorage.getItem(COORDS);
  if (loadedCoords === null) {
    askForCoords();
  } else {
    const parseCoords = JSON.parse(loadedCoords);
    //저장된 값만 출력된다
    getWeather(parseCoords.latitude, parseCoords.longitude);
  }
}

function init() {
  loadCoords();
}

init();
