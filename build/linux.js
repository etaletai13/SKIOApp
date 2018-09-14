const Build = require('nativefier').default

// Load configuration objects from json files
var linux = require('./linux.json')

// Functions
function buildThis (options) {
  return new Promise(resolve => {
    Build(options, resolve)
  })
}

buildThis(linux)
