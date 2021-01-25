var fs = require('fs')
var path = process.argv[2]
var extension = process.argv[3]

// THIS CODE BLOCK WORKS 
// fs.readdir(path, function(err, list){
   
// console.log(typeof(list))
// console.log(Array.isArray(list))
// buildext = "."+ extension
// var pos = list[1].search(buildext);
// console.log(list[1])
// console.log(extension)
// console.log(buildext)
// console.log(pos)



// })

function filter(list) {

    returnlist = []

    list.forEach(function (element) {
        buildext = "."+ extension
        var pos = element.search(buildext);
        if (pos > -1) {

            returnlist.push(element); 
            
        } 
        
       
    })

    return returnlist;
}el



fs.readdir(path, function (err, list) {
    filter(list)
    console.log(returnlist)
})


