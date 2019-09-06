const API_KEY = "9c6579a5a1cefd4656d3f1b2fc06e843";

const COORDS = "coords";

function getWeather(lat, lng) {
  fetch(`https//:api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}
    `);
  // 가져올 데이터 링크만들어가면됨
}

function saveCoords(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude: latitude,
    // 키와 벨류값이 같게 하려면 그냥 latitude한번만써도됨
    longitude: longitude
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
