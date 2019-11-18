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

var _campaign = require('../../../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _web = require('../../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../../../routes');

var _Layout = require('../../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/nahid/BlockChain/kick_starter/pages/campaigns/requests/new.js?entry';


var RequestNew = function (_Component) {
  (0, _inherits3.default)(RequestNew, _Component);

  function RequestNew() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, RequestNew);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RequestNew.__proto__ || (0, _getPrototypeOf2.default)(RequestNew)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      value: '',
      description: '',
      recipient: '',
      loading: false,
      errorMessage: ''
    }, _this.onSubmit = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var campaign, _this$state, value, description, recipient, loading, errorMessage, account;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                campaign = (0, _campaign2.default)(_this.props.address);
                _this$state = _this.state, value = _this$state.value, description = _this$state.description, recipient = _this$state.recipient, loading = _this$state.loading, errorMessage = _this$state.errorMessage;

                _this.setState({ loading: true, errorMessage: '' });
                _context.prev = 4;
                _context.next = 7;
                return _web2.default.eth.getAccounts();

              case 7:
                account = _context.sent;
                _context.next = 10;
                return campaign.methods.createRequest(description, _web2.default.utils.toWei(value, 'ether'), recipient).send({ from: account[0] });

              case 10:
                _routes.Router.push('/campaigns/' + _this.props.address + '/requests');
                _context.next = 16;
                break;

              case 13:
                _context.prev = 13;
                _context.t0 = _context['catch'](4);

                _this.setState({ errorMessage: _context.t0.message });

              case 16:
                _this.setState({ loading: false });

              case 17:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[4, 13]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(RequestNew, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.address + '/requests', __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, 'Back'))), _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, 'Create a Request'), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, 'Description'), _react2.default.createElement(_semanticUiReact.Input, {
        value: this.state.description,
        onChange: function onChange(event) {
          return _this3.setState({ description: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, 'Value in Ether'), _react2.default.createElement(_semanticUiReact.Input, {
        value: this.state.value,
        onChange: function onChange(event) {
          return _this3.setState({ value: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, 'Recipient'), _react2.default.createElement(_semanticUiReact.Input, {
        value: this.state.recipient,
        onChange: function onChange(event) {
          return _this3.setState({ recipient: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!', content: this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { primary: true, loading: this.state.loading, __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, 'Create')));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(props) {
        var address;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                address = props.query.address;
                return _context2.abrupt('return', { address: address });

              case 2:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getInitialProps(_x2) {
        return _ref3.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return RequestNew;
}(_react.Component);

exports.default = RequestNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9yZXF1ZXN0cy9uZXcuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJGb3JtIiwiQnV0dG9uIiwiTWVzc2FnZSIsIklucHV0IiwiQ2FtcGFpZ24iLCJ3ZWIzIiwiTGluayIsIlJvdXRlciIsIkxheW91dCIsIlJlcXVlc3ROZXciLCJzdGF0ZSIsInZhbHVlIiwiZGVzY3JpcHRpb24iLCJyZWNpcGllbnQiLCJsb2FkaW5nIiwiZXJyb3JNZXNzYWdlIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY2FtcGFpZ24iLCJwcm9wcyIsImFkZHJlc3MiLCJzZXRTdGF0ZSIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudCIsIm1ldGhvZHMiLCJjcmVhdGVSZXF1ZXN0IiwidXRpbHMiLCJ0b1dlaSIsInNlbmQiLCJmcm9tIiwicHVzaCIsIm1lc3NhZ2UiLCJ0YXJnZXQiLCJxdWVyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQU0sQUFBUSxBQUFTOztBQUNoQyxBQUFPLEFBQWM7Ozs7QUFDckIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQVMsQUFBTSxBQUFjOztBQUM3QixBQUFPLEFBQVk7Ozs7Ozs7OztJLEFBRWI7Ozs7Ozs7Ozs7Ozs7OztvTixBQUNKO2FBQVEsQUFDQyxBQUNQO21CQUZNLEFBRU8sQUFDYjtpQkFITSxBQUdLLEFBQ1g7ZUFKTSxBQUlHLEFBQ1Q7b0IsQUFMTSxBQUtRO0FBTFIsQUFDTixhLEFBWUY7MkZBQVcsaUJBQUEsQUFBTSxPQUFOO3lGQUFBOztzRUFBQTtvQkFBQTs2Q0FBQTttQkFDVDtzQkFBQSxBQUFNLEFBQ0E7QUFGRywyQkFFUSx3QkFBUyxNQUFBLEFBQUssTUFGdEIsQUFFUSxBQUFvQjs4QkFDNEIsTUFIeEQsQUFHNkQsT0FIN0QsQUFHRCxvQkFIQyxBQUdELE9BSEMsQUFHTSwwQkFITixBQUdNLGFBSE4sQUFHbUIsd0JBSG5CLEFBR21CLFdBSG5CLEFBRzhCLHNCQUg5QixBQUc4QixTQUg5QixBQUd1QywyQkFIdkMsQUFHdUMsQUFDaEQ7O3NCQUFBLEFBQUssU0FBUyxFQUFFLFNBQUYsQUFBVyxNQUFNLGNBSnRCLEFBSVQsQUFBYyxBQUErQjtnQ0FKcEM7Z0NBQUE7dUJBTWUsY0FBQSxBQUFLLElBTnBCLEFBTWUsQUFBUzs7bUJBQXpCO0FBTkMsbUNBQUE7Z0NBQUE7dUJBT0QsU0FBQSxBQUFTLFFBQVQsQUFDSCxjQURHLEFBQ1csYUFBYSxjQUFBLEFBQUssTUFBTCxBQUFXLE1BQVgsQUFBaUIsT0FEekMsQUFDd0IsQUFBd0IsVUFEaEQsQUFDMEQsV0FEMUQsQUFFSCxLQUFLLEVBQUUsTUFBTSxRQVRULEFBT0QsQUFFRSxBQUFRLEFBQVE7O21CQUN4QjsrQkFBQSxBQUFPLHFCQUFtQixNQUFBLEFBQUssTUFBL0IsQUFBcUMsVUFWOUI7Z0NBQUE7QUFBQTs7bUJBQUE7Z0NBQUE7Z0RBWVA7O3NCQUFBLEFBQUssU0FBUyxFQUFFLGNBQWMsWUFadkIsQUFZUCxBQUFjLEFBQW9COzttQkFFcEM7c0JBQUEsQUFBSyxTQUFTLEVBQUUsU0FkUCxBQWNULEFBQWMsQUFBVzs7bUJBZGhCO21CQUFBO2dDQUFBOztBQUFBO2lDQUFBO0E7Ozs7Ozs7Ozs7NkJBaUJGO21CQUNQOzs2QkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLEFBQUMsOEJBQUssdUJBQXFCLEtBQUEsQUFBSyxNQUExQixBQUFnQyxVQUF0QztvQkFBQTtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsQUFBQyx5Q0FBTyxTQUFSO29CQUFBO3NCQUFBO0FBQUE7U0FITixBQUNFLEFBQ0UsQUFDRSxBQUdKLDJCQUFBLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQU5GLEFBTUUsQUFDQSxxQ0FBQSxBQUFDLHVDQUFLLFVBQVUsS0FBaEIsQUFBcUIsVUFBVSxPQUFPLENBQUMsQ0FBQyxLQUFBLEFBQUssTUFBN0MsQUFBbUQ7b0JBQW5EO3NCQUFBLEFBQ0U7QUFERjt5QkFDRyxjQUFELHNCQUFBLEFBQU07O29CQUFOO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQSxnQ0FBQSxBQUFDO2VBQ1EsS0FBQSxBQUFLLE1BRGQsQUFDb0IsQUFDbEI7a0JBQVUseUJBQUE7aUJBQ1IsT0FBQSxBQUFLLFNBQVMsRUFBRSxhQUFhLE1BQUEsQUFBTSxPQUQzQixBQUNSLEFBQWMsQUFBNEI7QUFIOUM7O29CQUFBO3NCQUhKLEFBQ0UsQUFFRSxBQU9GO0FBUEU7QUFDRSwyQkFNSCxjQUFELHNCQUFBLEFBQU07O29CQUFOO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQSxtQ0FBQSxBQUFDO2VBQ1EsS0FBQSxBQUFLLE1BRGQsQUFDb0IsQUFDbEI7a0JBQVUseUJBQUE7aUJBQVMsT0FBQSxBQUFLLFNBQVMsRUFBRSxPQUFPLE1BQUEsQUFBTSxPQUF0QyxBQUFTLEFBQWMsQUFBc0I7QUFGekQ7O29CQUFBO3NCQVpKLEFBVUUsQUFFRSxBQUtGO0FBTEU7QUFDRSwyQkFJSCxjQUFELHNCQUFBLEFBQU07O29CQUFOO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQSw4QkFBQSxBQUFDO2VBQ1EsS0FBQSxBQUFLLE1BRGQsQUFDb0IsQUFDbEI7a0JBQVUseUJBQUE7aUJBQ1IsT0FBQSxBQUFLLFNBQVMsRUFBRSxXQUFXLE1BQUEsQUFBTSxPQUR6QixBQUNSLEFBQWMsQUFBMEI7QUFINUM7O29CQUFBO3NCQW5CSixBQWlCRSxBQUVFLEFBT0Y7QUFQRTtBQUNFLDJCQU1KLEFBQUMsMENBQVEsT0FBVCxNQUFlLFFBQWYsQUFBc0IsU0FBUSxTQUFTLEtBQUEsQUFBSyxNQUE1QyxBQUFrRDtvQkFBbEQ7c0JBMUJGLEFBMEJFLEFBQ0E7QUFEQTswQkFDQSxBQUFDLHlDQUFPLFNBQVIsTUFBZ0IsU0FBUyxLQUFBLEFBQUssTUFBOUIsQUFBb0M7b0JBQXBDO3NCQUFBO0FBQUE7U0FuQ04sQUFDRSxBQU9FLEFBMkJFLEFBTVA7Ozs7OzZHLEFBaEU0Qjs7Ozs7bUJBQ25CO0EsMEJBQVksTSxBQUFNLE0sQUFBbEI7a0RBQ0QsRUFBRSxTLEFBQUY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSxBQVhjLEFBNEV6Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJuZXcuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvbmFoaWQvQmxvY2tDaGFpbi9raWNrX3N0YXJ0ZXIifQ==