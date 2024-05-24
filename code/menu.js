const mybtn = document.getElementById('myList');
const tre = document.getElementById('btn');
tre.addEventListener("click", openmenu );
function openmenu() {
    if(mybtn.style.display != 'block') {
        mybtn.style.display = 'block';
    } else {
        mybtn.style.display = 'none';
    }
    console.log('clicked');
}




// map settings
const attribution = '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'

let map = L.map('map1').setView([59.745164250056135, 10.164131070531106], 2);
let tile_URL =   L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution}).addTo(map);
// const tiles =L.tileLayer(tileURL,{attribution})
let marker_layer = new L.LayerGroup;
map.addLayer(marker_layer);


async function show_breweries() {
    const all_breweries_URL = "https://api.openbrewerydb.org/breweries";

    let response = await fetch(all_breweries_URL);
    let data = await response.json();

    data.forEach(brewery => {
        if (brewery.latitude && brewery.longitude) {
            let marker = L.marker([brewery.latitude, brewery.longitude]).addTo(map);
            marker.bindPopup('<b>${breweery.name}</b><br>${brewery.street}<br>${brewery.city}, ${brewery.state}').openPopup();
            marker_layer.addLayer(marker);
        }
    });
    
}
//show_breweries();

async function show_me() {
    let place = document.getElementById("searchbar").value.trim();
    if (!place) {
        alert("ACHTUNG!! NO LOCATION FOUND!!");
        return;
    }

    const api_URL = "https://nominatim.openstreetmap.org/search?format=json&q=${place}";
    const db_URL = "https://api.openbrewerydb.org/breweries/search?query=${place}&per_page=50%";

    let response = await fetch(api_URL);
    let db_response = await fetch(db_URL);
    let data = await response.json();
    let db_data = await db_response.json();

    console.log(data);
    console.log(db_data);

    if (db_data > 0) {
        marker_layer.clearLayer();

        db_data.forEach(e => {
            let tileURL =   L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { }).addTo(map);
            let marker = L.marker([e.latitude, e.longitude]).addTo(map);
//            marker.bindPopup(<b>${e.name}</b><br>${e.latitude},${e.longitude</br>}).openPopup()

        }
            
            )
    }
}


// 
// let place = document.getElementById("searchbar").value;
// 
// 
// const api_url = 'https://nominatim.openstreetmap.org/search?format=json&q=' + place; 
// const db_url = `https://api.openbrewerydb.org/breweries/search?query=${place}&per_page=50`; // Get brewery info from OpenBreweryDB
// 
// 
// 
// 
// async function show_me(){
//     let lat;
//     let long;
    

    
//     let resp = await fetch(db_url);
//     let mydata = await resp.json();
//     console.log(mydata);
//     lat = mydata[0].latitude;
//     long = mydata[0].longitude;
//     var map = L.map('map1').setView([lat,long], 13);
//     mydata.forEach(element => {
//         let marker = L.marker([element.latitude, element.longitude]).addTo(map);
//         marker.bindPopup(`<b>${element.name}</b><br>${element.street}`).openPopup();
//     });
//     let tileURL =   L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { }).addTo(map);

// }
















// const mybtn = document.getElementById('myList'); //кнопка привязаная к точке на карте
// const tre = document.getElementById('btn');
// tre.addEventListener("click", openmenu );
// function openmenu() {
//     if(mybtn.style.display != 'block') {
//         mybtn.style.display = 'block';
//     } else {
//         mybtn.style.display = 'none';
//     }
//     console.log('clicked');
// }
 

// // map settings
// const attribution = '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>' //копирование кода для карты
 
// var map = L.map('map1').setView([59.745164250056135, 10.164131070531106], 15); //настройки позици карты по умолчанию
// // let marker = L.marker([59.745164250056135,10.164131070531106 ]).addTo(map) //настройки маркера по умолчанию
// // let markerС = L.marker ([35.628560, -120.688212]).addTo(map)
// let tileURL =   L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { }).addTo(map);
// const tiles =L.tileLayer(tileURL,{attribution})
// let place = document.getElementById("searchbar").value; //получение информации из серчбара
// const api_url = 'https://nominatim.openstreetmap.org/search?format=json&q=' + place; //получение информации от карты по месту
// const db_url = 'https://api.openbrewerydb.org/v1/breweries?by_state=' + place; //получение информации от базы данных
// console.log(place);
 
 
 
// async function show_me(){ //функция которая актевируеться по нажатию кнопки

   
//     L.map('map1').setView([e.latitude, e.longitude], 10); //настройки позици карты по умолчанию
   
   
   
//     let response = await fetch(api_url);  //копирование информации от карты
//     let db_response = await fetch(db_url); //копирование информации от базы данных
//     let data = await response.json(); //сохранения файла от json
//     let db_data = await db_response.json();
//     console.log(data);
//     if (db_data != null){
//         db_data.forEach(e =>{
//             let tileURL =   L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { }).addTo(map);
//             let marker = L.marker([e.latitude, e.longitude]).addTo(map);
// //            marker.bindPopup(<b>${e.name}</b><br>${e.latitude},${e.longitude</br>}).openPopup()
//             })};
//         }
