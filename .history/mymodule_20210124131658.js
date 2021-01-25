




function filter(list) {

    returnlist = []

    list.forEach(function (element) {
        buildext = "."+ extension
        var pos = element.search(buildext);
        if (pos > -1) {

            console.log(element)

            // returnlist.push(element); 
            
        }     
    })

    return returnlist;
}


module.exports = {

};