const fs = require('fs')
const { exit } = require('process')
const hyphen2Hump = function (sName) {
  return sName.replace(/^-/, '').replace(/-(\w)(\w+)/g, (a, b, c) => {
    console.log(a, b, c)
    return b.toUpperCase() + c.toLowerCase()
  })
}
let components = []
const files = fs.readdirSync('./src/')
files.forEach((item, index) => {
  const stat = fs.lstatSync(`./src/${item}`)
  if (stat.isFile() === true) {
    components.push(item)
  }
})

components = components
  .filter((el) => el !== 'index.ts')
  .map((item) => {
    const fileName = item.replace('.ts', '')
    const str = `export { default as ${hyphen2Hump(fileName)}${
      fileName === 'contains' ? ', default as includes' : ''
    } } from './${fileName}'`
    return str
  })
const str = `${components.join('\n')}\n`

fs.writeFile('./src/index.ts', str, (err) => {
  if (err) {
    exit(1)
  }
})
