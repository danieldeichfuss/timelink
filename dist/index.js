#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cli = void 0;
const display_1 = require("./display/display");
const timer_1 = require("./timer/timer");
function cli(args) {
    const input = args[2];
    if (!input) {
        (0, display_1.error)('Uuups! Tell us how long your timer should run.');
        return;
    }
    if (args.length > 3) {
        (0, display_1.error)("Slow your 🐴, that's too much input. Just tell me the time and we are good 🤝.");
        return;
    }
    try {
        (0, timer_1.startTimer)(input, display_1.Spinner);
    }
    catch (e) {
        if (e instanceof Error) {
            (0, display_1.error)(e.message);
        }
        else {
            (0, display_1.error)(`Unknown error: ${e}`);
        }
    }
}
exports.cli = cli;
cli(process.argv);
//# sourceMappingURL=index.js.map