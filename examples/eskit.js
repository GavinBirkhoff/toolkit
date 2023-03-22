import { curry, isArrayBuffer, isRegExp, add } from '@/eskit/src'
console.log('hello eskit')
function add2(a, b, c) {
  return a + b + c
}
const f = curry(add2)
const r = f(1)(2)(3)
console.log(r, 'curry')
// isArrayBuffer
const ab = new ArrayBuffer(2)
console.log(isArrayBuffer(ab), 'isArrayBuffer')
// isRegExp
console.log(isRegExp(/a/), 'isRegExp')
// add
console.log(add(0.1, '0.2'), 'add')
