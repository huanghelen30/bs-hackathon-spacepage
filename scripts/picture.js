
/* function getFact() {
  fetch()
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("fact").innerText = data.text;
    });
}

const factsApi = new FactsApi(API_KEY)

async function getFact() {
    try {
      const image = await factsApi.getImage();
    } catch (error) {
      console.error(error);
  }
}; 

/* Alternative Code */
console.log("Hello team");

function getImage() {
  fetch(" ") 
    .then((response) => response.json())
    .then((data) => {
        const imageElement = document.getElementById("image");  element

        if (data.url.endsWith(".mp4")) { 
          console.log("Skipping video file...");
          getImage(); 
        } else {
          imageElement.src = data.url; 
        }
    })
    .catch((error) => {
      console.error("Error fetching image", error);
      document.getElementById("image").src = "fallback-image.jpg"; 
    });
}
/* That was my initial Java Script code I failed to commit - Daria */ 