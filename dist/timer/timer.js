"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startTimer = void 0;
const node_notifier_1 = __importDefault(require("node-notifier"));
const parse_input_1 = require("../parse-input/parse-input");
const parse_duration_to_string_1 = require("../parse-duration-to-string/parse-duration-to-string");
function startTimer(duration, Timer) {
    const parsedDuration = (0, parse_input_1.parseInputToSeconds)(duration);
    if (parsedDuration === undefined || Number.isNaN(parsedDuration)) {
        throw new Error('So sorry, I can only count numbers!');
    }
    const startTime = Date.now();
    const timer = Timer((0, parse_duration_to_string_1.parseDurationToString)(parsedDuration));
    const intervalId = setInterval(() => {
        const timePassedInSeconds = (Date.now() - startTime) / 1000;
        const durationLeft = Math.round(parsedDuration - timePassedInSeconds);
        timer.update((0, parse_duration_to_string_1.parseDurationToString)(durationLeft));
        if (durationLeft <= 0) {
            clearInterval(intervalId);
            timer.stop('Done');
            let notificationCounter = 5;
            const notificationIntervalId = setInterval(() => {
                if (notificationCounter <= 0) {
                    clearInterval(notificationIntervalId);
                    return;
                }
                notificationCounter--;
                node_notifier_1.default.notify({
                    title: 'DONE',
                    message: 'Timer is over!',
                    sound: 'Ping',
                });
            }, 1015);
        }
    }, 1000);
}
exports.startTimer = startTimer;
//# sourceMappingURL=timer.js.map