/*
  References:
  - axios & setstates: D:\Documents\Study\React js\Traversy Media Course\react_crash_todo 
  - project instructions: https://daveceddia.com/react-practice-projects/
  - data to utilize: https://github.com/facebook/create-react-app/issues 
  - github API: https://developer.github.com/v3/issues/ 
    https://api.github.com/repos/facebook/create-react-app/issues?per_page=25&page=1 OAuth: https://gist.github.com/btoone/2288960 
  - example: https://github.com/dceddia/github-issues-viewer 

  TODO:
  [x] Start by fetching open issues from Github’s API and displaying them in a list. 
    You could use static data for this too.
  [ ] Search function >:) optional
  [ ] Add a pagination control to allow navigating through the entire list of issues.
  [ ] For added difficulty, implement the issue detail page too. Render the issue’s Markdown text 
    and its comments using something like react-markdown.
*/


import React, { useState, useEffect } from 'react';
import Header from './components/ui/Header';
import Footer from './components/ui/Footer';

import './App.css';

function App() {
  const [titles, setTitles] = useState('');

  //API
  useEffect(() => {
    fetch('https://api.github.com/repos/facebook/create-react-app/issues?per_page=25&page=1')
      .then(res => res.json())
      .then(data => {
        setData(data);
      })
      .catch(err => Promise.reject(err));;

  }, []);

  const setData = ( data ) => {
    let titles = [];
    data.map((item) => (
      titles.push(
        <li>{item.title}</li>
        )
    ));
    setTitles(titles);
  }

  
  return (
    <div className="container">
      <Header />
      <ul>
        {titles}
      </ul>
      <Footer />
    </div>
  );
}

export default App;
