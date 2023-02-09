const React = require('react');
const Home = require('./Home');

function CardView({ question, answer }) {
  return (
    <Home>
      <div className="card" style={{ width: '18rem' }}>
        <div className="card-body">
          <h5 className="card-title">Название темы</h5>
          <p className="card-text">Вопрос</p>
        </div>
      </div>
    </Home>
  );
}

module.exports = CardView;
