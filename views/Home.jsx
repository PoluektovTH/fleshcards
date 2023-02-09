// const { Button } = require('bootstrap');
const React = require('react');
const Decks = require('./Decks');
const Layout = require('./Layout');
const Card = require('./Card');

function Home() {
  return (
    <Layout>
      <div className="header">
        <div>Flash Cards</div>
        <div className="navBar">
          <a className="login">Login</a>
          <a className="redirectBtn">Home</a>
        </div>
      </div>
      <div>
        <Decks />
      </div>
    </Layout>
  );
}

module.exports = Home;
