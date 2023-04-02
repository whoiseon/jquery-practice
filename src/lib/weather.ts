$(function () {
  function onGeoSuccess(position: GeolocationPosition) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    $.ajax({
      url: url,
      success: function (data) {
        const weather = data.weather[0].main;
        const city = data.name;
        const temp = data.main.temp;
        const $weather = $('#weather p:first-child');
        const $city = $('#weather p:last-child');
        $weather.text(`${weather} / ${temp}℃`);
        $city.text(city);
      },
    });
  }

  function onGeoError() {
    alert("Can't find you. No weather for you.");
  }

  navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
});
