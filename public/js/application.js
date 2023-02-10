//TODO редирект на слеш при нажатии на home
const redirectBtn = document.querySelector('.redirectBtn');
const deckBtn = document.querySelector('.deckBtn');
const skipBtn = document.querySelector('.skipBtn');
const text = document.querySelector('.card-text');

redirectBtn.addEventListener('click', async (event) => {
  const response = await fetch('/'); //тут должен быть редирект на выбор тем
});

if (deckBtn) {
  let count = 0;
  deckBtn.addEventListener('click', async (event) => {
    const target = event.target.getAttribute('id');
    window.location.href = `http://localhost:3000/card/${target}/1`;
  });
}

if (skipBtn) {
  let count = 1;
  skipBtn.addEventListener('click', async (event) => {
    count += 1;
    if (count <= 5) {
      let target = window.location.href.slice(-9, -1);
      console.log(target);
      console.log(count);
      const act = await fetch(`${target}${count}`);
      const rend = await act.text();
      text.innerText = rend;
    } else {
      window.location.href = `http://localhost:3000`;
      count = 1;
    }
  });
}
