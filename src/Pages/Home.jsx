import React from 'react';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
const Home = () => {
  return (
    <div className='home'>
      <Header 
        brand={"Travel Assistant"}
        username={"Saurabh"}
        email={"saurabhdabas7@gmail.com"} 
      />
      <Main/>
    </div>
  )
}

export default Home;

