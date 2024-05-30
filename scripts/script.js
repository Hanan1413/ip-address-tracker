const searchForm = document.getElementById("form");

searchForm.addEventListener("click", async (event) => {
  event.preventDefault();

  let inputValue = document.getElementById("user-input").value;
  await searchIPAddress(inputValue);

  document.getElementById("user-input").value = "";
});

async function searchIPAddress(ipAddress) {
  try {
    const apiKey = "at_Ve1jSeIfaX2dZ8C5N1ByKEW6Vyx5R";
    const geoIpifyUrl = `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ipAddress}`;

    const response = await fetch(geoIpifyUrl);
    const data = await response.json();

    if (data.location) {
      const {
        ip,
        location: { city },
        location: { timezone },
        isp,
      } = data;
      updateUI(ip, city, isp, timezone);
      getCurrentPosition(data.location.lat, data.location.lng);
    } else {
      console.log("Location data not found.");
    }
  } catch (error) {
    console.log(error);
  }
}

function updateUI(ip, city, isp, timezone) {
  document.getElementById("ip").textContent = ip;
  document.getElementById("location").textContent = city;
  document.getElementById("isp").textContent = isp;
  document.getElementById("timezone").textContent = timezone;
}

function getCurrentPosition(lat, lng) {
  const map = L.map("map").setView([lat, lng], 13);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    zoomControl: false,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  L.control.zoom({ position: "bottomright" }).addTo(map);

  const iconElement = document.getElementById("icon");
  const customIcon = L.divIcon({
    html: iconElement.outerHTML,
    iconSize: [32, 32],
  });

  L.marker([lat, lng], { icon: customIcon })
    .addTo(map)
    .bindPopup("Your location")
    .openPopup();
}
