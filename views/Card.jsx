const React = require('react');

function Card({ question, answer }) {
  return (
    <div className="card">
      <p>Название темы</p>
      <p>{question}</p>
      <p>{answer}</p>
    </div>
  );
}

module.exports = Card;
