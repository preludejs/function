/** @returns function incrementing number by specified value (default 1). */
const inc =
  (by = 1) =>
    (value: number) =>
      value + by

export default inc
