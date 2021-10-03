const throttle =
  (wait: number, f: () => void) => {
    let n = 0
    const g =
      () => {
        if (n++ === 0) {
          setTimeout(() => {
            if (--n > 0) {
              n = 0
              g()
            }
          }, wait)
          f()
        }
      }
    return g
  }

export default throttle
