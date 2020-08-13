"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TranslationsError = void 0;
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
exports.TranslationsError = function (_a) {
    var onPress = _a.onPress;
    return (react_1.default.createElement(react_native_1.SafeAreaView, { style: styles.container },
        react_1.default.createElement(react_native_1.TouchableOpacity, { onPress: onPress, style: styles.button, activeOpacity: 0.9 },
            react_1.default.createElement(react_native_1.Text, { style: styles.buttonTitle }, "Hata Olustu Tekrar Yukle!"))));
};
var styles = react_native_1.StyleSheet.create({
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
        fontWeight: '700',
    },
});
