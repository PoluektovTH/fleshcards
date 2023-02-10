const React = require('react');
const Home = require('./Home');

function CardView({ theme, question, answer, id1 }) {
  return (
    <Home>
      <div className="card" style={{ fontSize: '24px' }}>
        <div className="card-body m-3">
          <h5 className="card-title">{theme}</h5>
          <p className="card-text">{question}</p>
          <form
            id="form"
            className="form"
            action={`/card/${id1}/1`}
            method="post"
          >
            <input
              name="answer"
              type="text"
              className="form-control mt-3 mb-3"
              id="input"
            />
            <div id="div"></div>
            <button
              id="submitBtn"
              className="submitBtn btn btn-success"
              type="submit"
            >
              Узнать ответ
            </button>
            <button
              className="skipBtn btn btn-warning ms-4"
              type="button"
              id="0"
            >
              Следующий вопрос
            </button>
          </form>
        </div>
      </div>
    </Home>
  );
}

module.exports = CardView;
