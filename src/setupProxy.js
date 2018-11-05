const proxy = require('http-proxy-middleware');

module.exports = function(app) {
app.use(proxy('/api',
  { target: 'https://138.68.70.151', secure: false }
));
}
