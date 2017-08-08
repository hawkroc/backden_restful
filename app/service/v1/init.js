const initModel = require('../../models/init.js')

module.exports = {
  getData
}

async function getData () {
  debugger
  let ret = await initModel.count()
  return ret
}
