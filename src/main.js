'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import initializeActions from './actions/initializeActions';
const rootElement = document.getElementById('app');

initializeActions.initApp();
ReactDOM.render(<Routes />, rootElement);
