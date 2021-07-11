const fs = require('fs')
const hyphen2Hump = function (sName) {
  return sName.replace(/^\-/, '').replace(/\-(\w)(\w+)/g, function (a, b, c) {
    return b.toUpperCase() + c.toLowerCase()
  })
}
let components = []
const files = fs.readdirSync('../src/')
files.forEach(function (item, index) {
  const stat = fs.lstatSync('../src/' + item)
  if (stat.isFile() === true) {
    components.push(item)
  }
})

components = components.map((item) => {
  const fileName = item.replace('.ts', '')
  const str = `export { default as ${hyphen2Hump(fileName)} } from './${fileName}'`
  return str
})

let str = JSON.stringify(components)

fs.writeFile('./index.js', str, function (err) {
  if (err) {
    res.status(500).send('Server is error...')
  }
})
