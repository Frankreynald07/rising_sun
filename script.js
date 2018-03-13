const weather_api = 'http://api.openweathermap.org/data/2.5/weather?q=miami,us&APPID=ca10a83000b46a985e0f69e06274f847';

window.addEventListener('load', function() {
});

function getWeatherData() {
  const data = JSON.parse(this.responseText);
  console.dir(data);
  const sunrise = data.sys.sunrise;
  const sunset = data.sys.sunset;
  const currentTime = new Date().getTime()/1000;
  const timeSinceSunrise = currentTime - sunrise;
  const noonTime = sunrise + ((sunset - sunrise) / 2);
  console.log(noonTime);
}

const connection = new XMLHttpRequest();
connection.addEventListener('load', getWeatherData);
connection.open('GET', weather_api);
connection.send();
