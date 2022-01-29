/** @returns function decrementing number by specified value (default 1). */
const dec =
  (by = 1) =>
    (value: number) =>
      value - by

export default dec
