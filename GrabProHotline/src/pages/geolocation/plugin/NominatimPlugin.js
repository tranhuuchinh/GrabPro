class Nominatim {
  constructor(apiKeyNominatim) {
    this.apiKeyNominatim = apiKeyNominatim;
  }

  async getLocation(address) {
    const apiUrl = `https://api.openrouteservice.org/geocode/autocomplete?api_key=${this.apiKeyNominatim}&text=${address}`;
    try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    // Kiểm tra dữ liệu trả về có khác undefined hay không
    if (data && data.features && Array.isArray(data.features)) {
        // Lọc chỉ lấy các địa điểm ở Việt Nam
        const vietnamLocations = data.features.filter((location) =>
        location.properties.country === "Vietnam" || location.properties.country === "Viet Nam"
        );

        if (vietnamLocations.length > 0) {
            return {lat: vietnamLocations[0].geometry.coordinates[1], lng: vietnamLocations[0].geometry.coordinates[0]};
        }
    } else {
        console.log("Dữ liệu API không hợp lệ");
    }
    } catch (error) {
        console.error(error);
    }
  }
}

export default Nominatim;