"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = exports.uuid = exports.toArray = void 0;
function toArray(any) {
    return Array.isArray(any) ? any : [any];
}
exports.toArray = toArray;
const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
function uuid(len = 100) {
    return `${s4() + s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`.slice(0, len);
}
exports.uuid = uuid;
class Logger {
    constructor(params) {
        this.prefixes = [];
        this.uuid = null;
        this.options = params;
        if (params.uuid) {
            this.uuid = uuid(params.uuid || 5);
        }
        if (params === null || params === void 0 ? void 0 : params.name) {
            this.prefixes.push(...toArray(params === null || params === void 0 ? void 0 : params.name));
        }
    }
    resetId() {
        this.uuid = uuid(this.options.uuid || 5);
    }
    message(type, ...args) {
        if (process.env.NODE_ENV === 'test')
            return;
        const fn = console[type];
        if (this.uuid)
            args.unshift(`[${this.uuid}]`);
        if (this.prefixes.length) {
            [...this.prefixes].reverse().forEach(prefix => {
                args.unshift(`[${prefix}]`);
            });
        }
        fn(...args);
    }
    fork(params) {
        const name = [...this.prefixes].concat(...toArray(params.name));
        return new Logger(Object.assign(Object.assign({}, params), { name }));
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
