"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TranslationLoading = void 0;
var react_1 = __importDefault(require("react"));
exports.TranslationLoading = function () { return (react_1.default.createElement("div", { style: styles.loadingContainer },
    react_1.default.createElement("h1", null, "Loading"))); };
var styles = {
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
    },
};
