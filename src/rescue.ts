/** Rescues thunk throwing an error with provided fallback function. */
const rescue =
  <T, U>(thunk: () => T, fallback: (err: unknown) => U): T | U => {
    try {
      return thunk()
    } catch (err) {
      return fallback(err)
    }
  }

export default rescue
