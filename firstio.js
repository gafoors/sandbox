var fs = require('fs')

var filename = process.argv[2]
var contents = fs.readFileSync(filename).toString()
// console.log(contents)
var lines = contents.split("\n").length - 1
console.log(lines)