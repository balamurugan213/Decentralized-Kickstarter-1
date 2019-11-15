'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _campaign = require('../../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/nahid/BlockChain/kick_starter/pages/campaigns/show.js?entry';


var CampaignShow = function (_Component) {
  (0, _inherits3.default)(CampaignShow, _Component);

  function CampaignShow() {
    (0, _classCallCheck3.default)(this, CampaignShow);

    return (0, _possibleConstructorReturn3.default)(this, (CampaignShow.__proto__ || (0, _getPrototypeOf2.default)(CampaignShow)).apply(this, arguments));
  }

  (0, _createClass3.default)(CampaignShow, [{
    key: 'renderCards',
    value: function renderCards() {
      var _props = this.props,
          balance = _props.balance,
          manager = _props.manager,
          minimumContribution = _props.minimumContribution,
          requestsCount = _props.requestsCount,
          approversCount = _props.approversCount;

      var items = [{
        header: manager,
        meta: 'Address of Manager',
        description: 'The manager created this campaign and can create requests to withdraw money',
        style: { overflowWrap: 'break-word' }
      }, {
        header: '',
        meta: '',
        description: ''
      }, {
        header: '',
        meta: '',
        description: ''
      }, {
        header: '',
        meta: '',
        description: ''
      }, {
        header: '',
        meta: '',
        description: ''
      }];
      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, 'Campaign Show'), this.renderCards());
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
        var campaign, summary;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                campaign = (0, _campaign2.default)(props.query.address);
                _context.next = 3;
                return campaign.methods.getSummary().call();

              case 3:
                summary = _context.sent;
                return _context.abrupt('return', {
                  minimumContribution: summary[0],
                  balance: summary[1],
                  requestsCount: summary[2],
                  approversCount: summary[3],
                  manager: summary[4]
                });

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return CampaignShow;
}(_react.Component);

exports.default = CampaignShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9zaG93LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQ2FyZCIsIkxheW91dCIsIkNhbXBhaWduIiwiQ2FtcGFpZ25TaG93IiwicHJvcHMiLCJiYWxhbmNlIiwibWFuYWdlciIsIm1pbmltdW1Db250cmlidXRpb24iLCJyZXF1ZXN0c0NvdW50IiwiYXBwcm92ZXJzQ291bnQiLCJpdGVtcyIsImhlYWRlciIsIm1ldGEiLCJkZXNjcmlwdGlvbiIsInN0eWxlIiwib3ZlcmZsb3dXcmFwIiwicmVuZGVyQ2FyZHMiLCJjYW1wYWlnbiIsInF1ZXJ5IiwiYWRkcmVzcyIsIm1ldGhvZHMiLCJnZXRTdW1tYXJ5IiwiY2FsbCIsInN1bW1hcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUzs7QUFDVCxBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFjOzs7Ozs7Ozs7SSxBQUVmOzs7Ozs7Ozs7OztrQ0FhVTttQkFPUixLQVBRLEFBT0g7VUFQRyxBQUVWLGlCQUZVLEFBRVY7VUFGVSxBQUdWLGlCQUhVLEFBR1Y7VUFIVSxBQUlWLDZCQUpVLEFBSVY7VUFKVSxBQUtWLHVCQUxVLEFBS1Y7VUFMVSxBQU1WLHdCQU5VLEFBTVYsQUFHRjs7VUFBTTtnQkFDSixBQUNVLEFBQ1I7Y0FGRixBQUVRLEFBQ047cUJBSEYsQUFJSSxBQUNGO2VBQU8sRUFBRSxjQU5DLEFBQ1osQUFLUyxBQUFnQjtBQUx6QixBQUNFLE9BRlU7Z0JBUVosQUFDVSxBQUNSO2NBRkYsQUFFUSxBQUNOO3FCQVhVLEFBUVosQUFHZTtBQUhmLEFBQ0U7Z0JBSUYsQUFDVSxBQUNSO2NBRkYsQUFFUSxBQUNOO3FCQWhCVSxBQWFaLEFBR2U7QUFIZixBQUNFO2dCQUlGLEFBQ1UsQUFDUjtjQUZGLEFBRVEsQUFDTjtxQkFyQlUsQUFrQlosQUFHZTtBQUhmLEFBQ0U7Z0JBSUYsQUFDVSxBQUNSO2NBRkYsQUFFUSxBQUNOO3FCQTFCSixBQUFjLEFBdUJaLEFBR2UsQUFHakI7QUFORSxBQUNFOzJDQUtHLEFBQUMsc0JBQUQsQUFBTSxTQUFNLE9BQVosQUFBbUI7b0JBQW5CO3NCQUFQLEFBQU8sQUFDUjtBQURRO09BQUE7Ozs7NkJBR0EsQUFDUDs2QkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQyx1QkFITCxBQUNFLEFBRUcsQUFBSyxBQUdYOzs7OzsyRyxBQTVENEI7Ozs7O21CQUNyQjtBLDJCQUFXLHdCQUFTLE1BQUEsQUFBTSxNLEFBQWYsQUFBcUI7O3VCQUNoQixTQUFBLEFBQVMsUUFBVCxBQUFpQixhLEFBQWpCLEFBQThCOzttQkFBOUM7QTs7dUNBRWlCLFFBRGhCLEFBQ2dCLEFBQVEsQUFDN0I7MkJBQVMsUUFGSixBQUVJLEFBQVEsQUFDakI7aUNBQWUsUUFIVixBQUdVLEFBQVEsQUFDdkI7a0NBQWdCLFFBSlgsQUFJVyxBQUFRLEFBQ3hCOzJCQUFTLFEsQUFMSixBQUtJLEFBQVE7QUFMWixBQUNMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EsQUFMcUIsQUFnRTNCOztrQkFBQSxBQUFlIiwiZmlsZSI6InNob3cuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvbmFoaWQvQmxvY2tDaGFpbi9raWNrX3N0YXJ0ZXIifQ==