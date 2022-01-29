import * as F from './index.js'

test('implies', () => {
  const admin = (user: { admin: boolean }) => user.admin
  const archived = (user: { archived: boolean }) => user.archived
  const f = F.implies(admin, F.not(archived))
  expect(f({ admin: false, archived: false })).toBe(true)
  expect(f({ admin: false, archived: true })).toBe(true)
  expect(f({ admin: true, archived: false })).toBe(true)
  expect(f({ admin: true, archived: true })).toBe(false)
})
