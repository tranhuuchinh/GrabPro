import Geocode from 'react-geocode';

class GgMap {
    constructor(apiKeyGGMaps) {
        this.apiKeyGGMaps = apiKeyGGMaps;
        Geocode.setApiKey(this.apiKeyGGMaps);
    }

    async getLocation(address) {
        if (!address) return;
        try {
            const response = await Geocode.fromAddress(address);
            const { lat, lng } = response.results[0].geometry.location;
            return { lat, lng };
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}

export default GgMap;
