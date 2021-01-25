var mymodule = require('./mymodule.js')




fs.readdir(path, function (err, list) {
    mymodule(list)
    // console.log(returnlist)
})
