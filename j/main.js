document.addEventListener('DOMContentLoaded', init);

function init() {

fetch("https://api.thedogapi.com/v1/images/search?")
.then(response => response.json())
.then(dogs => {
  dogs.forEach(dog => {
  const urlElement = document.createElement("img");
  urlElement.src = dog.url;
  const dogsElement = document.getElementById("dogs");
  dogsElement.appendChild(urlElement);
  });
})
.catch(err => {
  console.error(err.message);
});


fetch("https://dogapi.dog/api/v2/facts")
.then(response => response.json())
.then(articles => {
  const myData = articles.data[0].attributes.body;
    const contentElement = document.createElement("p");
    contentElement.textContent = myData;
    const articlesElement = document.getElementById("articles");
    articlesElement.appendChild(contentElement);
})
.catch(err => {
  console.error(err.message);
});

}