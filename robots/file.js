const fs = require('fs')

function save(content, contentFilePath) {
  const contentString = JSON.stringify(content)
  return fs.writeFileSync(`./documents/${contentFilePath}.json`, contentString)
}

function load(contentFilePath) {
  const fileBuffer = fs.readFileSync(`./documents/${contentFilePath}.json`, 'utf-8')
  const contentJson = JSON.parse(fileBuffer)
  return contentJson
}

module.exports = {save,load}
