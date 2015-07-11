#!/usr/bin/env node

// mostly copied from https://github.com/jfhbrook/node-ecstatic/blob/master/lib/ecstatic.js#L282-L299
var http = require('http')
var opts = require('minimist')(process.argv.slice(2))
var ecstaticLr = require('./')
var port = opts.port || opts.p || 8000
var dir = opts.root || opts._[0] || process.cwd()

if (opts.help || opts.h) {
  var u = console.error
  u('usage: ecstatic-lr [dir] {options} --port PORT')
  u('see https://npm.im/ecstatic for more docs')
  return
}

http.createServer(ecstaticLr(dir, opts))
.listen(port, function () {
  console.log('ecstatic-lr serving ' + dir + ' at http://0.0.0.0:' + port)
})
