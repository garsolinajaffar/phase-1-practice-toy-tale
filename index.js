document.addEventListener("DOMContentLoaded", () => {
  // code to fetch toy data goes here
});
fetch("http://localhost:3000/toys")
  .then((response) => response.json())
  .then((toys) => {
    // code to render toys goes here
  });
  fetch("http://localhost:3000/toys")
  .then((response) => response.json())
  .then((toys) => {
    toys.forEach((toy) => {
      // create a div element for the toy
      const toyDiv = document.createElement("div");
      toyDiv.className = "card";

      // add the toy's name to the div
      const name = document.createElement("h2");
      name.textContent = toy.name;
      toyDiv.appendChild(name);

      // add the toy's image to the div
      const image = document.createElement("img");
      image.className = "toy-avatar";
      image.src = toy.image;
      toyDiv.appendChild(image);

      // add the toy's likes to the div
      const likes = document.createElement("p");
      likes.textContent = toy.likes + " Likes";
      toyDiv.appendChild(likes);

      // add a like button to the div
      const button = document.createElement("button");
      button.className = "like-btn";
      button.textContent = "Like ❤️";
      button.dataset.id = toy.id;
      toyDiv.appendChild(button);

      // add the toy div to the toy collection div
      const toyCollection = document.getElementById("toy-collection");
      toyCollection.appendChild(toyDiv);
    });
  });
