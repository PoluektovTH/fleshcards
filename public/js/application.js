//TODO редирект на слеш при нажатии на home
const redirectBtn = document.querySelector('.redirectBtn');
const deckBtn = document.querySelector('.deckBtn');

redirectBtn.addEventListener('click', async (event) => {
  const response = await fetch('/'); //тут должен быть редирект на выбор тем
});

deckBtn.addEventListener('click', async (event) => {
  const target = event.target;
  console.log(target.innerText);
  window.location.href = `http://localhost:3000/${target.innerText}`;
  //   const response = await fetch(
  //     `/${target.innerText}`
  //     //тут темы заменяются на вопрос
  //   );
  //   const inp = await response.text();
  //   console.log(inp);
});
