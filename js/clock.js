$(document).ready(function () {
  const $clock = $("#clock");

  function paintClock() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();

    $clock.text(`${padStartZero(hours)}:${padStartZero(minutes)}`);
  }

  function padStartZero(number) {
    const numberToString = String(number);
    return numberToString.padStart(2, "0");
  }

  paintClock();
  setInterval(paintClock, 1000 * 60);
});
