import React from 'react';
import { useState, useEffect} from 'react';
import store from './store/store';
import { Provider } from 'react-redux';
import HomePage from './components/HomePage';

function App() {
  return (
    <Provider store={store}>
      <HomePage></HomePage>
    </Provider>
  )
}

export default App