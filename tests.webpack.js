global.__KARMA__ = true;

// --- Load all common js tests via webpack
var context = require.context('./test', true, /\.test\.js$/);
context.keys().forEach(context);