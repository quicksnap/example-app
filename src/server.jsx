
import express    from 'express';
import favicon    from 'serve-favicon';
import serialize  from 'serialize-javascript';
import React      from 'react';
import path       from 'path';
import app        from './app';

var HtmlComponent = React.createFactory(require('./components/Html'));
var debug         = require('debug')('Sample');

var server = express();
server.set('state namespace', 'App');
server.use(favicon( path.join(__dirname, '/../build/favicon.ico') ));
server.use('/public', express.static( path.join(__dirname, '/../build') ));

server.use( (req, res, next) => {
  var context = app.createContext({});

  // Kick off server side actions here before dehyrdate

  debug('Exposing context state');
  var exposed = 'window.App=' + serialize(app.dehydrate(context)) + ';';

  debug('Rendering Application component into html');
  var html = React.renderToStaticMarkup(HtmlComponent({
      state   : exposed,
      markup  : React.renderToString(context.createElement())
  }));

  debug('Sending markup');
  res.send(html);
});

var port = process.env.PORT || 5000;
server.listen(port, () => {
  if (process.send) {
    process.send('online');
  } else {
    console.log('The server is running at http://localhost:' + server.get('port'));
  }
});
