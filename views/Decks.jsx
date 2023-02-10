const React = require('react');
const Home = require('./Home');

function Decks() {
  return (
    <Home>
      <div className="deckBtn">
        <button
          type="button"
          className="btn btn-info ms-5"
          id="1"
          style={{
            height: '30vh',
            width: '30vh',
            fontSize: '30px',
            borderRadius: '15%',
          }}
        >
          Decks1
        </button>
        <button
          type="button"
          id="2"
          className="btn btn-info ms-5"
          style={{
            height: '30vh',
            width: '30vh',
            fontSize: '30px',
            borderRadius: '15%',
          }}
        >
          Decks2
        </button>
        <button
          type="button"
          id="3"
          className="btn btn-info ms-5"
          style={{
            height: '30vh',
            width: '30vh',
            fontSize: '30px',
            borderRadius: '15%',
          }}
        >
          Decks3
        </button>
      </div>
    </Home>
  );
}

module.exports = Decks;
