import noop from './noop.js'

const fire =
  (f: () => Promise<unknown>, rejected = noop): void => {
    f().catch(rejected)
  }

export default fire
