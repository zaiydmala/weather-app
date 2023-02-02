import { getLocalTime, kelvinToCelcius, kelvinToFahrenheit, toFahrenheit, toCelsius  } from "../utils.js";
(function displayWeather() {
  /*Variables declaration */
  const containerForm = document.querySelector('[container-form]');
  const userEntry = document.querySelector('[new-entry]');
  const toggleSwitch = document.querySelector('[switch]');
  const locButton = document.querySelector('[location-button]');
  let input = 'New York';
  let searchTerm;

  /*Event Listeners for Location and user input */
  locButton.addEventListener('click', (event) => {
    event.preventDefault();
    const successCallback = (location) => {
      let userLocation = `${
        'lat=' + location.coords.latitude + '&lon=' + location.coords.longitude
      }`;
      getWeather(userLocation);
    };
    const errorCallback = (error) => {
      alert(error);
    };
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  });

  containerForm.addEventListener('submit', (event) => {
    event.preventDefault();
    input = userEntry.value;

    getWeather(input);
    clear();
  });

  const cityName = document.querySelector('[cityName]');
  const cityTemperature = document.querySelector('[cityTemperature]');
  const cityWeatherDescription = document.querySelector('[cityWeather]');
  const tempFeeling = document.querySelector('[tempFeeling]');
  const humidityMeter = document.querySelector('[humidity]');
  const windMeter = document.querySelector('[wind]');
  const weatherImg = document.getElementById('image');
  const datePreview = document.querySelector('[date-time]');
  const dateAndTime = data.timezone;
  const weatherDescription = data.weather[0].description;
  let temp = data.main.temp;
  let tempFeel = data.main.feels_like;

  cityName.innerHTML = `${data.name}, ${data.sys.country}`;
  datePreview.innerHTML = getLocalTime(dateAndTime);

  if (toggleSwitch.checked) {
    temp = kelvinToFahrenheit(temp);
    tempFeel = kelvinToFahrenheit(tempFeel);
    cityTemperature.innerHTML = `${temp + '&degF'}`;
  } 
  else {
    temp = kelvinToCelcius(temp);
    tempFeel = kelvinToCelcius(tempFeel);
    cityTemperature.innerHTML = `${temp + '&degC'}`;
  }

  weatherImg.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
  
  cityWeatherDescription.innerHTML = weatherDescription.charAt(0).toUpperCase() + weatherDescription.slice(1);
  
  tempFeeling.innerHTML = `${'Feels like: '}${tempFeel + '&deg'}`;

  humidityMeter.innerHTML = `${'Humidity levels: '} ${ data.main.humidity + '%'}`;
  windMeter.innerHTML = `${'Wind: '}${data.wind.speed + 'k/m'}`;

  toggleSwitch.addEventListener('change', () => {
    if (toggleSwitch.checked) {
      setTimeout(() => {
        temp = toFahrenheit(temp);
        tempFeel = toFahrenheit(tempFeel);
        cityTemperature.innerHTML = `${temp + '&degF'}`;
        tempFeeling.innerHTML = `${'Feels like: '}${tempFeel + '&deg'}`;
      }, 150);
    } else {
      setTimeout(() => {
        temp = toCelsius(temp);
        tempFeel = toCelsius(tempFeel);
        cityTemperature.innerHTML = `${temp + '&degC'}`;
        tempFeeling.innerHTML = `${'Feels like: '}${tempFeel + '&deg'}`;
      }, 150);
    }
  });

  








})();  