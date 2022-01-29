import and from './and.js'
import dec from './dec.js'
import equivalent from './equivalent.js'
import eventually from './eventually.js'
import fire from './fire.js'
import identity from './identity.js'
import implies from './implies.js'
import inc from './inc.js'
import memoize from './memoize.js'
import noop from './noop.js'
import not from './not.js'
import or from './or.js'
import pipe from './pipe.js'
import pipe1 from './pipe1.js'
import serial from './serial.js'
import sleep from './sleep.js'
import throttle from './throttle.js'
import timeout from './timeout.js'
import xor from './xor.js'

export * from './prelude.js'

export interface t extends Function {}

const t_ = Function

export {
  implies,
  and,
  dec,
  equivalent,
  eventually,
  fire,
  identity,
  inc,
  memoize,
  noop,
  not,
  or,
  pipe,
  pipe1,
  serial,
  sleep,
  t_ as t,
  throttle,
  timeout,
  xor
}
