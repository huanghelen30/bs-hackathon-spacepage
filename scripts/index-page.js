const ISSLocation = new ISSApi();
async function getCurrentISSLocation() {
  const data = await ISSLocation.getISSLocation();
  console.log(data);
}

getCurrentISSLocation();

// update display of station
