"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseInputToSeconds = void 0;
function parseInputToSeconds(input) {
    const split = input.split(':').reverse();
    let result;
    try {
        result = split.reduce((previousValue, currentValue, index) => {
            const result = Number.parseInt(currentValue) * Math.pow(60, index);
            return result + previousValue;
        }, 0);
    }
    catch (error) {
        console.error('Invalid input. Please follow the format', error);
    }
    return result;
}
exports.parseInputToSeconds = parseInputToSeconds;
//# sourceMappingURL=parse-input.js.map