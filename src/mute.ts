import rescue from './rescue.js'

/**
 * Mutes thunk throwing an error.
 *
 * @returns `defaultValue` if `thunk` throws, otherwise returns the return value of `thunk`.
 */
const mute =
  <T, U>(thunk: () => T, defaultValue: U): T | U =>
    rescue(thunk, () => defaultValue)

export default mute
