export function toArray (any: any): any[] {
  return Array.isArray(any) ? any : [any]
}

const s4 = (): string => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1)

export function uuid (len = 100): string {
  return `${s4() + s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`.slice(0, len)
}

interface LoggerConstructorParams {
  name: string[] | string
  uuid?: number
}

export class Logger {
  protected readonly prefixes: string[] = []
  private uuid: string = null
  private options: LoggerConstructorParams;

  constructor (params?: LoggerConstructorParams) {
    this.options = params
    if (params.uuid) {
      this.uuid = uuid(params.uuid || 5)
    }
    if (params?.name) {
      this.prefixes.push(...toArray(params?.name))
    }
  }

  public resetId (): void {
    this.uuid = uuid(this.options.uuid || 5)
  }

  private message (type: keyof Console, ...args: any[]): void {
    if (process.env.NODE_ENV === 'test') return

    const fn: any = console[type]
    if (this.uuid) args.unshift(`[${this.uuid}]`)

    if (this.prefixes.length) {
      [...this.prefixes].reverse().forEach(prefix => {
        args.unshift(`[${prefix}]`)
      })
    }

    fn(...args)
  }

  public fork (params?: LoggerConstructorParams) {
    const name = [...this.prefixes].concat(...toArray(params.name))
    return new Logger({ ...params, name })
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
