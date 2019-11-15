import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  // user is in browser and running meta mask
  web3 = new Web3(window.web3.currentProvider);
} else {
  const provider = new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/v3/610d53ff58db478e984aba79e7d22693'
  );
  web3 = new Web3(provider);
}

export default web3;
