import type { Predicate } from './prelude.js'

const or =
  <Args extends Predicate<unknown>[]>(...fs: Args) =>
    (value: Parameters<Args[number]>[0]) => {
      for (let f of fs) {
        if (f(value)) {
          return true
        }
      }
      return false
    }

export default or
