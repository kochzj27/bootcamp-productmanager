import React, { Component } from 'react';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Main from '../Main/Main';
import './AppContainer.css';

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className='container'>
        <Header />
        <Navbar />
        <Main send={this.props.send} response={this.props.response} products={this.props.products} />
      </div>
    )
  }
}

export default AppContainer;