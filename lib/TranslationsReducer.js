"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TranslationsReducer = void 0;
var Constants_1 = require("./Constants");
exports.TranslationsReducer = function (state, action) {
    switch (action.type) {
        case Constants_1.ACTION_TYPES.CHANGE_LOADING:
            return __assign(__assign({}, state), { loading: action.value });
        case Constants_1.ACTION_TYPES.CHANGE_LANGUAGE:
            return __assign(__assign({}, state), { locale: action.value });
        case Constants_1.ACTION_TYPES.SET_TRANSLATIONS_ERROR:
            return __assign(__assign({}, state), { error: action.value });
        case Constants_1.ACTION_TYPES.SET_TRANSLATIONS:
            return __assign(__assign({}, state), { error: null, languages: action.value.languages, translations: action.value.translations });
        default:
            return state;
    }
};
