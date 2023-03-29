const fs = require('fs')
const path = require('path')
const toc = require('markdown-toc')

const docsDir = './docs' // Typedoc 生成的 Markdown 文件夹
const readmePath = './README.md' // 根目录下的 README.md 文件
const templatePath = './scripts/template/readme.md' // 模板文件路径

// 获取 docsDir 文件夹中的所有 Markdown 文件路径
const mdPaths = fs
  .readdirSync(docsDir)
  .filter((file) => path.extname(file) === '.md')
  .map((file) => path.join(docsDir, file))

// 读取模板文件
const templateData = fs.readFileSync(templatePath, 'utf-8')

// 读取第一个 Typedoc 生成的 Markdown 文件
let docsData = fs.readFileSync(mdPaths[0], 'utf-8').trim()

// 自动生成 Markdown 目录
docsData = toc.insert(docsData)

// 将模板文件与 Typedoc 生成的 Markdown 文件合并
const mergedData = `${templateData}\n\n${docsData}`

// 将合并后的文件直接替换 README.md 文件
fs.writeFileSync(readmePath, mergedData, 'utf-8')
console.log('文档已更新')
