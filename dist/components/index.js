"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _useTranslations = _interopRequireDefault(require("./useTranslations"));

var _TranslationsContext = _interopRequireDefault(require("./TranslationsContext"));

var _TranslationsProvider = _interopRequireDefault(require("./TranslationsProvider"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default =  {
  useTranslations: _useTranslations.default,
  TranslationsContext: _TranslationsContext.default,
  TranslationsProvider: _TranslationsProvider.default
};
