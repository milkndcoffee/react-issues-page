import React from 'react';
import logo from '../img/logo.png'

const Header = () => {
  return (
    <header className="header">
      <div className="header-title">
        <h1>react-issues-page</h1>
        <img alt="logo" src={logo}></img>
      </div>
      <h2>This project displays 25 of the most recent issues of a github repo</h2>
      <p>This is part of the <a href="https://daveceddia.com/react-practice-projects/">6 suggested React Projects</a> by Dave Ceddia</p>
      <hr />

    </header>
  )
}

export default Header;
