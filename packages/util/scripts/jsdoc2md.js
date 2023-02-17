const path = require('path')
const jsdoc2md = require('jsdoc-to-markdown')

jsdoc2md.render({ files: path.join(__dirname, '..', 'esm/*.js') }).then(console.log)
