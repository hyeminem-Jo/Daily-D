const API_KEY = "7f5e79de9cb2c530ad9b065ce998f9d3";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log("You live in", lat, lon);
  // user의 위도와 경도값 가져오기

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  // openweathermap API url을 사용
  // units=metirc을 사용해 온도 표시 화씨 > 섭씨 변경

  fetch(url)
    // promise는 더 공부가 필요함
    // json파일을 받아 데이터를 불러오는 형식
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector("#weather .weather__city");
      const weatherCondition = document.querySelector("#weather .weather__condition");
      const weatherTemper = document.querySelector("#weather .weather__temper");

      city.innerText = `You're in ${data.name}`;
      weatherCondition.innerText = `날씨 : ${data.weather[0].main}`;
      weatherTemper.innerText = `기온 : ${data.main.temp}°`;
      // json파일에서 name, main, temp 속성을 받아 HTML 텍스트로 표시
    });
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
  // user 위치정보를 찾을 수 없을 때 알림
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
// nabigator 객체와 속성, 메서드를 사용하여 성공, 실패함수 호출