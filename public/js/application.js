//TODO редирект на слеш при нажатии на home
const redirectBtn = document.querySelector('.redirectBtn');
const deckBtn = document.querySelector('.deckBtn');

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
