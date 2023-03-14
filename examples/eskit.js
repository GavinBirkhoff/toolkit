import { curry } from '@/eskit/src'
console.log('hello eskit')
function add(a, b, c) {
  return a + b + c
}
const f = curry(add)
const r = f(1)(2)(3)
console.log(r, 'curry')
