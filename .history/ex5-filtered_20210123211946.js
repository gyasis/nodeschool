var fs = require('fs')
var path = process.argv[2]
var extension = process.argv[3]

// THIS CODE BLOCK WORKS 
// fs.readdir(path, function(err, list){
//     console.log(list)
// console.log(typeof(list))
// console.log(Array.isArray(list))
// })

function filter(list) {

    returnlist = []

    list.forEach(function (element) {
        buildext = ""

        if () {
            
        } else {
            
        }
        returnlist.push(element);
        console.log('added');
       
    })

    return returnlist;
}el



fs.readdir(path, function (err, list) {
    filter(list)
    console.log(returnlist)
})


