import React  from 'react';
import debug  from 'debug';
import app    from './app';
import { bootstrapAction } from './actions/BootstrapActions';

debug.enable('Sample*');

var bootstrapDebug  = debug('Sample');

var dehydratedState = window.App;

bootstrapDebug('Rehydrating app');
app.rehydrate(dehydratedState, (err, context) => {
  if (err) {
    throw err;
  }

  window.context = context;
  var mountNode = document.getElementById('app');

  bootstrapDebug('React Rendering');
  React.render(context.createElement(), mountNode, () => {
    bootstrapDebug('React Rendered');
  });
});
