const React=require('react')

module.exports = function Layout({ children }) {
    return (
      <html lang="en">
        <head>
          <title>FlashCard</title>
          <link rel="stylesheet" href="..." />
          {/* <script src="script.js" /> */}
        </head>
        <body>{children}</body>
      </html>
    );
  };