function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');
let intervalId;

startButton.addEventListener('click', function () {
  if (!intervalId) {
    intervalId = setInterval(function () {
      const randomColor = getRandomHexColor();
      document.body.style.backgroundColor = randomColor;
    }, 1000);
    startButton.disabled = true;
  }
});

stopButton.addEventListener('click', function () {
  clearInterval(intervalId);
  intervalId = undefined;
  startButton.disabled = false;
});
