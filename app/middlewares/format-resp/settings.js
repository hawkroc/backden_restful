/**
 * @author [norain]
 * @email [norain4u@yeah.net]
 * @create date 2017-04-19 04:17:20
 * @modify date 2017-04-19 04:17:20
 * @desc [description]
*/

'use strict'

const status = {
  200: {succeed: true,  code: 200, status: 'success',       desc: 'OK! ｡◕‿◕｡'},
  500: {succeed: false, code: 500, status: 'interalErrror', desc: 'server is error!（￣工￣lll）'},
  404: {succeed: false, code: 404, status: 'notFound',      desc: 'there are no api for this! ㄟ( ▔, ▔ )ㄏ'},
  403: {succeed: false, code: 403, status: 'noAuth',        desc: 'No permit! o(´^｀)o'}
}

module.exports = status
