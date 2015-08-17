'use strict'

module.exports = function(content) {
  var d = document.createElement('div')

  d.innerHTML = content
  for (var i = 0, len = d.childNodes.length;i < len;i++) {
    document.body.appendChild(d.childNodes.item(i))
  }
}
