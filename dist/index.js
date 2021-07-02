"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = exports.InjectLogger = void 0;
const uuidv4_1 = require("uuidv4");
function InjectLogger(ctr) {
    ctr.prototype.logger = new Logger({ name: ctr.prototype.constructor.name });
}
exports.InjectLogger = InjectLogger;
class Logger {
    constructor(params) {
        this.uuid = uuidv4_1.uuid();
        this.prefix = (params === null || params === void 0 ? void 0 : params.name) || null;
    }
    message(type, ...args) {
        if (process.env.NODE_ENV === 'test')
            return;
        const fn = console[type];
        if (this.uuid)
            args.unshift(`[${this.uuid}]`);
        if (this.prefix)
            args.unshift(`[${this.prefix}]`);
        fn(...args);
    }
    resetId() {
        this.uuid = uuidv4_1.uuid();
    }
    log(...args) {
        this.message('log', ...args);
    }
    warn(...args) {
        this.message('warn', ...args);
    }
    error(...args) {
        this.message('error', ...args);
    }
    info(...args) {
        this.message('info', ...args);
    }
}
exports.Logger = Logger;
//# sourceMappingURL=index.js.map