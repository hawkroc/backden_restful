const Init     = require('../../app/service/v1/init.js')
const expect   = require('chai').expect

describe('测试获取initData接口', function () {
  it('返回值应为json对象', function () {
    expect(Init.getData()).to.be.an('array')
  })
})
