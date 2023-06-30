import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

function calculateTimeDifference(endDate) {
  const currentTime = new Date().getTime();
  const targetTime = new Date(endDate).getTime();
  const timeDifference = targetTime - currentTime;

  if (timeDifference < 0) {
    Notiflix.Notify.warning('Please choose a date in the future');
    return null;
  }

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
}

const datetimePicker = document.getElementById('datetime-picker');
const startButton = document.querySelector('button[data-start]');
const daysValue = document.querySelector('span[data-days]');
const hoursValue = document.querySelector('span[data-hours]');
const minutesValue = document.querySelector('span[data-minutes]');
const secondsValue = document.querySelector('span[data-seconds]');

flatpickr('#datetime-picker', {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const endDate = selectedDates[0];

    if (endDate) {
      startButton.disabled = false;
    } else {
      startButton.disabled = true;
    }
  },
});

startButton.addEventListener('click', () => {
  const endDate = datetimePicker.value;
  const timeDifference = calculateTimeDifference(endDate);

  if (timeDifference) {
    startCountdown(timeDifference);
    startButton.disabled = true;
  }
});

function startCountdown(time) {
  let { days, hours, minutes, seconds } = time;

  const countdownInterval = setInterval(() => {
    if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
      clearInterval(countdownInterval);
      Notiflix.Notify.success('Countdown finished!');
      return;
    }

    seconds--;

    if (seconds < 0) {
      seconds = 59;
      minutes--;

      if (minutes < 0) {
        minutes = 59;
        hours--;

        if (hours < 0) {
          hours = 23;
          days--;
        }
      }
    }

    daysValue.textContent = addLeadingZero(days);
    hoursValue.textContent = addLeadingZero(hours);
    minutesValue.textContent = addLeadingZero(minutes);
    secondsValue.textContent = addLeadingZero(seconds);
  }, 1000);
}
