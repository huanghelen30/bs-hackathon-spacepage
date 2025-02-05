console.log("Hello team");

function getImage() {
  fetch("")
    .then((response) => response.json())
    .then((data) => {
      const imageElement = document.getElementById("image");

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
