'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Summary = (function (_Component) {
  _inherits(Summary, _Component);

  function Summary() {
    _classCallCheck(this, Summary);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Summary).apply(this, arguments));
  }

  _createClass(Summary, [{
    key: 'handleShowOthers',
    value: function handleShowOthers(event) {
      event.preventDefault();

      this.props.onShowOthers();
    }
  }, {
    key: 'renderItems',
    value: function renderItems() {
      var _this2 = this;

      var _props = this.props;
      var items = _props.items;
      var text = _props.text;
      var max = _props.max;
      var preventSingleRemain = _props.preventSingleRemain;

      switch (items.length) {
        case 0:
          return text.none;

        case 1:
          return items[0];

        case 2:
        case max:
        case preventSingleRemain && max + 1:

          return _react2.default.createElement(
            'div',
            null,
            items.map(function (item, i) {
              return i < items.length - 1 ? _react2.default.createElement(
                'span',
                { key: i },
                i > 0 ? ', ' : null,
                item
              ) : null;
            }),
            ' and ',
            items[items.length - 1]
          );

        default:
          return _react2.default.createElement(
            'div',
            null,
            items.map(function (item, i) {
              return _react2.default.createElement(
                'span',
                { key: i },
                i > 0 && i < max ? ', ' : null,
                i < max ? item : null,
                i === max && _react2.default.createElement(
                  'span',
                  null,
                  ' ',
                  ' ',
                  text.and,
                  ' ',
                  ' ',
                  _react2.default.createElement(
                    'a',
                    { href: '#', onClick: _this2.handleShowOthers.bind(_this2) },
                    items.length - max,
                    ' ',
                    text.more
                  )
                )
              );
            })
          );
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: this.block },
        this.renderItems()
      );
    }
  }]);

  return Summary;
})(_react.Component);

Summary.block = "react-summary";
Summary.defaultProps = {
  items: [],
  max: 3,
  text: {
    more: 'more',
    and: 'and',
    none: 'None'
  },
  onShowOthers: function onShowOthers() {},

  preventSingleRemain: false
};
exports.default = Summary;