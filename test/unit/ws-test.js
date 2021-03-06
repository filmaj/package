let parse = require('@architect/parser')
let test = require('tape')
let pkg = require('../../')

let arcfile = `
@app
myapp
@ws
`

test('web sockes have a policy doc', t => {
  t.plan(2)
  let parsed = parse(arcfile)
  let cfn = pkg.toSAM(parsed)
  t.ok(pkg, 'pkg')
  t.ok(cfn.Resources.hasOwnProperty('WebSocketPolicy'), 'WebSocketPolicy')
  //console.log(JSON.stringify(cfn, null, 2))
})
