const toyCollection = document.querySelector("#toy-collection")
const addBtn = document.querySelector("#new-toy-btn")
const toyForm = document.querySelector(".container")
let addToy = false

// STEP 1: Fetch all the toys from the server and render them to the DOM
function getToys() {
  fetch("http://localhost:3000/toys")
    .then(response => response.json())
    .then(toys => {
      toys.forEach(toy => {
        // STEP 2: Create a new HTML element for each toy and add it to the toy-collection div
      })
    })
}

// STEP 4: Create a new toy object and make a POST request to add it to the database
function createToy(toyData) {
  fetch("http://localhost:3000/toys", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(toyData)
  })
    .then(response => response.json())
    .then(toy => {
      // If the POST request is successful, create a new card element for the new toy and add it to the toy-collection div
    })
}

// STEP 5: Update the like count of the corresponding toy object and make a PATCH request to update the database
function updateLikes(toyId, likes) {
  fetch(`http://localhost:3000/toys/${toyId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({ likes: likes })
  })
    .then(response => response.json())
    .then(toy => {
      // If the PATCH request is successful, update the like count in the corresponding card element
    })
}

// Call the getToys() function to fetch and render the toys on page load
getToys()

// Add event listeners to the "Add Toy" button and the form "Submit" button
addBtn.addEventListener("click", () => {
  // Show/hide the form when the button is clicked
})

toyForm.addEventListener("submit", event => {
  event.preventDefault()
  const toyData = {
    // Get the data from the form inputs
  }
  createToy(toyData
