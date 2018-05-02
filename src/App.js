import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
      this.createHash("problem1Hashes", this.hashMethod1);
      this.createHash("LinearProbingHash", this.hashMethodLinearProbing, 1);
      this.createHash("QuadraticProbingHash", this.hashMethodQuadraticProbing, 1);
      this.createHash("DoubleHashingHash", this.hashMethodDoubleHashing, 1);
  }

  createHash = (hashCollectionName, hashMethod, numberOfHashes = 5) => {
    const primeSet = Array.from(this.generatePrimeSet(numberOfHashes));
    console.log(primeSet);
    const allHashes = {};

    for(let i = 0; i < numberOfHashes; i++){
      console.log(`loop ${i}`);
      const newHash = {};
      const newHashCollisions = {};

      for(let j = 0; j < 25; j++){
        const newValue = this.getRandomIntInclusive(1, 20000);
        console.log(`Value ${j}: ${newValue}`);
        const newValueHash = hashMethod(newValue, primeSet[i], newHash);
        console.log(`Key ${j}: ${newValueHash}`);

        newHash.hasOwnProperty(newValueHash) ?
        newHashCollisions[newValueHash] = newValue :
        newHash[newValueHash] = newValue;
      }
      allHashes[primeSet[i]] = {hash: newHash, HashCollisions: newHashCollisions };
    }
    const newStateObject = {[hashCollectionName]: allHashes,}
    this.setState(newStateObject);
  };

  hashMethod1 = (value, prime, currentHash) => {
    return value % prime;
  }

  hashMethodLinearProbing = (value, prime, currentHash) => {
    let i = 0;
    let hashValue;
    do{
      hashValue = (value + i) % prime;
      i++;
    }while(currentHash.hasOwnProperty(hashValue));

    return hashValue;
  }

  hashMethodQuadraticProbing = (value, prime, currentHash) => {

    return value % prime;
  }

  hashMethodDoubleHashing = (value, prime, currentHash) => {

    return value % prime;
  }

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
