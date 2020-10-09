const { expectCt } = require('helmet')
const { createToken, decodeToken } = require('../services/jwt.service')

const testerUser = {
  name: 'noah',
  sub: '12345',
  role: 'admin'
}

test('Testing create token srvice', () => {
  expect(createToken(testerUser).split('.').length).toBe(3)
})

test('Testing decode token service: Should return a user object', () => {
  const token = createToken(testerUser)
  expect(decodeToken(token)).toHaveProperty('name', testerUser.name)
  expect(decodeToken(token)).toHaveProperty('role', testerUser.role)
})
