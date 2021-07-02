interface LoggerConstructorParams {
    name?: string;
    length?: number;
}
export declare function InjectLogger(ctr: Function): void;
export declare class Logger {
    private readonly prefix;
    private readonly length;
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
