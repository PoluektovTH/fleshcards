const React=require('react')

module.exports = function Layout({ title, children }) {
    return (
      <html lang="en">
        <head>
          <title>{title}</title>
          <link rel="stylesheet" href="..." />
          {/* <script src="script.js" /> */}
        </head>
        <body>{children}</body>
      </html>
    );
  };