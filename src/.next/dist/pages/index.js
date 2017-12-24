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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Layout = require('../shared/components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _Nav = require('../navigation/components/Nav');

var _Nav2 = _interopRequireDefault(_Nav);

var _MainCard = require('../shared/components/MainCard');

var _MainCard2 = _interopRequireDefault(_MainCard);

var _reactstrap = require('reactstrap');

var _go = require('react-icons/lib/go');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/guillermo/Desktop/projects/personal-site/src/pages/index.js?entry';


var Index = function (_Component) {
  (0, _inherits3.default)(Index, _Component);

  function Index() {
    (0, _classCallCheck3.default)(this, Index);

    return (0, _possibleConstructorReturn3.default)(this, (Index.__proto__ || (0, _getPrototypeOf2.default)(Index)).apply(this, arguments));
  }

  (0, _createClass3.default)(Index, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, _react2.default.createElement(_reactstrap.Container, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, _react2.default.createElement(_reactstrap.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, _react2.default.createElement(_reactstrap.Col, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, _react2.default.createElement(_MainCard2.default, {
        title: 'Guillermo L\xF3pez',
        subTitle: 'Javascript Developer',
        description: '\n                  I am a Developer with experience in Node.js and JavaScript\n                  with DevOps Skills,currently making modules, CLI tools, and apps.\n                  My favorite technologies right now are Node.js and Python.\n                ',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, _react2.default.createElement('a', { style: { padding: '1em', display: 'block', color: 'black' }, href: 'http://github.com/glopezep', __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, _react2.default.createElement(_go.GoMarkGithub, { size: 35, __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      })), _react2.default.createElement('a', { style: { adding: '1em', display: 'block', color: 'black' }, href: 'https://www.npmjs.com/~glopezep', __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, _react2.default.createElement('svg', { version: '1.1', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32', __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, _react2.default.createElement('title', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, 'npm'), _react2.default.createElement('path', { d: 'M0 0v32h32v-32h-32zM26 26h-4v-16h-6v16h-10v-20h20v20z', __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }))))))));
    }
  }]);

  return Index;
}(_react.Component);

exports.default = Index;