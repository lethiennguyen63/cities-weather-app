let enterLocation = document.getElementById("input-city");
let cityForm = document.querySelector("form");
let cityName = document.getElementById("city-name");
let degreeC = document.getElementById("resultC");
let degreeF = document.getElementById("resultF");
let image = document.getElementById("image");
let rainSong = document.querySelector(".rainsong");
let snowSong = document.querySelector(".snowSong");
let cloudsSong = document.querySelector(".cloudsSong");

cityForm.addEventListener("submit", async function (e) {
  e.preventDefault();
  try {
    const cityValue = enterLocation.value.trim();
    const city = await getCity(cityValue);
    // getCity(cityValue).then().catch();
    const key = city.Key;
    const name = city.EnglishName;
    const weather = await getWeather(key);
    cityName.innerHTML = `${name}`;
    const degC = weather.Temperature;
    const metric = degC.Metric;
    const resultC = metric.Value;
    degreeC.innerHTML = `${resultC}`;
    const degF = weather.Temperature;
    const imperial = degC.Imperial;
    const resultF = imperial.Value;
    degreeF.innerHTML = `${resultF}`;
    const imageBackground = weather.WeatherIcon;
    if (imageBackground <= 5) {
      image.setAttribute("src", "./image/clear.jpg");
    } else if (
      imageBackground > 5 ||
      imageBackground <= 14 ||
      imageBackground > 33
    ) {
      image.setAttribute("src", "./image/clouds.jpg");
    } else if (imageBackground > 14 || imageBackground <= 17) {
      image.setAttribute("src", "./image/storm.jpg");
    } else if (imageBackground >= 18 || imageBackground <= 19) {
      image.setAttribute("src", "./image/rain.jpg");
    } else if (imageBackground > 21 || imageBackground <= 29) {
      image.setAttribute("src", "./image/snow.jpg");
    } else {
      image.setAttribute("src", "./image/weather-background3.jpg");
    }

    // const weatherImage = await function()

    console.log(imageBackground);
  } catch (error) {
    console.error("error", error);
  }

  //   getCity(enterLocation.value.trim());
});

// cityForm.addEventListener("submit", function(e) {
//   e.preventDefault();
//   const cityValue = enterLocation.value.trim();
//   getCity(cityValue)
//     .then(city => {
//       const key = city.Key;
//       getWeather(key)
//         .then(weather => {
//           console.log(weather.Temperature);
//         })
//         .catch(error => console.error("error", error));
//     })
//     .catch(error => console.error("error", error));
// });
