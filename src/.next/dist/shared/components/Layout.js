'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _Nav = require('../../navigation/components/Nav');

var _Nav2 = _interopRequireDefault(_Nav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/guillermo/Desktop/projects/personal-site/src/shared/components/Layout.js';


function Layout(props) {
  return _react2.default.createElement('section', {
    className: 'jsx-3810025156' + ' ' + 'main-container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement('link', {
    rel: 'stylesheet',
    href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css',
    className: 'jsx-3810025156',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  })), _react2.default.createElement(_Nav2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }), _react2.default.createElement('main', {
    className: 'jsx-3810025156' + ' ' + 'main',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, props.children), _react2.default.createElement(_style2.default, {
    styleId: '3810025156',
    css: 'body.jsx-3810025156{background:#eee !important;}.main.jsx-3810025156{height:100%;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1;-ms-flex:1;flex:1;}.main-container.jsx-3810025156{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;min-height:100vh;}'
  }));
}

exports.default = Layout;