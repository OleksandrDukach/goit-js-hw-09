const refs = {
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
  bodyElem: document.querySelector('body'),
  intervalColorChange: null,
};

refs.startBtn.addEventListener('click', startChangeColor);
refs.stopBtn.addEventListener('click', stopChangeColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function startChangeColor(event) {
  refs.intervalColorChange = setInterval(() => {
    refs.bodyElem.style.backgroundColor = getRandomHexColor();
  }, 1000);
  refs.startBtn.disabled = true;
}

function stopChangeColor(event) {
  clearInterval(refs.intervalColorChange);
  refs.startBtn.disabled = false;
  refs.bodyElem.style.backgroundColor = '#fff';
}
