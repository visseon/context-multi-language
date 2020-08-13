"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TranslationLoading = void 0;
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
exports.TranslationLoading = function () { return (react_1.default.createElement(react_native_1.View, { style: styles.loadingContainer },
    react_1.default.createElement(react_native_1.ActivityIndicator, { size: "large", color: "#3366FF" }))); };
var styles = react_native_1.StyleSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
    },
});
