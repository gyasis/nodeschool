
getup = process.argv.slice(2, process.argv.length)

total = 0 
for (index = 0; index < getup.length; index++) {
    
    getup[index] = Number(getup[index]);
    total = total + getup[index]
    
}

console.log(total)