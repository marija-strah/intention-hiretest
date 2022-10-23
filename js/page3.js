"use strict"

// // insert pin img twice on Page 3 header
// let pinImg = new Image();

// pinImg.src = "./images/ic-pin-map.png";
//     for (let i = 0; i < 2; i++) {
//         document.getElementsByClassName(".map-overlay").appendChild(pinImg);
//     }


// handling JSON for Page 3
const stores = [
    {
        "country": "Serbia",
        "names": "Franchise",
        "phone": "140-764-7326",
        "address": "230 Wiza Freeway Suite 223"
    },
    {
        "country": "Serbia",
        "names": "Store",
        "phone": "275-202-9643",
        "address": "9551 Deckow Plain"
    },
    {
        "country": "Serbia",
        "names": "Small Dealers",
        "phone": "506-723-0447",
        "address": "5659 Predovic Ranch Suite 435"
    },
    {
        "country": "Germany",
        "names": "Franchise",
        "phone": "340-888-4907",
        "address": "90 Susan Isle Apt. 642"
    },
    {
        "country": "Serbia",
        "names": "Franchise",
        "phone": "729-373-7798",
        "address": "783 Pat Isle"
    },
    {
        "country": "Germany",
        "names": "Franchise",
        "phone": "717-987-7207",
        "address": "257 Lacy Roads"
    },
    {
        "country": "Germany",
        "names": "Store",
        "phone": "760-334-8328",
        "address": "90 Sam Keys Suite 335"
    },
    {
        "country": "Serbia",
        "names": "Small Dealers",
        "phone": "467-217-4968",
        "address": "85 Hyman Junction"
    },
    {
        "country": "Serbia",
        "names": "Franchise",
        "phone": "157-788-7205",
        "address": "3730 Nader Parks Apt. 833"
    },
    {
        "country": "Serbia",
        "names": "Small Dealers",
        "phone": "128-922-4783",
        "address": "010 Maximilian Forge"
    },
    {
        "country": "Serbia",
        "names": "Store",
        "phone": "537-145-2804",
        "address": "374 Beatty Locks"
    },
    {
        "country": "Germany",
        "names": "Store",
        "phone": "717-978-4320",
        "address": "369 Nedra Fort Apt. 829"
    },
]

// injecting data from json to DOM
function appendCells() {
for (let i of stores) {
    console.log(i.country)

    // create row
    let row = document.createElement("tr");
    row.classList.add("row");

    // country cell
    let countryCell = document.createElement("td");
    countryCell.classList.add("country-cell");

    document.getElementById("append-here").appendChild(row);

    row.appendChild(countryCell);
    countryCell.innerHTML = i.country;

    // name cell
    let nameCell = document.createElement("td");
    nameCell.classList.add("name-cell");

    document.getElementById("append-here").appendChild(row);

    row.appendChild(nameCell);
    nameCell.innerHTML = i.names;

    // phone cell
    let phoneCell = document.createElement("td");
    phoneCell.classList.add("phone-cell");

    document.getElementById("append-here").appendChild(row);

    row.appendChild(phoneCell);
    phoneCell.innerHTML = i.phone;

    // address cell
    let addressCell = document.createElement("td");
    addressCell.classList.add("address-cell");

    document.getElementById("append-here").appendChild(row);

    row.appendChild(addressCell);
    addressCell.innerHTML = i.address;


    // adding classes to rows to match classes of filters
    function addClassToFilter() {
        if(i.country == "Serbia") {
            countryCell.classList.add("serbia");
        } else
        if (i.country == "Germany") {
            countryCell.classList.add("germany");
        } else if(i.names == "Franchise") {
            nameCell.classList.add("franchise");
        } else if(i.names == "Store") {
            nameCell.classList.add("store");
        } else if(i.names == "Small Dealers") {
            nameCell.classList.add("small-dealers");
        }
    }
    addClassToFilter();
}
}

appendCells();


function filterStores(e) {
    const shops = document.querySelectorAll(".row tr"); // select all animal divs
    let filter = e.target.dataset.filter; // grab the value in the event target's data-filter attribute
    shops.forEach(shop => {
        shop.classList.contains(filter) // does the animal have the filter in its class list?
      ? shop.classList.remove('hidden') // if yes, make sure .hidden is not applied
      : shop.classList.add('hidden'); // if no, apply .hidden
    });
  };



  
// NOTE - keeping the following tries so as to test them again in future


// filtering - try 1

// filterObjects("all");

// function filterObjects(o) {
//     if (o == "all") o = "";
//     for (let i = 0; i < stores.length; i++) {
//         removeClass(stores[i], "show");
//         if(stores[i].className.indexOf(o) > -1) addClass(stores[i], "show")
//     }
// }

// function addClass(element, name) {
//     console.log(typeof element)
//     let arr1, arr2;
//     arr1 = element.className.split(" ");
//     arr2 = name.split(" ");

//     for (let i = 0; i < arr2.length; i++) {
//         if(arr1.indexOf(arr1[i]) == -1) {
//             element.className += " " + arr2[i];
//         }
//     }
// }

// function removeClass(element, name) {
//     let i, arr1, arr2;
//     arr1 = element.className.split(" ");
//     arr2 = name.split(" ");

//     for(i = 0; i < arr2.length; i++) {
//         while(arr1.indexOf(arr2[i]) > -1) {
//             arr1.splice(arr1.indexOf(arr2[i]), 1)
//         }
//     }
//     element.className = arr1.join(" ");
// }


// filtering - try 2

// window.onload = function() {
//     const listItems = document.querySelectorAll(".filter-buttons");
//     const oneRow = document.querySelectorAll(".row");

//     function toggleActiveClass(t) {
//         listItems.forEach((t) => {
//             t.classList.remove("active");
//         }),
//         t.classList.add("active");
//     }

//     function toggleProjects(t) {
//         oneRow.forEach(item => {
//                 if ("all" === t) {
//                     item.style.display = "block";
//                 } else {
//                     item.dataset.class === t
//                         ? (item.style.display = "block")
//                         : (item.style.display = "none");
//                     }
//             });
//         }
    
//         for (let t = 0; t < listItems.length; t++)
//             listItems[t].addEventListener("click", function () {
//                 toggleActiveClass(listItems[t]),
//                     toggleProjects(listItems[t].dataset.class);
//             });
//     };


    // filtering - try 3

    // window.onload = function() {
    //     let listItems = document.querySelectorAll(".filter-buttons");
    //     let oneRow = document.querySelectorAll(".row");

    //     // let filteredArr = [];

    //     if(listItems.class == oneRow.class) {
    //         let filteredArr = stores.filter(item => listItems.class == oneRow.class)
    //     }
    // }