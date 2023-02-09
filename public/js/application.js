//TODO редирект на слеш при нажатии на home
const redirectBtn = document.querySelector('.redirectBtn');

redirectBtn.addEventListener('click', async (event) => {
  const response = await fetch('/');//тут должен быть редирект на выбор тем
});
