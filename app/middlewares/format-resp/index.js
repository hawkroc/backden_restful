/**
 * @author [norain]
 * @email [norain4u@yeah.net]
 * @create date 2017-04-19 04:27:54
 * @modify date 2017-04-19 04:27:54
 * @desc [description]
*/

'use strict'

const status = require('./settings')

exports.formatResp = function(options) {
	options = options || {}
	let defaultFormat = options.format || 'JSONString'

	return function formatResp(result, req, res, next) {
		// console.log('result'+JSON.stringify(result))
		if (_.isError(result)) {
			result = {
				code: result.status,
				err: result,
				msg: result.message
			}
		}

		let msg  = result.msg || status[result.code].desc
		let ext  = result.ext || {}
		let err  = result.err
		let desc = result.desc || status[result.code].desc

		/**
     * error handler
     *
     * @param {any} err
     */

		let resp = {
			Success: status[result.code].succeed,
			Code: result.code,
			Desc: desc,
			Msg: msg,
			extData: ext
		}

		if (err) {
			resp.Code = result.code
			// res.
		}
		let format = defaultFormat
		if (format === 'JSONString') {
			res.send(JSON.stringify(resp))
		} else {
			res.json(resp)
		}
	}
}
