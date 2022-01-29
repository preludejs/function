export type Guard<T, U extends T> =
  (a: T) => a is U

export type Predicate<T> =
  (value: T) => boolean

export type Predicate2<T> =
  (a: T, b: T) => boolean
