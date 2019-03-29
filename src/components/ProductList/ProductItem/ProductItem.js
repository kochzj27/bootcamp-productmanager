import React from 'react';
import { Link } from 'react-router-dom';
import './ProductItem.css';

const ProductItem = (props) => {
  return (
    <div className='card'>
      <img className='card-image' src={props.img} alt={props.title} />
      <div className='card-body'>
        <h3>{props.title}</h3>
        <h3>${props.price}</h3>
        <button className='btn btn-warning'><Link to={`/products/edit/${props.id}`} className='btn-link'>Edit</Link></button>
        <button className='btn btn-danger'><Link to={`/products/delete/${props.id}`} className='btn-link'>Delete</Link></button>
      </div>
    </div>
  )
}

export default ProductItem;