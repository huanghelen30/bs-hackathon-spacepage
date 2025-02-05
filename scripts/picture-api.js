const API_KEY = "tMTILk7VoS579XNXRfTEhveXsAJ7Mip9ZKbaN0hG";
const BASE_URL = "https://api.nasa.gov/planetary/";

class ImageApi {
    constructor(API_KEY) {
        this.apiKey = API_KEY;
        this.baseUrl = BASE_URL;
    }

    async getImage() {
        try {
            const response = await axios.get(
                `${this.baseUrl}apod?api_key=${this.apiKey}`
            );
            const image = await response.data;
            return image;
        } catch (error) {
            console.error("Error fetching image:", error);
        }
    }
}