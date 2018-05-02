import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allHashesFor1: {},
    }
  }

  componentDidMount() {
      this.createHash1();
  }

  createHash1 = () => {
    const primeSet = Array.from(this.generatePrimeSet(5));
    console.log(primeSet);
    const allHashesFor1 = {};

    for(let i = 0; i < 5; i++){
      console.log(`loop ${i}`);
      const newHash = {};
      const newHashCollisions = {};

      for(let j = 0; j < 25; j++){
        const newValue = this.getRandomIntInclusive(1, 20000);
        console.log(`Value ${j}: ${newValue}`);
        const newValueHash = newValue % primeSet[i];
        console.log(`Key ${j}: ${newValueHash}`);

        newHash.hasOwnProperty(newValueHash) ?
        newHashCollisions[newValueHash] = newValue :
        newHash[newValueHash] = newValue;
      }
      allHashesFor1[primeSet[i]] = {hash: newHash, HashCollisions: newHashCollisions };
    }
    this.setState({
      allHashesFor1: allHashesFor1,
    });
  };

  generatePrimeSet = length => {
    const possiblePrimes = [29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
    const newPrimeSet = new Set();
    while (newPrimeSet.size < length){
      newPrimeSet.add(possiblePrimes[this.getRandomIntInclusive(0,15)]);
    }
    return newPrimeSet;
  }

  getRandomIntInclusive = (min, max) => {
    const realMin = Math.ceil(min);
    const realMax = Math.floor(max);
    return Math.floor(Math.random() * (realMax - realMin + 1)) + realMin;
  }

  render() {
    return (
      <div className="App">
      </div>
    );
  }
}

export default App;
