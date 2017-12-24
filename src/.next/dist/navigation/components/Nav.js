'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _NavItem = require('./NavItem');

var _NavItem2 = _interopRequireDefault(_NavItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/guillermo/Desktop/projects/personal-site/src/navigation/components/Nav.js';


var Nav = function (_Component) {
  (0, _inherits3.default)(Nav, _Component);

  function Nav() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Nav);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Nav.__proto__ || (0, _getPrototypeOf2.default)(Nav)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      items: [{ name: 'My Code', link: 'https://www.github.com/glopezep', external: true }]
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Nav, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('nav', {
        className: 'jsx-3041056679' + ' ' + 'main-nav',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, this.state.items.map(function (item) {
        if (!item.external) {
          return _react2.default.createElement(_NavItem2.default, { item: item, __source: {
              fileName: _jsxFileName,
              lineNumber: 16
            }
          });
        }

        return _react2.default.createElement('a', { style: { display: 'block', padding: '1em' }, href: item.link, className: 'jsx-3041056679',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          }
        }, item.name);
      }), _react2.default.createElement(_style2.default, {
        styleId: '3041056679',
        css: '.main-nav.jsx-3041056679{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}'
      }));
    }
  }]);

  return Nav;
}(_react.Component);

exports.default = Nav;