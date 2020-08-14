"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var TranslationsContext_1 = __importDefault(require("./TranslationsContext"));
var Constants_1 = require("./Constants");
var useTranslations = function () {
    var _a = react_1.useContext(TranslationsContext_1.default), _b = _a.state, translations = _b.translations, locale = _b.locale, languages = _b.languages, dispatch = _a.dispatch;
    var changeLanguage = react_1.useCallback(function (language) {
        dispatch({ type: Constants_1.ACTION_TYPES.CHANGE_LANGUAGE, value: language });
    }, [locale]);
    var t = react_1.useMemo(function () { return (translations === null || translations === void 0 ? void 0 : translations[locale]) || {}; }, [locale]);
    return {
        t: t,
        languages: languages,
        changeLanguage: changeLanguage,
    };
};
exports.default = useTranslations;
