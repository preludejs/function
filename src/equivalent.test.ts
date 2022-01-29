import * as F from './index.js'

test('equivalent', () => {
  const admin = (user: { admin: boolean }) => user.admin
  const adminRole = (user: { role: string }) => user.role === 'ADMIN'
  const f = F.equivalent(admin, adminRole)
  expect(f({ admin: false, role: 'USER' })).toBe(true)
  expect(f({ admin: false, role: 'ADMIN' })).toBe(false)
  expect(f({ admin: true, role: 'USER' })).toBe(false)
  expect(f({ admin: true, role: 'ADMIN' })).toBe(true)
})
