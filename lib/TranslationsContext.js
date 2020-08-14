"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var TranslationsContext = react_1.default.createContext({
    state: {
        locale: '',
        languages: [],
        translations: {},
    },
    dispatch: function () { return null; },
});
exports.default = TranslationsContext;
