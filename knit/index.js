const Build = require('nativefier').default

// Load configuration objects from json files
var windows = require('./options')

// Functions
function buildFor (options) {
  return new Promise(resolve => {
    Build(options, resolve)
  })
}

buildFor(windows)
