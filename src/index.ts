const s4 = (): string => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1)

function uuid (len: number = 10): string {
    return `${s4() + s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`.slice(0, len)
}

interface LoggerConstructorParams {
    name?: string,
    length?: number,
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function InjectLogger (ctr: Function) {
    ctr.prototype.logger = new Logger({ name: ctr.prototype.constructor.name, length: ctr.prototype.constructor.length })
}

export class Logger {
    private readonly prefix: string
    private readonly length: number
    private uuid: string

    constructor (params?: LoggerConstructorParams) {
        this.uuid = uuid(params?.length || 5)
        this.length = params?.length || 5
        this.prefix = params?.name || null
    }

    private message (type: keyof Console, ...args: any[]): void {
        if (process.env.NODE_ENV === 'test') return

        const fn = console[type]
        if (this.uuid) args.unshift(`[${this.uuid}]`)
        if (this.prefix) args.unshift(`[${this.prefix}]`)

        fn(...args)
    }

    public resetId (): void {
        this.uuid = uuid(this.length)
    }

    public log (...args: any[]): void {
        this.message('log', ...args)
    }

    public warn (...args: any[]): void {
        this.message('warn', ...args)
    }

    public error (...args: any[]): void {
        this.message('error', ...args)
    }

    public info (...args: any[]): void {
        this.message('info', ...args)
    }
}
