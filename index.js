// copied from https://github.com/mattdesl/inject-lr-script#inject-lr-script
var inject = require('inject-lr-script')
var ecstatic = require('ecstatic')
var defined = require('defined')

module.exports = createEcstaticLr

function createEcstaticLr (dir, opts) {
  if (typeof dir !== 'string') {
    opts = dir
    dir = opts.root
  }

  // default options
  opts.cache = defined(opts.cache, 0)
  opts.autoIndex = defined(opts.autoIndex, opts.autoindex, true)

  var handler = ecstatic(dir, opts)
  return function ecstaticLr (req, res) {
    return handler(req, inject(res))
  }
}
