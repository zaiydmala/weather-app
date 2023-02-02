async function getWeather(input) {
    typeOfQuery(input);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?${searchTerm}&appid=8bca1959c6a202f7005fb61ead8b63e5&units=standard`,
        { mode: 'cors' }
      );
      const data = await response.json();
      displayWeather(data);
    } catch (err) {
      alert(err);
    }
}

/* Type of search function*/
function typeOfQuery(input) {
  if (isNaN(input) && containsNumber(input)) {
    searchTerm = input;
  } 
  else if (isANumber(input) && input.length <= 5) {
    searchTerm = `${'zip='}${input}`;
  } 
  else {
    searchTerm = `${'q='}${input}`;
  }
}

/* Clear user input function*/
function clear() {
  userEntry.value = '';
}

/* Is a number or doesn't contain a number functions */
function isANumber(input) {
  return !/\D/.test(input);
}
function containsNumber(input) {
  return /\d/.test(input);
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

export { data, getLocalTime, toCelsius, toFahrenheit, kelvinToCelcius, kelvinToFahrenheit, getWeather, displayWeather, containsNumber, clear, isANumber };