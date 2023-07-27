// Описан в документации
import flatpickr from 'flatpickr';
// Дополнительный импорт стилей
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  startBtn: document.querySelector('button[data-start]'),
  timePick: document.querySelector('#datetime-picker'),
  dataDay: document.querySelector('[data-days]'),
  dataHour: document.querySelector('[data-hours]'),
  dataMin: document.querySelector('[data-minutes]'),
  dataSec: document.querySelector('[data-seconds]'),
};

refs.startBtn.setAttribute('disabled', true);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0].getTime() < options.defaultDate.getTime()) {
      return window.alert('Please choose a date in the future');
    }
    refs.startBtn.removeAttribute('disabled');

    refs.startBtn.addEventListener('click', startTimer);
    function addLeadingZero(value) {
      return value.toString().padStart(2, '0');
    }
    function startTimer(evt) {
      const timeInterval = setInterval(() => {
        const date = new Date();
        const diffTime = selectedDates[0].getTime - date.getTime();
        if (diffTime <= 0) {
          return clearInterval(timeInterval);
        }
        refs.dataDay.textContent = addLeadingZero(convertMs(diffTime).days);
        refs.dataHour.textContent = addLeadingZero(convertMs(diffTime).hours);
        refs.dataMin.textContent = addLeadingZero(convertMs(diffTime).minutes);
        refs.dataSec.textContent = addLeadingZero(convertMs(diffTime).seconds);
      }, 1000);
    }
  },
};

flatpickr('#datetime-picker', options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
