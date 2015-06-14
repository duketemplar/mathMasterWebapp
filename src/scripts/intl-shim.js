// This is loaded from webpack with the ProvidePlugin so it gets defined before react-intl is run
var Intl = global.Intl; // eslint-disable-line no-undef
if (!Intl) {
  Intl = require('intl/Intl');  // eslint-disable-line no-undef
  global.IntlPolyfill = Intl;
  // here we could load async languages but then we need to load react-intl async and have a callback for when react can start.
  require('intl/locale-data/jsonp/en.js');
  require('intl/locale-data/jsonp/sv.js');
}
module.exports = Intl;
