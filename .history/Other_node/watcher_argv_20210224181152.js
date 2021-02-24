const 
    fs = require('fs')
    filename = process.argv[2]
if (!filename) {
    throw Error("A fille to watch must be specified");

}
fs.watch(filename, function(){
    console.log('A file :'+ filename +' Just changed!!!')
});
console.log("Now watching" +filename+" for changes...")
