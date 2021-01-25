var mymodule = require('./mymodule.js').default
var fs = require('fs')
var path = process.argv[2]
var extension = process.argv[3]


fs.readdir(path, function (err, list) {
    mymodule.filter(list)
    // console.log(returnlist)
})
