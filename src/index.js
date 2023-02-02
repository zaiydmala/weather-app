import { getLocalTime, kelvinToCelcius, kelvinToFahrenheit, toFahrenheit  } from "../utils.js";
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



})();  