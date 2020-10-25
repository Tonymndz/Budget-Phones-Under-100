import React from 'react';
import './NavBar.css'

let NavBar = (): JSX.Element => {
  return <div className="NavBar">
    <div className="FlexAlign">
      <a href="http://under-120.bestbudgetphones.technology">Phones under $120</a>
      <a id="CurrentPage" href="http://under-100.bestbudgetphones.technology">Phones under $100</a>
      <a href="http://under-50.bestbudgetphones.technology">Phones under $50</a>
    </div>
  </div>
}

export default NavBar;

/*
*/