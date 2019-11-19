# Decentralized Kickstarter Application

Lets assume, an entrepreneur came up with a new idea. However the business model requires money. The idea of [kickstarter](https://www.kickstarter.com/) is to raise that money from donors to build some initial prototype of that product.

The entrepreneur came to the `kickstarter` and create a campaign to raise funding.

After getting sufficient funding, the campaign creator get the money and make the product.

In return the donor will get some kind of profit for a successful business model.

It's a good system, Until the campaign creator was fraud and spent all the money all for himself.

This [Decentralized Kickstarter Application](https://decentralized-lottery-app.herokuapp.com/) of kickstarter make sure, the campaign creator can spend the campaign money, only if majority of the donar approve that expense request.

### [Live](https://decentralized-kickstarter.herokuapp.com/)

## Features

- The entrepreneur create a `campaign` to raise money.
- `Donors` can donate money to the campaign.
- The entrepreneur can make a request to spend the money.
- If majority of the donors approve the request, only then the transaction will happen.
- Transparent selection system

## Tech Stack

- [Ethereum](https://www.ethereum.org/) - Platform
- [Solidity](https://solidity.readthedocs.io/en/v0.4.17/) - Language
- [Node.js](https://nodejs.org/en/) - Javascript Runtime
- [Next.js](https://reactjs.org/) - Server Side Rendering
- [Heroku](https://heroku.com/) - App Hosting

## Prerequisite Technologies In Your Machine

- [Node 10.17.0](https://nodejs.org/en/)
- [MetaMask](https://metamask.io/) (Optional, Required to make transactions)

#### Clone Repo

```
git clone https://github.com/bmshamsnahid/Decentralized-Kickstarter.git
```

#### Enable Environment

```
> Make sure `node.js` is installed. To check version, use `node -v`. This is tested in node 10.17.0
```

```
Deploy the contract from `ethereum/contracts` to the ethereum network.
```

```
> In `ethereum/config.js` directory, update the `factoryContractAddress` and `infuraNodeAddress`
```

```
> Update the `ethereum/web3.js` with `infuraNodeAddress`
```

#### Run Application

```
> To get the `contract bytecode`, you have to `compile` the `etherem/contracts/Campaign.sol`. To compile run `npm run build_contract`.
> Now run the next app `npm run dev`
```

#### Test Application

```
> In project-root directory, run `npm run test`
```

#### Deployment

```
> Build the `next.js` app `npm run build_next`
> Now `node server.js` will run app in production mode
```

#### Reference

- [CampaingFactory Contract Address](0xb5cd57db120af2db7aad106818d15f00e9c317e5)
- [EtherScan](https://rinkeby.etherscan.io/address/0xb5cd57db120af2db7aad106818d15f00e9c317e5)
- Transaction Hash: `0x428746280df9d3977d084bab45689143fc5734993619ff5b3f75c379e20bea2c`
- Deployed From: `0xbDfDDe986539ACD2caE7f7Fa75F42cFFd3a02212`
- [Udemy Course](https://www.udemy.com/course/ethereum-and-solidity-the-complete-developers-guide/)
