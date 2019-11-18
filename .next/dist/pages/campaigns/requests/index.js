'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

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

var _Layout = require('../../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _routes = require('../../../routes');

var _campaign = require('../../../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _RequestRow = require('../../../components/RequestRow');

var _RequestRow2 = _interopRequireDefault(_RequestRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/nahid/BlockChain/kick_starter/pages/campaigns/requests/index.js?entry';


var RequestIndex = function (_Component) {
  (0, _inherits3.default)(RequestIndex, _Component);

  function RequestIndex() {
    (0, _classCallCheck3.default)(this, RequestIndex);

    return (0, _possibleConstructorReturn3.default)(this, (RequestIndex.__proto__ || (0, _getPrototypeOf2.default)(RequestIndex)).apply(this, arguments));
  }

  (0, _createClass3.default)(RequestIndex, [{
    key: 'renderRows',
    value: function renderRows() {
      var _this2 = this;

      return this.props.requests.map(function (request, index) {
        return _react2.default.createElement(_RequestRow2.default, {
          key: index,
          id: index,
          request: request,
          address: _this2.props.address,
          approversCount: _this2.props.approversCount,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          }
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var Header = _semanticUiReact.Table.Header,
          Row = _semanticUiReact.Table.Row,
          HeaderCell = _semanticUiReact.Table.HeaderCell,
          Body = _semanticUiReact.Table.Body;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, 'Requests'), _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.address + '/requests/new', __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, floated: 'right', style: { marginBottom: 10 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, 'Add Request'))), _react2.default.createElement(_semanticUiReact.Table, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, _react2.default.createElement(Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, _react2.default.createElement(Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, 'ID'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, 'Description'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, 'Amount'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, 'Recipient'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, 'Approval Count'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, 'Approve'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, 'Finalize'))), _react2.default.createElement(Body, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, this.renderRows())), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, 'Found ', this.props.requestCount, ' requests.'));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
        var address, campaign, requestCount, approversCount, requests;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                address = props.query.address;
                campaign = (0, _campaign2.default)(address);
                _context.next = 4;
                return campaign.methods.getRequestsCount().call();

              case 4:
                requestCount = _context.sent;
                _context.next = 7;
                return campaign.methods.approversCount().call();

              case 7:
                approversCount = _context.sent;
                _context.next = 10;
                return _promise2.default.all(Array(parseInt(requestCount)).fill().map(function (element, index) {
                  return campaign.methods.requests(index).call();
                }));

              case 10:
                requests = _context.sent;
                return _context.abrupt('return', { address: address, requests: requests, requestCount: requestCount, approversCount: approversCount });

              case 12:
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

  return RequestIndex;
}(_react.Component);

exports.default = RequestIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9yZXF1ZXN0cy9pbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkJ1dHRvbiIsIlRhYmxlIiwiTGF5b3V0IiwiTGluayIsIkNhbXBhaWduIiwiUmVxdWVzdFJvdyIsIlJlcXVlc3RJbmRleCIsInByb3BzIiwicmVxdWVzdHMiLCJtYXAiLCJyZXF1ZXN0IiwiaW5kZXgiLCJhZGRyZXNzIiwiYXBwcm92ZXJzQ291bnQiLCJIZWFkZXIiLCJSb3ciLCJIZWFkZXJDZWxsIiwiQm9keSIsIm1hcmdpbkJvdHRvbSIsInJlbmRlclJvd3MiLCJyZXF1ZXN0Q291bnQiLCJxdWVyeSIsImNhbXBhaWduIiwibWV0aG9kcyIsImdldFJlcXVlc3RzQ291bnQiLCJjYWxsIiwiYWxsIiwiQXJyYXkiLCJwYXJzZUludCIsImZpbGwiLCJlbGVtZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQVE7O0FBQ2pCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFTLEFBQVk7O0FBQ3JCLEFBQU8sQUFBYzs7OztBQUNyQixBQUFPLEFBQWdCOzs7Ozs7Ozs7SSxBQUVqQjs7Ozs7Ozs7Ozs7aUNBZVM7bUJBQ1g7O2tCQUFPLEFBQUssTUFBTCxBQUFXLFNBQVgsQUFBb0IsSUFBSSxVQUFBLEFBQUMsU0FBRCxBQUFVLE9BQVUsQUFDakQ7K0JBQ0UsQUFBQztlQUFELEFBQ08sQUFDTDtjQUZGLEFBRU0sQUFDSjttQkFIRixBQUdXLEFBQ1Q7bUJBQVMsT0FBQSxBQUFLLE1BSmhCLEFBSXNCLEFBQ3BCOzBCQUFnQixPQUFBLEFBQUssTUFMdkIsQUFLNkI7O3NCQUw3Qjt3QkFERixBQUNFLEFBUUg7QUFSRztBQUNFLFNBREY7QUFGSixBQUFPLEFBV1IsT0FYUTs7Ozs2QkFhQTtVQUFBLEFBQ0MsU0FERCxBQUNtQyx1QkFEbkMsQUFDQztVQURELEFBQ1MsTUFEVCxBQUNtQyx1QkFEbkMsQUFDUztVQURULEFBQ2MsYUFEZCxBQUNtQyx1QkFEbkMsQUFDYztVQURkLEFBQzBCLE9BRDFCLEFBQ21DLHVCQURuQyxBQUMwQixBQUNqQzs7NkJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0EsNkJBQUEsQUFBQyw4QkFBSyx1QkFBcUIsS0FBQSxBQUFLLE1BQTFCLEFBQWdDLFVBQXRDO29CQUFBO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDLHlDQUFPLFNBQVIsTUFBZ0IsU0FBaEIsQUFBd0IsU0FBUSxPQUFPLEVBQUUsY0FBekMsQUFBdUMsQUFBZ0I7b0JBQXZEO3NCQUFBO0FBQUE7U0FKTixBQUVFLEFBQ0UsQUFDRSxBQUtKLGtDQUFBLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNHLGNBQUQ7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNHLGNBQUQ7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNHLGNBQUQ7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQSx1QkFBQyxjQUFEOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FGRixBQUVFLEFBQ0EsZ0NBQUMsY0FBRDs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBSEYsQUFHRSxBQUNBLDJCQUFDLGNBQUQ7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUpGLEFBSUUsQUFDQSw4QkFBQyxjQUFEOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FMRixBQUtFLEFBQ0EsbUNBQUMsY0FBRDs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBTkYsQUFNRSxBQUNBLDRCQUFDLGNBQUQ7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQVROLEFBQ0UsQUFDRSxBQU9FLEFBR0osK0JBQUMsY0FBRDs7b0JBQUE7c0JBQUEsQUFBTztBQUFQO0FBQUEsY0FyQkosQUFTRSxBQVlFLEFBQU8sQUFBSyxBQUVkLGdDQUFBLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUFZLGVBQUEsQUFBSyxNQUFqQixBQUF1QixjQXhCM0IsQUFDRSxBQXVCRSxBQUdMOzs7OzsyRyxBQXpENEI7Ozs7O21CQUNuQjtBLDBCQUFZLE0sQUFBTSxNLEFBQWxCLEFBQ0Y7QSwyQkFBVyx3QixBQUFBLEFBQVM7O3VCQUNDLFNBQUEsQUFBUyxRQUFULEFBQWlCLG1CLEFBQWpCLEFBQW9DOzttQkFBekQ7QTs7dUJBQ3VCLFNBQUEsQUFBUyxRQUFULEFBQWlCLGlCLEFBQWpCLEFBQWtDOzttQkFBekQ7QTs7eUNBRWlCLEFBQVEsVUFDdkIsU0FBTixBQUFNLEFBQVMsZUFBZixBQUNHLE9BREgsQUFFRyxJQUFJLFVBQUEsQUFBQyxTQUFELEFBQVUsT0FBVjt5QkFBb0IsU0FBQSxBQUFTLFFBQVQsQUFBaUIsU0FBakIsQUFBMEIsT0FBOUMsQUFBb0IsQUFBaUM7QSxBQUh2QyxBQUNyQixpQkFBQSxDQURxQjs7bUJBQWpCO0E7aURBS0MsRUFBRSxTQUFGLFNBQVcsVUFBWCxVQUFxQixjQUFyQixjQUFtQyxnQixBQUFuQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlEWCxBLEFBN0QyQjs7a0JBNkQzQixBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9ob21lL25haGlkL0Jsb2NrQ2hhaW4va2lja19zdGFydGVyIn0=