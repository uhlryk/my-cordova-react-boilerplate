import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import style from './sass/style.scss';
import createStore from './stores/index.js';
import reducer from './reducers/index.js';
import App from './components/App.jsx';

var store = createStore(reducer);

document.addEventListener('deviceready', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );

}, false);
