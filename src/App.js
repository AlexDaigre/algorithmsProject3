import React, { Component } from 'react';
import {createHash} from './helperFunctions';
import { Header } from 'semantic-ui-react';
import './App.css';
import HashTable from './HashTable';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      problem1Hashes: {
        hash0: {
          hash: {
            key: "value"
          },
          hashCollisions: {
            key: "value"
          }
        },
        hash1: {
          hash: {
            key: "value"
          },
          hashCollisions: {
            key: "value"
          }
        },
        hash2: {
          hash: {
            key: "value"
          },
          hashCollisions: {
            key: "value"
          }
        },
        hash3: {
          hash: {
            key: "value"
          },
          hashCollisions: {
            key: "value"
          }
        },
        hash4: {
          hash: {
            key: "value"
          },
          hashCollisions: {
            key: "value"
          }
        },
      },
      linearProbingHash: {
        hash0: {
          hash: {
            key: "value"
          }
        }
      },
      quadraticProbingHash: {
        hash0: {
          hash: {
            key: "value"
          }
        }
      },
      doubleHashingHash: {
        hash0: {
          hash: {
            key: "value"
          }
        }
      },
    }
  }

  componentDidMount() {
      this.setState(createHash("problem1Hashes", "problem1Hash"));
      this.setState(createHash("linearProbingHash", "linearProbing", 1));
      this.setState(createHash("quadraticProbingHash", "quadraticProbing", 1));
      this.setState(createHash("doubleHashingHash", "doubleHashing", 1));
  }

  render() {
    const {problem1Hashes, linearProbingHash, quadraticProbingHash, doubleHashingHash} = this.state;
    const doubleHashingHashObject = doubleHashingHash.hash0.hash;
    const quadraticProbingHashObject = quadraticProbingHash.hash0.hash;
    const linearProbingHashObject = linearProbingHash.hash0.hash;

    const problem1HashesObject0 = problem1Hashes.hash0.hash;
    const problem1HashesCollisionObject0 = problem1Hashes.hash0.hashCollisions;
    const problem1HashesObject1 = problem1Hashes.hash1.hash;
    const problem1HashesCollisionObject1 = problem1Hashes.hash1.hashCollisions;
    const problem1HashesObject2 = problem1Hashes.hash2.hash;
    const problem1HashesCollisionObject2 = problem1Hashes.hash2.hashCollisions;
    const problem1HashesObject3 = problem1Hashes.hash3.hash;
    const problem1HashesCollisionObject3 = problem1Hashes.hash3.hashCollisions;
    const problem1HashesObject4 = problem1Hashes.hash4.hash;
    const problem1HashesCollisionObject4 = problem1Hashes.hash4.hashCollisions;


    return (
      <div className="App">
        <Header as="h1">Algorithms Assignment 3</Header>
        <Header as="h2">Problem 1 Hashing</Header>
        <Header as="h3">Problem 1 Hashing</Header>
        <HashTable hash={problem1HashesObject0} />
        <HashTable hash={problem1HashesObject1} />
        <HashTable hash={problem1HashesObject2} />
        <HashTable hash={problem1HashesObject3} />
        <HashTable hash={problem1HashesObject4} />
        <Header as="h3">Problem 1 Collisions</Header>
        <HashTable hash={problem1HashesCollisionObject0} />
        <HashTable hash={problem1HashesCollisionObject1} />
        <HashTable hash={problem1HashesCollisionObject2} />
        <HashTable hash={problem1HashesCollisionObject3} />
        <HashTable hash={problem1HashesCollisionObject4} />

        <Header as="h2">Double Hashing</Header>
        <HashTable hash={doubleHashingHashObject} />

        <Header as="h2">Quadratic Probing</Header>
        <HashTable hash={quadraticProbingHashObject} />

        <Header as="h2">Linear Probing</Header>
        <HashTable hash={linearProbingHashObject} />
      </div>
    );
  }
}

export default App;
