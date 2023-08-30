import React from 'react';
import bunchOfPhonesImg from './images/organized-phones.jpg'
import './Title.css';

let Title = (): JSX.Element => {
  return <div className="Title">
    <h1>Mastering Affordability: The Definitive Guide to Sub-$100 Budget Phones</h1>
    { /*<p>If you're looking for a phone for $100 or under, all these phones will give you the best bang for your buck</p> */ }
    <hr />
    <div className="MarginBottom">
      <span>Updated August 20, 2023 at 11:31 AM</span>
      <span>By Tony Mendez</span>
    </div>
    <img src={bunchOfPhonesImg} alt="Bunch of Phones"/>
  </div>
}

export default Title;
