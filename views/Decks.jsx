const React = require('react');

function Decks() {
  return (
    <div className="deckBtn">
      <button
        type="button"
        className="btn btn-info ms-5"
        style={{ height: '50vh', width: '30vh', fontSize: '30px' }}
      >
        Тема1
      </button>
      <button
        type="button"
        className="btn btn-info ms-5"
        style={{ height: '50vh', width: '30vh', fontSize: '30px' }}
      >
        Тема2
      </button>
      <button
        type="button"
        className="btn btn-info ms-5"
        style={{ height: '50vh', width: '30vh', fontSize: '30px' }}
      >
        Тема3
      </button>
    </div>
  );
}

module.exports = Decks;
