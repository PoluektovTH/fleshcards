const React = require('react');
const Home = require('./Home');

function CardView({ theme, question, answer }) {
  return (
    <Home>
      <div className="card" style={{ fontSize: '24px' }}>
        <div className="card-body m-3">
          <h5 className="card-title">{theme}</h5>
          <p className="card-text">{question}</p>
          <input type="text" className="form-control mt-3 mb-3" id="input" />
          <button className="submitBtn btn btn-success" type="button">
            Подтвердить
          </button>
          <button className="skipBtn btn btn-warning ms-4" type="button" id="0">
            Пропустить вопрос
          </button>
        </div>
      </div>
    </Home>
  );
}

module.exports = CardView;
