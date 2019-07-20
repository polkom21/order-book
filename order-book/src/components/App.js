import React, { Component } from 'react'
import OrderBookBuy from './OrderBookBuy'
import OrderBookSell from './OrderBookSell'
import Purchases from './Purchases'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="OrderBook"><OrderBookBuy /></div>
        <div className="OrderBook"><OrderBookSell /></div>
        <div className="Purchases"><Purchases /></div>
      </div>
    )
  }
}

export default App;
