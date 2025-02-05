const ISSLocation = new ISSApi();
async function getCurrentISSLocation() {
  const data = await ISSLocation.getISSLocation();
  console.log(data);
  ISSLocation.updateDisplay();
  ISSLocation.startTracking();
}

getCurrentISSLocation();

// update display of station
