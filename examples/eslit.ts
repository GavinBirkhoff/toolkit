import { each } from '../packages/eskit/src'

const str = 'abcde'
each(str, (value) => {
  console.log(value)
})

const arr = [1, '2']
each(arr, (value, key) => {
  console.log(value, key)
})

const mymap = new Map<string | number, string | number>([
  [1, 'a'],
  ['b', 2]
])

each(mymap, (value, key) => {
  console.log(value, key)
})
