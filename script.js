// // Define the map and custom icon variables outside the functions
// let map, customIcon;
// // get input
// const inputButton = document.getElementById("input-button");
// const form = document.getElementById("form");
// console.log(form);
// console.log(inputButton);
// // function getInputValue(){

// //   console.log(value)

// // }
// // getInputValue()

// let userInput = document.getElementById("userInput").value;

// // Leaflet map setup
// if (navigator.geolocation) {
//   navigator.geolocation.getCurrentPosition((position) => {
//     map = L.map("map").setView(
//       [position.coords.latitude, position.coords.longitude],
//       13
//     );
//     L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
//       zoomControl: false, //removes default zoom control

//       attribution:
//         '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
//     }).addTo(map);
//     L.control.zoom({ position: "bottomright" }).addTo(map);

//     // Create the custom icon
//     var iconElement = document.getElementById("icon");
//     customIcon = L.divIcon({
//       html: iconElement.outerHTML,
//       iconSize: [32, 32],
//     });

//     // Add a marker with the custom icon to the map
//     L.marker([position.coords.latitude, position.coords.longitude], {
//       icon: customIcon,
//     }).addTo(map);
//   });
// }

// // var map = L.map('map', {
// //   maxZoom: 24,
// //   minZoom: 0,
// // });

// // L.control.zoom({
// //   position: 'bottomright'//topleft, topright, bottomleft, bottomright
// // }).addTo(map);

// // Asynchronous function to fetch user IP address
// async function getUserIpAddress() {
//   try {
//     const response = await fetch("https://api.ipify.org?format=json");
//     if (!response.ok) {
//       throw new Error("Failed to fetch IP address");
//     }
//     const data = await response.json();

//     return data.ip;
//   } catch (error) {
//     console.error("Error getting IP address:", error);
//   }
// }

// // Asynchronous function to fetch user location information
// async function fetchUserLocation(ipAddress) {
//   apiKey = "at_Ve1jSeIfaX2dZ8C5N1ByKEW6Vyx5R";

//   const geoIpifyUrl = `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ipAddress}`;

//   try {
//     const response = await fetch(geoIpifyUrl);
//     if (!response.ok) {
//       throw new Error("Failed to fetch location data");
//     }
//     const data = await response.json();
//     console.log(data);
//     // searuch for solution
//     JSON.stringify({ ip: userInput });
//     // document.getElementById('result').innerText = JSON.stringify(data, null, 2);

//     // Update the UI with location information
//     UpdateUI(data);

//     console.log("User Location Data:", info);
//   } catch (error) {
//     console.error("Fetching user location failed:", error);
//   }
// }

// // Main function to get IP address and fetch location data
// //set ip address == to user search
// async function main() {
//   const ipAddress = await getUserIpAddress(userInput);
//   if (ipAddress) {
//     await fetchUserLocation(ipAddress);
//   }
// }

// // function to update user interface
// function UpdateUI(data) {
//   info.innerHTML = `
//   <div>
//     <p class="address">IP ADDRESS</p>
//     <h3>${data.ip}</h3>
//   </div>
//   <div>
//     <p class="address">LOCATION</p>
//     <h3>${data.location.city}, ${data.location.postalCode}</h3>
//   </div>
//   <div>
//     <p class="address">TIMEZONE</p>
//     <h3>${data.location.timezone}</h3>
//   </div>
//   <div>
//     <p class="address">ISP</p>
//     <h3>${data.isp}</h3>
//   </div>
// `;
// }

// inputButton.addEventListener("click", (event) => {
//   event.preventDefault()
//   UpdateUI();
// });

// // Call the main function when the window loads
// window.onload = main;






// document.addEventListener('DOMContentLoaded', async ()=>{
//     // get user Current position uing Geolocation
//     try{
//       const{coords} = await getCurrentLocation()
//       const {latitude, longitude} = coords
//       const defaultIp = `${latitude},${longitude}`
//       await searchIPAddress(defaultIp)
//     } catch(error){
//       console.log("Error fetching location ", error)
     
//     }
// })

// async function getCurrentLocation(){
//    return new Promise((resolve, reject) =>{
//     navigator.geolocation.getCurrentPosition(resolve, reject)
//    })
// }

