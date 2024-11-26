

document.querySelector('.form').addEventListener('submit', (event) => {
  event.preventDefault();

  const form = event.target;
  const delay = parseInt(form.delay.value);
  const state = form.state.value;

  createPromise(delay, state)
    .then((message) => {
      iziToast.success({ title: 'Success', message });
    })
    .catch((message) => {
      iziToast.error({ title: 'Error', message });
    });
});

function createPromise(delay, state) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(`✅ Fulfilled promise in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise in ${delay}ms`);
      }
    }, delay);
  });
}
