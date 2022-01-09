import * as Function from './index.js'

test('Function.t works with instanceof', () => {
  const f = () => 1
  expect(f instanceof Function.t).toBe(true)
})

test('Function.t is a function', () => {
  expect(typeof Function.t).toBe('function')
})

test('Function.t can be used as type in Map', () => {
  const map = new Map<string, Function.t>()
  map.set('f', (_: number) => _ + 1)
  expect(map.get('f')?.(1)).toEqual(2)
})
