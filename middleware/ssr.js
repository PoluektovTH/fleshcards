const React = require('react');
const ReactDOMServer = require('react-dom/server');

function renderComponent(
  reactComponent,
  props = {},
  options = { doctype: true }
) {
  const reactElement = React.createElement(reactComponent, {
    ...this.app.locals, // передать app.locals
    ...this.locals, // передать res.locals
    ...props, // передать пропсы
  });

  const html = ReactDOMServer.renderToStaticMarkup(reactElement);
  if (!options.doctype) return this.send(html);

  const document = `<!DOCTYPE html>${html}`;
  this.send(document);
}
module.exports = function ssr(req, res, next) {
  res.renderComponent = renderComponent; //>>>>res.renderComponent возвращает HTML код на основе renderComponent
  next();
};
