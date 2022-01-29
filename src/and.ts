import type { Predicate, IntersectionOfUnion } from './prelude.js'

const and =
  <Args extends Predicate<unknown>[]>(...fs: Args) =>
    (value: IntersectionOfUnion<Parameters<Args[number]>[0]>) => {
      for (let f of fs) {
        if (!f(value)) {
          return false
        }
      }
      return true
    }

export default and
