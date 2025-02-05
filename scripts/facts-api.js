console.log("Hello team");

function getFact() {
  fetch()
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("fact").innerText = data.text;
    })
    .catch((error) => {
      document.getElementById("fact").innerText = "Failed to load fact";
      console.error("Error generating fact", error);
    });
}
const API_KEY = "tMTILk7VoS579XNXRfTEhveXsAJ7Mip9ZKbaN0hG"
const BASE_URL = "https://api.nasa.gov/planetary/"

class ImageApi {
    constructor(API_KEY) {
        this.apiKey = API_KEY
        this.baseUrl = BASE_URL
    }
    async getImage() {
        try {
            const response = await axios.get(
                `${this.baseUrl}apod?apikey=${this.apiKey}`
            );
            const images= await response.data;
            return images
        } catch (error) {
            console.error(error);
        }
    }
};