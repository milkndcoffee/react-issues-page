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


//Components
import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import IssueList from './components/IssueList';

//UI
import Header from './components/ui/Header';
import Footer from './components/ui/Footer';

//Styling
import './App.css';

function App() {
  const [issues, setIssues] = useState([
    {
      'id':'1',
      'name': 'loading...',
    }
  ]);
  const [link, setLink] = useState('https://api.github.com/repos/facebook/create-react-app/issues?per_page=25&page=1');

  //API
  useEffect(() => {
    fetch(link)
      .then(setIssues({'name':'Loading Data...'}))
      .then(res => res.json())
      .then(data => {
        setData(data);
      })
      .catch(err => {
        err = 'NetworkError' ? setIssues({'name': 'Could Not Load'}) : setIssues({'name': err})
      });;

  }, [link]);

  const setData = ( data ) => {
    let tempData = [];
    data.map((item) => (
      tempData.push({
        "id":item.id,
        "name":item.title,
        "body":item.body
      })
    ));
    setIssues(tempData);
  }


 

  console.log(link);
  
  return (
    <div className="container">
      <Header />
      <SearchBar getLink={(e) => setLink(e)} />
      <IssueList issues={issues}/>
      <Footer />
    </div>
  );
}

export default App;
