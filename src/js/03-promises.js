const newForm = document.querySelector('.form');

function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
  return promise;
}

newForm.addEventListener('submit', createNewPromise);

function createNewPromise(evt) {
  evt.preventDefault();
  const delay = Number(evt.target[0].value);
  const step = Number(evt.target[1].value);
  const amount = Number(evt.target[2].value);

  for (let i = 0; i <= amount; i += 1) {
    createPromise(2, 1500)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
}
