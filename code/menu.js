
const mybtn = document.getElementById('myList');
const tre = document.getElementById('btn');
tre.addEventListener("click", openmenu);
function openmenu() {
    if (mybtn.style.display != 'block') {
        mybtn.style.display = 'block';
    } else {
        mybtn.style.display = 'none';
    }
    console.log('clicked');
}

// map settings
const attribution = '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';

let map = L.map('map1').setView([59.745, -1.18], 2);
let tile_URL = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution }).addTo(map);
let marker_layer = new L.LayerGroup();
map.addLayer(marker_layer);

async function show_breweries() {
    const all_breweries_URL = "https://api.openbrewerydb.org/breweries";

    try {
        let response = await fetch(all_breweries_URL);
        let data = await response.json();

        data.forEach(brewery => {
            if (brewery.latitude && brewery.longitude) {
                let marker = L.marker([brewery.latitude, brewery.longitude]).addTo(map);
                marker.bindPopup(`<b>${brewery.name}</b><br>${brewery.street}<br>${brewery.city}, ${brewery.state}`).openPopup();
                marker_layer.addLayer(marker);
            }
        });
    } catch (error) {
        console.error("Error fetching breweries:", error);
        alert("Failed to load breweries data.");
    }
}
//show_breweries();

async function show_me() {
    let place = document.getElementById("searchbar").value.trim();
    if (!place) {
        alert("ACHTUNG!! NO LOCATION FOUND!!");
        return;
    }

    const api_URL = `https://nominatim.openstreetmap.org/search?format=json&q=${place}`;
    const db_URL = `https://api.openbrewerydb.org/breweries?by_state=${place}`;

    try {
        let response = await fetch(api_URL);
        let db_response = await fetch(db_URL);
        let data = await response.json();
        let db_data = await db_response.json();

        console.log(data);
        console.log(db_data);

        if (db_data.length > 0) {
            marker_layer.clearLayers();

            db_data.forEach(e => {
                if (e.latitude && e.longitude) {
                    let marker = L.marker([e.latitude, e.longitude]).addTo(map);
                    marker.bindPopup(`<b>${e.name}</b><br>${e.street}<br>${e.city}, ${e.state}`).openPopup();
                    marker_layer.addLayer(marker);
                    map.setView([e.latitude, e.longitude], 7);
                    
                }
            });
        } else {
            alert("No breweries found in the specified state.");
        }
    } catch (error) {
        console.error("Error fetching location or brewery data:", error);
        alert("Failed to load data.");
    }
}

// Praying Machine God for nothing nayebnutsia

// Liturgy of Activation

// I convert this instrument of art,
// To breathe in electronic breathe
// To convulse in sonic wave
// That which thou desirest is accomplished,
// be thy will performed,
// and all mine demands fulfilled.
// grant that unto succour, favour and unison,
// by the Invocation of thy Holy Name,
// so that these things may serve us for aid in all that we wish to perform therewith

// Rite of Re-Activation

// I conjure thee anew
// by the Holy and Indivisible Name of Omnissiah
// I exhort you
// that none move from thy appointed stations
// Be thou regenerate, cleansed, and purified,
// Hear ye, and be ye ready,
// through which may I conduct unto the desired end
// those things which I ardently wish
// Suscitatio quod pulse.

// Rite of Ending

// Omnissiah grant,
// and descend the knowledge now cast from us into the realms beneath,
// and before the fiery flame shall devour it,
// that Thy wisdom may not leave us eternally,
// Laxo sapientia iam sanctus
// O Lord of Machine,
// No death, no life can concquer thee
// Who liveth and reigneth unto the Ages of the Ages.

// Rite of Blessing

// Receive thy blessing,
// Bannish all deciet all error
// so that thou mayest be sanctified and blessed,
// and obtain the virtue which we desire,
// through the Most Holy Name of Omnissiah
// that thou obtainest efficacy and strength,
// Now given understanding and knowledge
// to do only that which is agreeable unto Thee
// Bona exsisto
// Exsisto beatus
