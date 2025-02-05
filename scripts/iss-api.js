/* example of JSON output -> 
    {
  "timestamp": 1738774751,
  "iss_position": {
    "latitude": "-30.8122",
    "longitude": "179.1602"
  },
  "message": "success"
} */
class ISSApi {
  constructor() {
    this.baseUrl = "http://api.open-notify.org/iss-now.json";
    this.timestamp = null;
    this.position = {
      latitude: null,
      longitude: null,
    };
  }

  // method to get location
  async getISSLocation() {
    try {
      const response = await axios.get(this.baseUrl);
      const iss_position = response.data.iss_position;
      console.log(response);
      console.log(iss_position);

      this.position = response.data.iss_position;
      this.timestamp = response.data.timestamp;

      return {
        lat: parseFloat(this.position.latitude),
        lon: parseFloat(this.position.longitude),
        timestamp: this.timestamp,
      };
    } catch (error) {
      console.log(error);
    }
  }

  updateDisplay() {
    if (this.latitudeDOM) {
      this.latitudeDOM.textContent = `Latitude: ${this.position.latitude}`;
    }
    if (this.longitudeDOM) {
      this.longitudeDOM.textContent = `Longitude: ${this.position.longitude}`;
    }
    if (this.timestampDOM) {
      const date = new Date(this.timestamp * 1000);
      this.timestampDOM.textContent = `Current time ${date}`;
    }
  }
}
