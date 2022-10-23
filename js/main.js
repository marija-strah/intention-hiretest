// handling JSON for Page 2
    const allWatches = [
        {
            "name": "CHRONO",
            "img": "product1.png",
            "color": "GUNMETAL SANDSTONE",
            "size": "45mm"
        },
        {
            "name": "CHRONO",
            "img": "product2.png",
            "color": "WHITE TITANIUM",
            "size": "40mm"
        },
        {
            "name": "CHRONO",
            "img": "product3.png",
            "color": "WHITE CARAMEL",
            "size": "45mm"
        },
        {
            "name": "CHRONO",
            "img": "product4.png",
            "color": "BLACK LINK",
            "size": "45mm"
        },
        {
            "name": "CHRONO",
            "img": "product5.png",
            "color": "CHRONO CAVIAR",
            "size": "30mm"
        },
        {
            "name": "CHRONO",
            "img": "product6.png",
            "color": "SILVER NATURAL TAN",
            "size": "40mm"
        },
        {
            "name": "CHRONO",
            "img": "product7.png",
            "color": "BLACK LINK",
            "size": "30mm"
        },
        {
            "name": "CHRONO",
            "img": "product8.png",
            "color": "CHRONO CAVIAR",
            "size": "40mm"
        },
        {
            "name": "CHRONO",
            "img": "product9.png",
            "color": "SILVER NATURAL TAN",
            "size": "40mm"
        }
    ]



// get data from JSON and inject into DOM
for (let i in allWatches) {
    console.log(i) // prints index from 0 to 8 
    console.log(allWatches[i]) // prints each object within each index
   
    document.getElementById("description1").innerHTML = allWatches[i].name + ' - ' + allWatches[i].size + "<br/>" + allWatches[i].color;
    document.getElementById("description2").innerHTML = allWatches[i].name + ' - ' + allWatches[i].size + "<br/>" + allWatches[i].color;
    document.getElementById("description3").innerHTML = allWatches[i].name + ' - ' + allWatches[i].size + "<br/>" + allWatches[i].color;
    document.getElementById("description4").innerHTML = allWatches[i].name + ' - ' + allWatches[i].size + "<br/>" + allWatches[i].color;
    document.getElementById("description5").innerHTML = allWatches[i].name + ' - ' + allWatches[i].size + "<br/>" + allWatches[i].color;
    document.getElementById("description6").innerHTML = allWatches[i].name + ' - ' + allWatches[i].size + "<br/>" + allWatches[i].color;
    document.getElementById("description7").innerHTML = allWatches[i].name + ' - ' + allWatches[i].size + "<br/>" + allWatches[i].color;
    document.getElementById("description8").innerHTML = allWatches[i].name + ' - ' + allWatches[i].size + "<br/>" + allWatches[i].color;
    document.getElementById("description9").innerHTML = allWatches[i].name + ' - ' + allWatches[i].size + "<br/>" + allWatches[i].color;
}
