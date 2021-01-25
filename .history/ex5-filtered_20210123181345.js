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

function filter(x){

    returnlist = []

    list.forEach(element => {
        i = 0
        if (path.extname(list[i] == path)) {
            returnlist.push(list[i]) 
            i++
            console.log('the list equals the path')
            console.log(i)
        } else {
            i++
            console.log('the list does not equal the path')
            console.log(i)
        }
        return returnlist
    });
    
}