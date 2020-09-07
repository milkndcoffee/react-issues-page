import React, { useState, useEffect } from 'react';

const SearchBar = ({ getLink }) => {
  const [searchVal, setSearchVal] = useState('https://github.com/facebook/create-react-app');
  const [searchValToApi, setSearchValToApi] = useState('https://api.github.com/repos/facebook/create-react-app/issues?per_page=25&page=1');
  
  
  useEffect(() => {
    getLink(searchValToApi);
  }, [searchValToApi, getLink]);

  const handleSubmit = e => {
    e.preventDefault();

    let searchConstruct = searchVal;
    let leftConstruct = "https://api.github.com/repos/";
    let rightConstruct = "/issues?per_page=25&page=1";
    searchConstruct = searchConstruct.replace('https://github.com/',leftConstruct);
    searchConstruct = searchConstruct + rightConstruct;
    
    setSearchValToApi(searchConstruct);
    //console.log('submitted:' , searchVal);
    //getLink(searchValToApi);
  }

  const handleClick = e =>{
    console.log('submitted:' , searchVal);
    getLink(searchValToApi);

  }
 
  const onChange = (e) => {
    setSearchVal(e);
  }

  return (
    <React.Fragment>
      <div className="searchbar">
        <form onSubmit={handleSubmit}>
          <p>Enter a repo link: (example: https://github.com/facebook/create-react-app)</p>
          <input
            type="text"
            name="search"
            placeholder="https://github.com/facebook/create-react-app"
            onChange={(e) => onChange(e.target.value)}
          />
          <input type="submit" value="submit" onClick={e => handleClick()}/>
        </form>
      </div>
      <p>Current Issues From: <a href={searchValToApi}>{searchValToApi}</a></p>
    </React.Fragment>

  )
}

export default SearchBar;
