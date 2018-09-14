const Build = require('nativefier').default

// Load configuration objects from json files
var options = require('./win32.json')

// Functions
function buildThis (options) {
  return new Promise(resolve => {
    Build(options, resolve)
  })
}

buildThis(options)
