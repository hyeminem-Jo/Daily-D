const API_KEY = "1c0df6c810c81d8611d1fc8b1549c05f" // API key 변수 넣기

function onGeoOk(position) {
  const lat = position.coords.latitude
  const lon = position.coords.longitude
  // 위의 값들을 geolocation 에서 얻은 값으로 바꿔보자
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  fetch(url)
    .then(response => response.json())
    .then((data) => {
      const city = document.querySelector("#weather .city")
      const weather = document.querySelector("#weather .weather")
      const temp = document.querySelector("#weather .temperature")
      city.innerText = data.name
      weather.innerText = data.weather[0].main
      temp.innerText = `${data.main.temp}°`
    })
}

function onGeoError() {
  alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)
