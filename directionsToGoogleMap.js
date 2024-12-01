function openMapWithCurrentLocation() {
    if (navigator.geolocation) {
        // Get the user's current location
        navigator.geolocation.getCurrentPosition(
            function (position) {
                const currentLat = position.coords.latitude;
                const currentLng = position.coords.longitude;

                // Construct Google Maps Directions URL with current location as origin
                const mapUrl = `https://www.google.com/maps/dir/?api=1&origin=${currentLat},${currentLng}&destination=${presentBusLocation[0]},${presentBusLocation[1]}&travelmode=driving`;

                // Open Google Maps with the directions URL in a new tab
                window.open(mapUrl, "_blank");
            },
            function (error) {
                // Error handling if location is not accessible
                alert(
                    "Unable to retrieve your location. Please make sure you allow location access."
                );
            }
        );
    } else {
        // If geolocation is not supported
        alert("Geolocation is not supported by this browser.");
    }
}

// Event listener for the button to open maps
document
    .getElementById("directionsGoogleMap")
    .addEventListener("click", openMapWithCurrentLocation);
