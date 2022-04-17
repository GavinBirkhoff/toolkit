const path = require('path')
const jsdoc2md = require('jsdoc-to-markdown')
console.log(111111111111)

jsdoc2md.render({ files: path.join(__dirname, '..', 'esm/*.js') }).then(console.log)
