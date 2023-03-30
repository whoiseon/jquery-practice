$(function () {
  const $clock = $('#clock');

  function paintClock() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();

    $clock.text(`${padStartZero(hours)}:${padStartZero(minutes)}`);
  }

  function padStartZero(date: number) {
    const numberToString = String(date);
    return `${numberToString.length === 1 ? '0' : ''}${numberToString}`;
  }

  paintClock();
  setInterval(paintClock, 1000);
});
