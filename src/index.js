import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import store from './store';
import { STORY_ARCHIVE } from './constants/actionTypes';
ReactDOM.render(
  <React.StrictMode>
    <App stories={store.getState().storyState} onArchive={() => {}} />
  </React.StrictMode>,
  document.getElementById('root')
);
