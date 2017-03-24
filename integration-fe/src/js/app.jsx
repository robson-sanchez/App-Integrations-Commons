import 'babel-polyfill';
import React from 'react';
import commons from 'symphony-integration-commons';
import routes from '../routes/Routes';
import Instructions from '../components/SetupInstructions/template';

const elem = document.getElementById('app');

/*
* connect                           invokes the "connect" function from commons
* @param          routes            default, or custom, routes file (Required)
* @param          elem              HTML DOM element where to render the configurator (Required)
* @param          Instructions      react dom for custom setup instructions (Optional)
*/
commons.connect(
  routes,
  elem,
  <Instructions />
);
