
// function getFact() {
//   fetch()
//     .then((response) => response.json())
//     .then((data) => {
//       document.getElementById("fact").innerText = data.text;
//     });
// }

const imageApi = new ImageApi(API_KEY)

async function getFact() {
    try {
      const image = await imageApi.getImage();
    } catch (error) {
      console.error(error);
  }
};

