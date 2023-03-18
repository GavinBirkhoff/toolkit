import { curry, isArrayBuffer, isRegExp } from '@/eskit/src'
console.log('hello eskit')
function add(a, b, c) {
  return a + b + c
}
const f = curry(add)
const r = f(1)(2)(3)
console.log(r, 'curry')
// isArrayBuffer
const ab = new ArrayBuffer(2)
console.log(isArrayBuffer(ab), 'isArrayBuffer')
// isRegExp
console.log(isRegExp(/a/), 'isRegExp')
