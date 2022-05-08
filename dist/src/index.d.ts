export declare function toArray(any: any): any[];
export declare function uuid(len?: number): string;
interface LoggerConstructorParams {
    name: string[] | string;
    uuid?: number;
}
export declare class Logger {
    protected readonly prefixes: string[];
    private uuid;
    private options;
    constructor(params?: LoggerConstructorParams);
    resetId(): void;
    private message;
    fork(params?: LoggerConstructorParams): Logger;
    log(...args: any[]): void;
    warn(...args: any[]): void;
    error(...args: any[]): void;
    info(...args: any[]): void;
}
export {};
