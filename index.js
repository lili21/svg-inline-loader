'use strict'

var path = require('path')
var utils = require('loader-utils')

module.exports = function(content) {
  this.cacheable && this.cacheable()

  return [
    '// svg-inline-loader: inserts the svg content of resource into the DOM',
    '',
    '// load the content',
    'var content = ' + utils.stringifyRequest(this, content),
    '// load the inline function',
    'var addSvg = require(' + utils.stringifyRequest(this, path.join(__dirname, './addSvg.js')) + ');',
    '// Insert svg into dom',
    'addSvg(content);',
    ''
  ].join('\n')
}
