
function getFact() {
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

