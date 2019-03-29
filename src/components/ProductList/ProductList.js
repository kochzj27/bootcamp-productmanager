import React, { Component } from 'react';
import ProductItem from './ProductItem/ProductItem';
import './ProductList.css';

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bannerShow: null,
      bannerText: null,
      bannerType: null
    }

  }

  componentDidMount() {
    console.log("PRODUCT LIST MOUNTED");
    this.props.send({ type: 'getItem' });
  }

  render() {
    let prodList = null;
    if (this.props.products !== null) {
      prodList = this.props.products.map((item, idx) => {
        return (
          <ProductItem key={idx} title={item.title} price={item.price} img={item.url} id={item.id} />
        )
      });
    }

    return (
      <div>
        {this.state.bannerShow ?
          <div className={`alert alert-${this.state.bannerType} alert-dismissible fade show`} role="alert">
            You have successfully {this.state.bannerText} a product. The list below should reflect the changes.
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div> : null}
        <div className='productList'>
          {prodList ? prodList :
            (
              <p>Products currently unavailable.</p>
            )
          }
        </div>
      </div>
    )
  }
}

export default ProductList;