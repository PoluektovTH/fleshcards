//TODO редирект на слеш при нажатии на home
const redirectBtn = document.querySelector('.redirectBtn');
const deckBtn = document.querySelector('.deckBtn');
const skipBtn = document.querySelector('.skipBtn');
const text = document.querySelector('.card-text');
const form = document.getElementById('form');
const input = document.getElementById('input');
const submitBtn = document.getElementById('submitBtn');
const div = document.getElementById('div');

let count = 0;

redirectBtn.addEventListener('click', async (event) => {
  window.location.href = `http://localhost:3000`;
  count = 0; //тут должен быть редирект на выбор тем
});

if (deckBtn) {
  deckBtn.addEventListener('click', async (event) => {
    const target = event.target.getAttribute('id');
    window.location.href = `http://localhost:3000/card/${target}/1`;
  });
}
if (skipBtn) {
  count = 1;
  skipBtn.addEventListener('click', async (event) => {
    count += 1;
    div.innerHTML = '';
    if (count <= 5) {
      let target = window.location.href.slice(-9, -1);
      const act = await fetch(`${target}${count}`);
      const rend = await act.text();
      text.innerText = rend;
    } else {
      window.location.href = `http://localhost:3000`;
      count = 1;
    }
  });
}

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const { method, action, answer } = event.target;
  const answ = await fetch(action, {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ answer1: answer.value }),
  });
  const data = await answ.text();
  div.innerHTML = data;
  console.log(data);
});
