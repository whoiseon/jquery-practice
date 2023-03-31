$(function () {
  const images = ['0.jpeg', '1.jpeg', '2.jpeg'];
  const chosenImage = images[Math.floor(Math.random() * images.length)];
  const bgImage = $(
    `<img class='background' src="/images/${chosenImage}" alt="background" />`,
  );
  const bgOverlay = $('<div class="background-overlay"></div>');
  const $root = $('#root');

  $($root).append(bgOverlay);
  $($root).append(bgImage);
});
