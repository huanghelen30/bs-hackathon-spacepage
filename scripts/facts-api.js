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
