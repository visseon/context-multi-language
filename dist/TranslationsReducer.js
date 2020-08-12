"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Constants = require("./Constants");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const LocaleReducer = (state, action) => {
  switch (action.type) {
    case _Constants.ACTION_TYPES.CHANGE_LOADING:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: action.value
      });

    case _Constants.ACTION_TYPES.CHANGE_LANGUAGE:
      return _objectSpread(_objectSpread({}, state), {}, {
        locale: action.value
      });

    case _Constants.ACTION_TYPES.SET_TRANSLATIONS_ERROR:
      return _objectSpread(_objectSpread({}, state), {}, {
        error: action.value
      });

    case _Constants.ACTION_TYPES.SET_TRANSLATIONS:
      return _objectSpread(_objectSpread({}, state), {}, {
        error: null,
        languages: action.value.languages,
        translations: action.value.translations
      });

    default:
      return state;
  }
};

var _default = LocaleReducer;
exports.default = _default;
