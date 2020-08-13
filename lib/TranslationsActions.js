"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onSetError = exports.onChangeLoading = exports.onSetTranslations = exports.onChangeLanguage = void 0;
var Constants_1 = require("./Constants");
exports.onChangeLanguage = function (dispatch, defaultLocale) {
    dispatch({
        type: Constants_1.ACTION_TYPES.CHANGE_LANGUAGE,
        value: defaultLocale,
    });
};
exports.onSetTranslations = function (dispatch, translations) {
    dispatch({
        type: Constants_1.ACTION_TYPES.SET_TRANSLATIONS,
        value: translations,
    });
};
exports.onChangeLoading = function (dispatch, value) {
    dispatch({
        type: Constants_1.ACTION_TYPES.CHANGE_LOADING,
        value: value,
    });
};
exports.onSetError = function (dispatch, value) {
    dispatch({
        type: Constants_1.ACTION_TYPES.SET_TRANSLATIONS_ERROR,
        value: value || 'There is some problem.',
    });
};
