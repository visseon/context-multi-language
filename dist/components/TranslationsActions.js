"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onSetError = exports.onChangeLoading = exports.onSetTranslations = exports.onChangeLanguage = void 0;

var _Constants = require("./Constants");

const onChangeLanguage = (dispatch, defaultLocale) => {
  dispatch({
    type: _Constants.ACTION_TYPES.CHANGE_LANGUAGE,
    value: defaultLocale
  });
};

exports.onChangeLanguage = onChangeLanguage;

const onSetTranslations = (dispatch, translations) => {
  dispatch({
    type: _Constants.ACTION_TYPES.SET_TRANSLATIONS,
    value: translations
  });
};

exports.onSetTranslations = onSetTranslations;

const onChangeLoading = (dispatch, value) => {
  dispatch({
    type: _Constants.ACTION_TYPES.CHANGE_LOADING,
    value
  });
};

exports.onChangeLoading = onChangeLoading;

const onSetError = (dispatch, value) => {
  dispatch({
    type: _Constants.ACTION_TYPES.SET_TRANSLATIONS_ERROR,
    value: value || 'There is some problem.'
  });
};

exports.onSetError = onSetError;
