import * as Q from '@prelude/serial-queue'

const serial =
  <Args extends unknown[], T>(f: (...args: Args) => Promise<T>) => {
    const q = Q.of(f)
    return (...args: Args) =>
      Q.push(q, ...args)
  }

export default serial
