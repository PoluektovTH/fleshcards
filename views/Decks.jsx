const React = require('react');
const Home = require('./Home');

function Decks({ themes }) {
  return (
    <Home>
      <div
        className="deckBtn"
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          height: '90vh',
          width: '100vw',
        }}
      >
        <button
          type="button"
          className="btn btn-info ms-5"
          id="1"
          style={{
            height: '30vh',
            width: '30vh',
            fontSize: '42px',
            borderRadius: '15%',
            // transform: 'scale(1.2)',
          }}
        >
          {themes[0]}
        </button>
        <button
          type="button"
          id="2"
          className="btn btn-info ms-5"
          style={{
            height: '30vh',
            width: '30vh',
            fontSize: '42px',
            borderRadius: '15%',
            // transform: 'scale(1.2)',
          }}
        >
          {themes[1]}
        </button>
        <button
          type="button"
          id="3"
          className="btn btn-info ms-5"
          style={{
            height: '30vh',
            width: '30vh',
            fontSize: '42px',
            borderRadius: '15%',
            // transform: 'scale(1.2)',
          }}
        >
          {themes[2]}
        </button>
      </div>
    </Home>
  );
}

module.exports = Decks;
