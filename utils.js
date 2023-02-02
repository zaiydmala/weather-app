async function getWeather(input) {
    typeOfQuery(input);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?${searchTerm}&appid=49257f6591cfc3ed8daf0b5970d519cb&units=standard`,
        { mode: 'cors' }
      );
      const data = await response.json();
      displayWeather(data);
    } catch (err) {
      alert(err);
    }
}

function displayWeather(data) {
    /* Set background depending on weather*/
    switch (data.weather[0].main) {
      case 'Clear':
        document.body.style.backgroundImage = 'url("clear.jpg")';
        break;
      case 'Clouds':
        document.body.style.backgroundImage = 'url("cloudy.jpg")';
        break;
      case 'Rain':
      case 'Drizzle':
      case 'Mist':
        document.body.style.backgroundImage = 'url("rain.jpg")';
        break;
      case 'Thunderstorm':
        document.body.style.backgroundImage = 'url("thunderstorm.jpg")';
        break;
      case 'Snow':
        document.body.style.backgroundImage = 'url("snow.jpg")';
        break;
      default:
        break;
    }
}

function kelvinToCelcius(temp) {
    temp = parseFloat(temp);
    temp = Math.round((temp = temp - 273.15));
    return temp;
  }
  function kelvinToFahrenheit(temp) {
    temp = parseFloat(temp);
    temp = Math.round(((temp = temp - 273.15) * 9) / 5 + 32);
    return temp;
  }
  function toFahrenheit(temp) {
    temp = parseFloat(temp);
    temp = Math.round((temp = temp * 1.8 + 32));
    return temp;
  }
  function toCelsius(temp) {
    temp = parseFloat(temp);
    temp = Math.round((temp = (temp - 32) * (5 / 9)));
    return temp;
  }

function getLocalTime(data) {
    let date = new Date();
    let time = date.getTime();
    let localOffset = date.getTimezoneOffset() * 60000;
    let utc = time + localOffset;
    let localTime = utc + 1000 * data;
    let localTimeDate = new Date(localTime);
    return localTimeDate.toLocaleString();
}

export { getLocalTime, kelvinToCelcius, kelvinToFahrenheit, toFahrenheit }