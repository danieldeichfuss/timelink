"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.error = exports.Spinner = void 0;
const chalk_1 = __importDefault(require("chalk"));
const ora_1 = __importDefault(require("ora"));
const log_symbols_1 = __importDefault(require("log-symbols"));
function Spinner(text) {
    const spinner = (0, ora_1.default)(chalk_1.default.green(text)).start();
    return {
        update(text) {
            spinner.text = chalk_1.default.green(text);
        },
        stop(text) {
            spinner.stopAndPersist({
                symbol: log_symbols_1.default.success,
                text,
            });
        },
    };
}
exports.Spinner = Spinner;
function error(text) {
    console.error(chalk_1.default.bold.red(text));
}
exports.error = error;
//# sourceMappingURL=display.js.map