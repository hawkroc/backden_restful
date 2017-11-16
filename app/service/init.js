'use strict'

async function getData() {
	let ret = await db.Init.find()
	return ret
}

async function addData(opt) {
	let ret = await db.Init.create(opt)
	return ret
}

module.exports = {
	getData,
	addData
}
