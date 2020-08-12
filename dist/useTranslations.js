"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _TranslationsContext = _interopRequireDefault(require("./TranslationsContext"));

var _Constants = require("./Constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const useTranslations = () => {
  const {
    state: {
      translations,
      locale,
      languages
    },
    dispatch
  } = (0, _react.useContext)(_TranslationsContext.default);
  const changeLanguage = (0, _react.useCallback)(language => {
    dispatch({
      type: _Constants.ACTION_TYPES.CHANGE_LANGUAGE,
      value: language
    });
  }, [locale]);
  const t = (0, _react.useMemo)(() => (translations === null || translations === void 0 ? void 0 : translations[locale]) || {}, [locale]);
  return {
    t,
    languages,
    changeLanguage
  };
};

var _default = useTranslations;
exports.default = _default;
