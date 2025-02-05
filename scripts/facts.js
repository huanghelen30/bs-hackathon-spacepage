
function getFact() {
<<<<<<< HEAD
  axios.get
=======
  fetch()
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("fact").innerText = data.text;
    });
>>>>>>> 3ba5cedc794a5d9ea85f77528e011b3ebbfb290a
}
