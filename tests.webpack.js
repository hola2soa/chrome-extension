const context = require.context('./test', false, /index\.js$/);
context.keys().forEach(context);
