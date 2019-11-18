'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _CampaignFactory = require('./build/CampaignFactory.json');

var _CampaignFactory2 = _interopRequireDefault(_CampaignFactory);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _web = require('./web3.js');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var instance = new _web2.default.eth.Contract(JSON.parse(_CampaignFactory2.default.interface), _config2.default.campaignFactoryAddress);

exports.default = instance;