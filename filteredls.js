var fs = require('fs')
var path = require('path')

function callback(err, files) {
	files.forEach( function (file) {
		if(path.extname(file) === '.' + process.argv[3]) {
			console.log(file)
		}
	})
}
var contents = fs.readdir(process.argv[2], callback)
