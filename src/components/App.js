import React from 'react';
import Stories from './Stories';
import SearchStories from './SearchStories';
import './App.css';
const App = () => {
  console.log(App);
  return (
    <div className="app">
      <div className="interactions">
        <SearchStories />
      </div>
      <Stories />
    </div>
  );
};

export default App;
