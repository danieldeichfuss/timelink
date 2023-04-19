"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseDurationToString = void 0;
function parseDurationToString(duration) {
    const dayInSeconds = 86400;
    if (duration >= dayInSeconds) {
        throw new Error('This is a timer not a calendar! Try to stay under a day');
    }
    const durationInMs = duration * 1000;
    return new Date(durationInMs).toISOString().slice(11, 19);
}
exports.parseDurationToString = parseDurationToString;
//# sourceMappingURL=parse-duration-to-string.js.map