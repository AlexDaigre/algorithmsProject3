export const createHash = (hashCollectionName, hashMethod, numberOfHashes = 5) => {
  switch (hashMethod) {
    case 'problem1Hash':
      hashMethod = hashMethod1;
      break;
    case 'linearProbing':
      hashMethod = hashMethodLinearProbing;
      break;
    case 'quadraticProbing':
      hashMethod = hashMethodQuadraticProbing;
      break;
    case 'doubleHashing':
      hashMethod = hashMethodDoubleHashing;
      break;
    default:
      hashMethod = hashMethod1;
      break;
  }

  const primeSet = Array.from(generatePrimeSet(numberOfHashes));
  // console.log(primeSet);
  const allHashes = {};

  for(let i = 0; i < numberOfHashes; i++){
    // console.log(`loop ${i}`);
    const newHash = {};
    const newHashCollisions = {};

    for(let j = 0; j < 25; j++){
      const newValue = getRandomIntInclusive(1, 20000);
      // console.log(`Value ${j}: ${newValue}`);
      const newValueHash = hashMethod(newValue, primeSet[i], newHash);
      // console.log(`Key ${j}: ${newValueHash}`);

      newHash.hasOwnProperty(newValueHash) ?
      newHashCollisions[newValueHash] = newValue :
      newHash[newValueHash] = newValue;
    }
    allHashes[`hash${i}`] = {hash: newHash, hashCollisions: newHashCollisions };
  }
  return {[hashCollectionName]: allHashes,}
};

const hashMethod1 = (value, prime, currentHash) => {
  return value % prime;
}

const hashMethodLinearProbing = (value, prime, currentHash) => {
  let i = 0;
  let hashValue;
  do{
    hashValue = (value + i) % prime;
    i++;
  }while(currentHash.hasOwnProperty(hashValue));

  return hashValue;
}

const hashMethodQuadraticProbing = (value, prime, currentHash) => {
  let i = 0;
  let hashValue;
  do{
    hashValue = (value + i*i) % prime;
    i++;
  }while(currentHash.hasOwnProperty(hashValue));

  return hashValue;
}

const hashMethodDoubleHashing = (value, prime, currentHash) => {
  let i = 0;
  let hashValue;
  do{
    hashValue = (value + (i * (( value % (prime - 1) ) + 1 ))) % prime;
    i++;
  }while(currentHash.hasOwnProperty(hashValue));

  return hashValue;
}

const generatePrimeSet = length => {
  const possiblePrimes = [29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
  const newPrimeSet = new Set();
  while (newPrimeSet.size < length){
    newPrimeSet.add(possiblePrimes[getRandomIntInclusive(0,15)]);
  }
  return newPrimeSet;
}

const getRandomIntInclusive = (min, max) => {
  const realMin = Math.ceil(min);
  const realMax = Math.floor(max);
  return Math.floor(Math.random() * (realMax - realMin + 1)) + realMin;
}
