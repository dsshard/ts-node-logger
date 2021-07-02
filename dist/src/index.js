"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InjectLogger = void 0;
const uuid_1 = require("uuid");
function InjectLogger(ctr) {
    ctr.prototype.logger = new Logger({ name: ctr.prototype.constructor.name });
}
exports.InjectLogger = InjectLogger;
class Logger {
    constructor(params) {
        this.uuidv4 = uuid_1.v4();
        this.prefix = (params === null || params === void 0 ? void 0 : params.name) || null;
    }
    message(type, ...args) {
        if (process.env.NODE_ENV === 'test')
            return;
        const fn = console[type];
        if (this.uuidv4)
            args.unshift(`[${this.uuidv4}]`);
        if (this.prefix)
            args.unshift(`[${this.prefix}]`);
        fn(...args);
    }
    resetId() {
        this.uuidv4 = uuid_1.v4();
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
exports.default = Logger;
//# sourceMappingURL=index.js.map