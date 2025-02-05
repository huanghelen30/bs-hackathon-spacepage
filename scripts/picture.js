async function loadImage() {
  const api = new ImageApi("tMTILk7VoS579XNXRfTEhveXsAJ7Mip9ZKbaN0hG");
  const data = await api.getImage();
  const imageElement = document.getElementById("image-fetching");
  console.log(data);
  if (!imageElement) {
    console.error("Error: Image element not found in the document.");
    return;
  }
  if (data.media_type === "image") {
    imageElement.src = data.url;
    imageElement.alt = data.title || "NASA Image of the Day";
    imageElement.width = "800";
    imageElement.height = "450";
    imageElement.style.margin = "0 auto";
  } else {
    console.log("Skipping video file... Fetching another image.");
    imageElement.src = "/assets/images/fallback-image.webp";
  }
}
document.getElementById("loadButton").addEventListener("click", loadImage);
