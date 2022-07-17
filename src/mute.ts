import rescue from './rescue.js'

/**
 * Mutes thunk throwing an error.
 *
 * @returns `defaultValue` if `thunk` throws, otherwise returns the return value of `thunk`.
 */
const mute =
  <T>(thunk: () => T, defaultValue: T): T =>
    rescue(thunk, () => defaultValue)

export default mute
