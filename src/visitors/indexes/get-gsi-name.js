let toLogicalID = require('../to-logical-id')

module.exports = function _getGsiName(attr) {
  var keys = Object.keys(attr)
  var hash = keys[0] // FIXME this is brittle should lookup *String, etc
  var range = keys.length === 2? `${keys[1]}-` : false
  return toLogicalID(`${hash}-${range? range : ''}index`)
}
