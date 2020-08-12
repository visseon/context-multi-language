"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const TranslationsContext = /*#__PURE__*/_react.default.createContext({
  state: {
    locale: '',
    languages: [],
    translations: {}
  },
  dispatch: () => null
});

var _default = TranslationsContext;
exports.default = _default;
