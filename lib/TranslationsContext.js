"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TranslationsContext = void 0;
var react_1 = __importDefault(require("react"));
exports.TranslationsContext = react_1.default.createContext({
    state: {
        locale: '',
        languages: [],
        translations: {},
    },
    dispatch: function () { return null; },
});
