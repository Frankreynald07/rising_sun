const weather_api = 'http://api.openweathermap.org/data/2.5/weather?q=miami,us&APPID=ca10a83000b46a985e0f69e06274f847';

window.addEventListener('load', function() {

});

function getWeatherData() {
  console.log(this.responseText);
}

const connection = new XMLHttpRequest();
connection.addEventListener('load', getWeatherData);
connection.open('GET', weather_api);
connection.send();
