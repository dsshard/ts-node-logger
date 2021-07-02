import { uuid } from 'uuidv4'

interface LoggerConstructorParams {
    name: string
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function InjectLogger (ctr: Function) {
    ctr.prototype.logger = new Logger({ name: ctr.prototype.constructor.name })
}

export class Logger {
    private readonly prefix: string
    private uuid: string

    constructor (params?: LoggerConstructorParams) {
        this.uuid = uuid()
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
        this.uuid = uuid()
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
