const gt = document.querySelector("#gt");

gt.addEventListener("click", () => {
  fetch('https://api.quotable.io/random')
    .then((response) =>{ return response.json()})
    .then(data => {
      document.querySelector("#quote").innerText = `${data.content} - ${data.author}`;
    })
    .catch(error => {
      console.log("Some error occurred:", error);
    });
});
