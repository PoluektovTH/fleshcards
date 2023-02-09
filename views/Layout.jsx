const React = require('react');

module.exports = function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>FlashCard</title>
        <link rel="stylesheet" href="..." />
        <script defer src="/js/application.js" />
      </head>
      <body>{children}</body>
    </html>
  );
};
