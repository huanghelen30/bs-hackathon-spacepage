
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

async function loadImage() {
  const api = new ImageApi("tMTILk7VoS579XNXRfTEhveXsAJ7Mip9ZKbaN0hG"); 
  const data = await api.getImage(); 
  
  const imageElement = document.getElementById("image");

  if (!imageElement) {
      console.error("Error: Image element not found in the document.");
      return;
  }

  if (data.media_type === "image") {
      imageElement.src = data.url;
      imageElement.alt = data.title || "NASA Image of the Day";
  } else {
      console.log("Skipping video file... Fetching another image.");
      imageElement.src = "/assets/images/fallback-image.webp"; 
  }
}

document.getElementById("loadButton").addEventListener("click", loadImage);