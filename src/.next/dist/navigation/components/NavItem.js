'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/guillermo/Desktop/projects/personal-site/src/navigation/components/NavItem.js';


function NavItem(props) {
  return _react2.default.createElement('div', {
    className: 'jsx-1735323211' + ' ' + 'main-nav-item',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement(_link2.default, { href: props.item.link, __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement('span', {
    className: 'jsx-1735323211',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, props.item.name)), _react2.default.createElement(_style2.default, {
    styleId: '1735323211',
    css: '.main-nav-item.jsx-1735323211{padding:1em;}'
  }));
}

exports.default = NavItem;