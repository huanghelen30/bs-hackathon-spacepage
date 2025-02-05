/* example of JSON output -> 
    {
  "timestamp": 1738774751,
  "iss_position": {
    "latitude": "-30.8122",
    "longitude": "179.1602"
  },
  "message": "success"
} */

// DOM Manipulation

class ISSApi {
  constructor() {
    this.baseUrl = "http://api.open-notify.org/iss-now.json";
    this.timestamp = null;
    this.position = {
      latitude: null,
      longitude: null,
    };
    this.latitudeDOM = document.querySelector(".latitude");
    this.longitudeDOM = document.querySelector(".longitude");
    this.timestampDOM = document.querySelector(".timestamp");
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
      console.log(this.latitudeDOM);
    }
    if (this.longitudeDOM) {
      this.longitudeDOM.textContent = `Longitude: ${this.position.longitude}`;
    }
    if (this.timestampDOM) {
      const date = new Date(this.timestamp * 1000);
      this.timestampDOM.textContent = `Current time ${date}`;
      console.log(this.timestampDOM);
    }

    this.updateISSPosition();
  }

  startTracking(interval = 5000) {
    this.getISSLocation(); // initial fetch
    this.trackingInterval = setInterval(async () => {
      await this.getISSLocation(); // get location every 5 seconds
      this.updateDisplay();
    }, interval);
  }

  stopTracking() {
    if (this.trackingInterval) {
      clearInterval(this.trackingInterval);
    }
  }

  updateISSPosition() {
    const marker = document.querySelector(".iss-marker");
    if (marker) {
      // math to move location or transform it from lat/lon to percentage
      const x = (parseFloat(this.position.longitude) + 180) * (100 / 360);
      const y = (90 - parseFloat(this.position.latitude)) * (100 / 180);

      console.log("Calculated position:", { x, y });

      marker.style.left = `${x}%`;
      marker.style.top = `${y}%`;
    }
  }
}
