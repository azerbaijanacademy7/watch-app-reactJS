import React, {Component} from 'react';
import {Header} from './components/Header'
import {Watch} from './watchScreen/WatchDetails'
import ProductData from './ProductData';

class App extends Component {
  state = {
    productData: ProductData,
    currentPos: 0,
    showTime: 0
  }
  onRadioClick = (pos) => {
    this.setState({currentPos: pos})
  }
  onFeatureBtnClick = (pos) => {
    this.setState({showTime: pos})
  }
  render(){
    return (
    <div className="App">
      <Header/>
      <Watch data = {this.state.productData} currentImage={this.state.productData.colorOptions.[this.state.currentPos].imageUrl} currentPos={this.state.currentPos} showTime={this.state.showTime} onRadioClick={this.onRadioClick} onFeatureBtnClick={this.onFeatureBtnClick}/>
    </div>
    );
  }
}

export default App;
