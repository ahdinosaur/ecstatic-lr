# ecstatic-lr

[`ecstatic`](https://github.com/jfhbrook/node-ecstatic/#ecstatic-) with [`inject-lr-script`](https://github.com/mattdesl/inject-lr-script#inject-lr-script) added

## install

```
npm i --save-dev ecstatic-lr
```

## usage

see [ecstatic docs](https://github.com/jfhbrook/node-ecstatic#api).

options and defaults are the same except:

```
var opts = Object.assign(ecstaticOpts, {
  cache: 0,
  autoIndex: true
})
```

command-line bin is `ecstatic-lr`.

## license

ISC
