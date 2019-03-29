import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './UpdateProduct.css';

class UpdateProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      priceError: false,
      titleError: false,
      productItem: null,
      title: '',
      price: '',
      url: '',
      redirect: false,
    }
  }

  componentDidMount() {
    let singleProduct;
    if (this.props.products !== null) {
      singleProduct = this.props.products.filter(x => x.id === this.props.match.params.id);
    }
    this.setState({
      id: this.props.match.params.id,
      title: singleProduct ? singleProduct[0].title : '',
      price: singleProduct ? singleProduct[0].price : '',
      url: singleProduct ? singleProduct[0].url : '',
    }, () => {
      if (this.props.type === 'delete') {
        this.props.send({ type: 'deleteItem', data: this.state.id });
        this.setState({
          redirect: true,
        })
      }
    });
  }

  updateState = (e) => {
    let terr = this.state.titleError;
    let perr = this.state.priceError;
    if (this.state.price === '') {
      perr = true;
    } else {
      perr = false;
    }
    if (this.state.title.length < 4) {
      terr = true;
    } else {
      terr = false;
    }
    this.setState({
      [e.target.name]: e.target.value,
      titleError: terr,
      priceError: perr,
    });
  }

  deleteItem = (e) => {
    e.preventDefault();
    this.props.send({ type: 'deleteItem', data: this.state.id })
    this.setState({
      redirect: true,
    });
  }

  updateItem = (e) => {
    e.preventDefault();
    let newObj = {
      id: this.state.id,
      title: this.state.title,
      price: this.state.price,
      url: this.state.url,
    }
    this.props.send({ type: 'updateItem', data: newObj })
    this.setState({ redirect: true });
  }


  render() {
    return (
      <div>
        {this.state.redirect ? <Redirect to='/products' /> : null}

        <h3>Edit Product</h3>
        <form>
          <div className="form-group">
            <label htmlFor="title">Product Title</label>
            <input type="text" className="form-control" id="title" aria-describedby="titleError" name="title" placeholder="Title" onChange={this.updateState} value={this.state.title} />
            {this.state.titleError ? <small id="titleError" className="form-text text-muted">Please enter an actual title.</small> : null}
          </div>
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input type="text" className="form-control" id="price" placeholder="$999" name="price" aria-describedby="priceError" onChange={this.updateState} value={this.state.price} />
            {this.state.priceError ? <small id="priceError" className="form-text text-muted">Really??? You think thats a price?</small> : null}
          </div>
          <div className="form-group">
            <label htmlFor="price">Image Url (Optional)</label>
            <input type="text" className="form-control" id="url" name="url" placeholder="url" onChange={this.updateState} value={this.state.url} />
          </div>
          <div><button type="submit" className="btn btn-danger" onClick={this.deleteItem}>Delete</button><button type="submit" className="btn btn-primary" onClick={this.updateItem}>Update</button></div>
        </form>
      </div >
    )
  }
}

export default UpdateProduct;