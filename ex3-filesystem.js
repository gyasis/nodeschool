var fs = require('fs')

filepath = process.argv[2]
getit = fs.readFileSync(filepath)


var str = getit.toString()
str = str.split("\n")
total = str.length - 1

//getit.toStrig().split("\n").length - 1

console.log(total)


