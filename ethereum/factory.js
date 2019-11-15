import CampaignFactory from './build/CampaignFactory.json';
import appConfig from './config';
import web3 from './web3.js';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  appConfig.campaignFactoryAddress
);

export default instance;
