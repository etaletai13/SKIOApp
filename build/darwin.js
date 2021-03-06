const Build = require('nativefier').default

// Load configuration objects from json files
var darwin = require('./darwin')

// Functions
function buildThis (options) {
  return new Promise(resolve => {
    Build(options, resolve)
  })
}

buildThis(darwin)
