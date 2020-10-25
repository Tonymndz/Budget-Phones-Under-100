import React from 'react';
import './Title.css';

let Title = (): JSX.Element => {
  return <div className="Title">
    <h1>Best Budget phones under $100: Our picks for 2020 budget phones are the best of the best!</h1>
    { /*<p>If you're looking for a phone for $100 or under, all these phones will give you the best bang for your buck</p> */ }
    <hr />
    <div className="MarginBottom">
      <span>Updated September 20, 2020 ast 11:31 AM</span>
      <span>By Tony Mendez</span>
    </div>
    <img src="https://techjaja.com/wp-content/uploads/2019/04/smarphone-to-buy.jpg" alt="Bunch of Phones"/>
  </div>
}

export default Title;
