"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = exports.InjectLogger = void 0;
const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
function uuid(len = 100) {
    return `${s4() + s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`.slice(0, len);
}
function InjectLogger(ctr) {
    ctr.prototype.logger = new Logger({ name: ctr.prototype.constructor.name });
}
exports.InjectLogger = InjectLogger;
class Logger {
    constructor(params) {
        this.uuid = uuid(5);
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
        this.uuid = uuid(5);
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