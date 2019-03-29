import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Home/Home';
import ProductList from '../ProductList/ProductList';
import UpdateProduct from '../UpdateProduct/UpdateProduct';
import NewProduct from '../NewProduct/NewProduct';
import './Main.css';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className='main-cont'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/products' render={() => (<ProductList send={this.props.send} response={this.props.response} products={this.props.products} />)} />
          <Route path='/products/new' render={() => (<NewProduct send={this.props.send} />)} />
          <Route path='/products/edit/:id' render={(props) => (<UpdateProduct {...props} send={this.props.send} products={this.props.products} />)} />
          <Route path='/products/delete/:id' render={(props) => (<UpdateProduct {...props} send={this.props.send} type='delete' products={this.props.products} />)} />
        </Switch>
      </div>
    )
  }
}

export default Main;