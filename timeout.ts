const timeout =
  <T, U>(wait: number, f: () => Promise<T>, g: () => U): Promise<T | U> =>
    new Promise((resolve, reject) => {
      const id = setTimeout(() => {
        try {
          resolve(g())
        } catch (err: unknown) {
          reject(err)
        }
      }, wait)
      f()
        .finally(() => clearTimeout(id))
        .then(resolve)
        .catch(reject)
    })

export default timeout
