const React = require('react');

function Card() {
  return (
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">Название темы</h5>
        <p class="card-text">Вопрос</p>
      </div>
    </div>
  );
}

module.exports = Card;
