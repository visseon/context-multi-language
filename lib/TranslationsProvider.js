"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var TranslationsActions_1 = require("./TranslationsActions");
var TranslationsContext_1 = __importDefault(require("./TranslationsContext"));
var TranslationsReducer_1 = require("./TranslationsReducer");
var TranslationsError_1 = require("./components/TranslationsError");
var TranslationLoading_1 = require("./components/TranslationLoading");
var TranslationsProvider = function (_a) {
    var children = _a.children, translations = _a.translations, errorComponent = _a.errorComponent, loadingComponent = _a.loadingComponent, _b = _a.defaultLocale, defaultLocale = _b === void 0 ? "tr" : _b, _c = _a.remoteTranslationsUrl, remoteTranslationsUrl = _c === void 0 ? "" : _c;
    var defaultState = {
        error: null,
        languages: [],
        loading: false,
        translations: translations || {},
        locale: translations && !remoteTranslationsUrl ? "" : defaultLocale,
    };
    var _d = react_1.useReducer(TranslationsReducer_1.TranslationsReducer, defaultState), state = _d[0], dispatch = _d[1];
    var translationsCb = react_1.useCallback(function () {
        TranslationsActions_1.onChangeLoading(dispatch, true);
        fetch(remoteTranslationsUrl)
            .then(function (response) { return response.json(); })
            .then(function (response) { return TranslationsActions_1.onSetTranslations(dispatch, response); })
            .catch(function (error) { return TranslationsActions_1.onSetError(dispatch, error); })
            .finally(function () { return TranslationsActions_1.onChangeLoading(dispatch, false); });
    }, []);
    react_1.useEffect(function () {
        if (remoteTranslationsUrl) {
            translationsCb();
        }
        else {
            TranslationsActions_1.onChangeLanguage(dispatch, defaultLocale);
            TranslationsActions_1.onSetTranslations(dispatch, translations);
        }
    }, [translations]);
    var loading = state.loading, error = state.error;
    return (react_1.default.createElement(TranslationsContext_1.default.Provider, { value: { state: state, dispatch: dispatch } },
        loading && loadingComponent && loadingComponent(),
        loading && !loadingComponent && react_1.default.createElement(TranslationLoading_1.TranslationLoading, null),
        !loading && error && errorComponent && errorComponent(translationsCb),
        !loading && error && !errorComponent && (react_1.default.createElement(TranslationsError_1.TranslationsError, { onPress: translationsCb })),
        !loading && !error && children));
};
exports.default = TranslationsProvider;
