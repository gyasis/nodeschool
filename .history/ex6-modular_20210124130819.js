var mymodule = require('./mymodule.js')

var fs = require('fs')
var path = process.argv[2]
var extension = process.argv[3]


fs.readdir(path, function (err, list) {
    mymodule(list)
    // console.log(returnlist)
})
