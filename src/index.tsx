import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import './sass/style.scss';
import createStore from './stores/index.ts';
import reducer from './reducers/index.ts';
import App from './components/App.tsx';

var store = createStore(reducer, '');

document.addEventListener('deviceready', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );

}, false);
