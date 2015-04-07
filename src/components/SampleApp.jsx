import React             from 'react';
import { FluxibleMixin } from 'fluxible';

// Uncomment me, then restart `gulp` for bug example.
// import { createStore } from 'fluxible/addons';

import './index.css';

var SampleApp = React.createClass({

  mixins: [FluxibleMixin],

  render() {
    return (
      <div className='sample-app'>
        Hello, sample app!
      </div>
    );
  }

});

module.exports = SampleApp;
