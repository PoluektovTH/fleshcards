// const { Button } = require('bootstrap');
const React = require('react');
const Layout = require('./Layout');

function Home({ children }) {
  return (
    <Layout>
      <nav
        className="navbar bg-primary px-5"
        data-bs-theme="dark"
        style={{ height: '10vh', fontSize: '42px' }}
      >
        <span>Flash Cards</span>
        <span>
          <a className="login px-2">Login</a>
          <a className="redirectBtn px-2">Home</a>
        </span>
      </nav>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          height: '90vh',
          width: '100vw',
        }}
      >
        {children}
      </div>
    </Layout>
  );
}

module.exports = Home;
