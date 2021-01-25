var fs = require('fs')
var path = process.argv[2]
var extension = process.argv[3]

// THIS CODE BLOCK WORKS 
// fs.readdir(path, function(err, list){
//     console.log(list)
// })



fs.readdir(path, function(err, list) {
    filter(list)
    console.log(returnlist)
})

function filter(ary){

    returnlist = []


    list.forEach(function(element){
        console.log(element)
        returnlist.push(element)
        console.log('added')

    }


    return returnlist

    )
}