"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _TranslationsActions = require("./TranslationsActions");

var _TranslationsContext = _interopRequireDefault(require("./TranslationsContext"));

var _TranslationsReducer = _interopRequireDefault(require("./TranslationsReducer"));

var _TranslationsError = _interopRequireDefault(require("./components/TranslationsError"));

var _TranslationLoading = _interopRequireDefault(require("./components/TranslationLoading"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const TranslationsProvider = ({
  children,
  translations,
  errorComponent,
  loadingComponent,
  defaultLocale = 'tr',
  remoteTranslationsUrl = ''
}) => {
  const defaultState = {
    error: null,
    languages: [],
    loading: false,
    translations: translations || {},
    locale: translations && !remoteTranslationsUrl ? '' : defaultLocale
  };
  const [state, dispatch] = (0, _react.useReducer)(_TranslationsReducer.default, defaultState);
  const translationsCb = (0, _react.useCallback)(() => {
    (0, _TranslationsActions.onChangeLoading)(dispatch, true);
    fetch(remoteTranslationsUrl).then(response => response.json()).then(response => (0, _TranslationsActions.onSetTranslations)(dispatch, response)).catch(error => (0, _TranslationsActions.onSetError)(dispatch, error)).finally(() => (0, _TranslationsActions.onChangeLoading)(dispatch, false));
  }, []);
  (0, _react.useEffect)(() => {
    if (remoteTranslationsUrl) {
      translationsCb();
    } else {
      (0, _TranslationsActions.onChangeLanguage)(dispatch, defaultLocale);
      (0, _TranslationsActions.onSetTranslations)(dispatch, translations);
    }
  }, [translations]);
  const {
    loading,
    error
  } = state;
  return /*#__PURE__*/_react.default.createElement(_TranslationsContext.default.Provider, {
    value: {
      state,
      dispatch
    }
  }, loading && loadingComponent && loadingComponent(), loading && !loadingComponent && /*#__PURE__*/_react.default.createElement(_TranslationLoading.default, null), !loading && error && errorComponent && errorComponent(translationsCb), !loading && error && !errorComponent && /*#__PURE__*/_react.default.createElement(_TranslationsError.default, {
    onPress: translationsCb
  }), !loading && !error && children);
};

var _default = TranslationsProvider;
exports.default = _default;
