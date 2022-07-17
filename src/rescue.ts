/** Rescues thunk throwing an error with provided fallback function. */
const rescue =
  <T>(thunk: () => T, fallback: (err: unknown) => T): T => {
    try {
      return thunk()
    } catch (err) {
      return fallback(err)
    }
  }

export default rescue
