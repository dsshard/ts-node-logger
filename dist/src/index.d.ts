interface LoggerConstructorParams {
    name: string;
}
export declare function InjectLogger(ctr: Function): void;
export default class Logger {
    private readonly prefix;
    private uuid;
    constructor(params?: LoggerConstructorParams);
    private message;
    resetId(): void;
    log(...args: any[]): void;
    warn(...args: any[]): void;
    error(...args: any[]): void;
    info(...args: any[]): void;
}
export {};
