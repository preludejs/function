const memoize =
  <Args extends unknown[], R>(f: (...args: Args) => R, k: (args: Args) => string = JSON.stringify) => {
    const cache = new Map<string, R>()
    const f_ =
      (...args: Args) => {
        const key = k(args)
        if (cache.has(key)) {
          return cache.get(key) as R
        }
        const r = f(...args)
        cache.set(key, r)
        return r
      }
    f_.cache = cache
    return f_
  }

export default memoize
