"use strict";

const
    fs = require('fs')
    spawn = require('child_process').spawn,
    filename = processs.argv[2];

if (!filename) {
    throw Errow('A file must be include');
}

fs.watch(filename, function(){
    let ls = spawn('ls', ['-lh', filename]);
    ls.stdout.pipe(process.stdout);
});

console.log('Now watching:',filename );

