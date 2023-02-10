//TODO редирект на слеш при нажатии на home
const redirectBtn = document.querySelector('.redirectBtn');
const deckBtn = document.querySelector('.deckBtn');
const skipBtn = document.querySelector('.skipBtn');

redirectBtn.addEventListener('click', async (event) => {
  const response = await fetch('/'); //тут должен быть редирект на выбор тем
});

deckBtn.addEventListener('click', async (event) => {
  const target = event.target.getAttribute('id');
  console.log(target);
  window.location.href = `http://localhost:3000/card/${target}`;
  // const response = await fetch(
  //   `/card/${target}`
  //   //тут темы заменяются на вопрос
  // );
  // const inp = await response.text();
  // console.log(inp);
});

skipBtn.addEventListener('click', async (event) => {
  const target = event.target.getAttribute('id');
  target += 1;
  console.log(target);
  // window.location.href = `http://localhost:3000/card/:id/${target}`;
  // const response = await fetch(
  //   `/card/${target}`
  //   //тут темы заменяются на вопрос
  // );
  // const inp = await response.text();
  // console.log(inp);
});
