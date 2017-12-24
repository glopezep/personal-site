'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactstrap = require('reactstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/guillermo/Desktop/projects/personal-site/src/shared/components/MainCard.js';


function MainCard(props) {
  return _react2.default.createElement(_reactstrap.Card, { body: true, className: 'text-center', style: { borderColor: 'transparent', padding: '1.5em' }, __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, _react2.default.createElement(_reactstrap.CardBody, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, _react2.default.createElement(_reactstrap.CardTitle, { style: { fontSize: '3.6em' }, __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, props.title), _react2.default.createElement(_reactstrap.CardSubtitle, { style: { fontSize: '1.8em' }, __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, props.subTitle), _react2.default.createElement(_reactstrap.CardText, { style: { fontSize: '1.1em', marginTop: '1em' }, __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, props.description), _react2.default.createElement('div', { style: { display: 'flex', alignItems: 'center', justifyContent: 'center' }, __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, props.children)));
}

exports.default = MainCard;