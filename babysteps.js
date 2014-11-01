var args = process.argv
var total = 0;
for(arg in args) {
	// console.log('Args :' + process.argv[arg] + '::' + arg)
	if(arg > 1) {
		total = total + Number(process.argv[arg]) 
	}
}
console.log(total)