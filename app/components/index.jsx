import React from 'react';
import { render } from 'react-dom';
import { Router, match } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import createLocation from 'history/lib/createLocation';
import routes from 'routes';
import { makeStore } from 'helpers';
import { Provider } from 'react-redux';
import { fromJS } from 'immutable';
import 'css/master.scss';

const history = createBrowserHistory();
const location = createLocation();

let initialState = window ? window.__INITIAL_STATE__ : {};

// Transform into Immutable.js collections, but leave top level keys untouched
Object.keys(initialState)
    .forEach(key => {
        initialState[key] = fromJS(initialState[key]);
    });

const store = makeStore(initialState);

match({routes, location}, (error, redirectLocation, renderProps)=>{
  render(
    <Provider store={store}>
      <Router children={routes} history={history} />
    </Provider>,
    document.getElementById('app')
  );
});
