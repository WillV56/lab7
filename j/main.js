document.addEventListener('DOMContentLoaded', init);

function init() {

fetch("https://api.thedogapi.com/v1/images/search?")
.then(response => response.json())
.then(dogs => {
  dogs.forEach(dog => {
  const urlElement = document.createElement("img");
  urlElement.src = dog.url;
  console.log(dog.url);
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
  articles.forEach(article => {
    const contentElement = document.createElement("p");
    contentElement.textContent = article.content;
    console.log(article.content);
    const articlesElement = document.getElementById("articles");
    articlesElement.appendChild(contentElement);
  });
})
.catch(err => {
  console.error(err.message);
});

}