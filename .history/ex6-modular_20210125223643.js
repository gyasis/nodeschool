import { filter } from './mymodule.js'
import { readdir } from 'fs'
var path = process.argv[2]
var extension = process.argv[3]


readdir(path, function (err, list) {
    filter(list)
    // console.log(returnlist)
})
