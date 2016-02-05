module.exports = function (stringHtml) {
  return `
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>index</title>
    </head>
    <body>
      <div id="app">${stringHtml}</div>
      <script src="bundle.js"></script>
    </body>
    </html>
  `;
}