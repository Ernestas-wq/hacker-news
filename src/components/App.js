import React from 'react';
import Stories from './Stories';
import './App.css';
const App = ({ stories, onArchive }) => {
  console.log(stories);
  return (
    <div className="app">
      <Stories stories={stories} onArchive={onArchive} />
    </div>
  );
};

export default App;
