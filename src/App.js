import React, { Component } from 'react';
import AppContainer from './components/AppContainer/AppContainer';
import io from 'socket.io-client';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: null,
      products: null,
    }
    this.socket = io('http://localhost:1337/');
    this.updateResponse = this.updateResponse.bind(this);
  }

  componentDidMount = () => {
    this.socket.on('greeting', (data) => { //4
      console.log("CLIENT > socket.on greeting")
      console.log(data.msg); //5
      this.socket.emit('thankyou', {
        msg: 'client responded'
      });
      this.sendResponse({ type: 'getItem' });
    });
  }

  sendResponse = (event) => {
    this.socket.emit(event.type, { msg: event.data });
    this.socket.on('success', (data) => {
      this.updateResponse(data.msg);
    });

    this.socket.on('newdata', (data) => {
      this.setState({
        products: data.payload,
      });
    });
  }

  updateResponse(data) {
    this.setState({
      response: { type: data.status, action: data.action, show: true },
    });
  }

  render() {
    return (
      <div className="App" >
        <AppContainer send={this.sendResponse} response={this.state.response} products={this.state.products} />
      </div>
    );
  }
}

export default App;
