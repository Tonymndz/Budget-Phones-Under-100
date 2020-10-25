import React from 'react';
import './App.css';
import Title from './Title';
import PhoneCards from './PhoneCards';
import FooterPhoneAdvice from './FooterPhoneAdvice';
import IntroText from './IntroText';
import NavBar from './NavBar';
import CommentSection from './CommentSection';
import { phoneList } from './data';

function App(): JSX.Element {
  let DisplayAllPhoneCards: JSX.Element[] = phoneList.map((phoneDetails, index) => {
    return <PhoneCards key={index} {...phoneDetails} />
  })

  return <div className="App">
    <NavBar />
    <div className="CondenseWidth">
      <Title />
      <IntroText />
      {DisplayAllPhoneCards}
      <FooterPhoneAdvice />
      <CommentSection />
    </div>
  </div>
}

export default App;

/*
Clone: https://www.cnet.com/news/best-cheap-earbuds-and-headphones-of-2020/ (Without the Table)
  - Use a different better looking table from a different site
  - Find my own phones under $50
  - Replace it


Tables:
  - https://techguided.com/best-cheap-gaming-mouse/
  - https://headphonesaddict.com/best-cheap-headphones/

Future blog sites
  - Add table of contents like https://www.rtings.com/mouse/reviews/best/cheap-gaming-mouse#recommendation_157176
*/