/**
 * Entry point for our app. The inner HTML is bootstrapped by the
 * server/build process.
 */

import React from 'react';

var Html = React.createClass({

  render() {
    return (
      <html>
        <head>
          <meta charSet="utf-8" />
          <title>{this.props.title}</title>
          <meta name="viewport" content="width=device-width, user-scalable=no" />
          <link rel="stylesheet" type="text/css" href="/public/index.css"/>
        </head>
      <body>
        <div id="app" dangerouslySetInnerHTML={{__html: this.props.markup}}></div>
      </body>
      <script dangerouslySetInnerHTML={{__html: this.props.state}}></script>

      {/* TODO: Might need to change this for node-webkit */}
      <script src="/public/client.js" defer></script>
    </html>
    );
  }

});

module.exports = Html;
