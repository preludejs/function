export type Guard<T, U extends T> =
  (a: T) => a is U

export type Predicate<T> =
  (value: T) => boolean

export type Predicate2<T> =
  (a: T, b: T) => boolean

export type IntersectionOfUnion<T> =
  (T extends unknown ? (_: T) => unknown : never) extends (_: infer R) => unknown ?
    R :
    never
