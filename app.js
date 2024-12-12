const apikey = "a47829c0ce6eb14b9a675eb2c0c2987b";
const apiurl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weathorIcon = document.querySelector(".weather-icon");

async function checkwether(city) {
  const response = await fetch(apiurl + city + `&appid=${apikey}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main == "clouds") {
      weathorIcon.src = "clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weathorIcon.src = "clear.png";
    } else if (data.weather[0].main == "Rain") {
      weathorIcon.src.src = "rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      weathorIcon.src.src = "drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weathorIcon.src.src = "mist.png";
    }

    document.querySelector(".weather").style.display = "block";
  }
  var data = await response.json();

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

  if (data.weather[0].main == "clouds") {
    weathorIcon.src = "clouds.png";
  } else if (data.weather[0].main == "Clear") {
    weathorIcon.src = "clear.png";
  } else if (data.weather[0].main == "Rain") {
    weathorIcon.src.src = "rain.png";
  } else if (data.weather[0].main == "Drizzle") {
    weathorIcon.src.src = "drizzle.png";
  } else if (data.weather[0].main == "Mist") {
    weathorIcon.src.src = "mist.png";
  }

  document.querySelector(".weather").style.display = "block";
  document.querySelector(".error").style.display = "none";
}

searchBtn.addEventListener("click", () => {
  checkwether(searchBox.value);
});
