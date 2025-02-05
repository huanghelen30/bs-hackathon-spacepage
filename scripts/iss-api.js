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
    const response = await axios.get(this.baseUrl);
    const iss_position = response.data.iss_position;
    console.log(response);
    console.log(iss_position);
  }
}

const ISSLocation = new ISSApi();
async function getCurrentISSLocation() {
  const data = await ISSLocation.getISSLocation();
  console.log(data);
}

getCurrentISSLocation();
