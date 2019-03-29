import React from 'react';
import './Home.css';

const Home = (props) => {
  return (
    <div className='home-cont'>
      <h2>Home Page</h2>
      <p>
        Welcome to The Shopshop Product Management System.
         Here we can manage all of our products that we sell at our shop. Adding new products,
          removing old and outdated ones, and modifying those that have changed.
      </p>
    </div>
  )
}

export default Home;