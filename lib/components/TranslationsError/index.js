"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TranslationsError = void 0;
var react_1 = __importDefault(require("react"));
exports.TranslationsError = function (_a) {
    var onPress = _a.onPress;
    return (react_1.default.createElement("div", { style: styles.container },
        react_1.default.createElement("div", { onClick: onPress, style: styles.button },
            react_1.default.createElement("h1", { style: styles.buttonTitle }, "Hata Olustu Tekrar Yukle!"))));
};
var styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        padding: 16,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FF422D',
    },
    buttonTitle: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
    },
};
