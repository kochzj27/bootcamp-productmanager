import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = (props) => {
  return (
    <div className='navigation'>
      <h3 className='nav nav1'>
        <Link to='/'>Home</Link>
      </h3>
      <h3 className='nav nav1'>
        <Link to='/products'>Product List</Link>
      </h3>
      <h3 className='nav'>
        <Link to='/products/new'>Product Creation</Link>
      </h3>
    </div>
  )
}

export default Navbar;