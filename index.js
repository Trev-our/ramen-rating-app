//  An array of Ramen objects
const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "shoyu.jpg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "miso.jpg", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "tonkotsu.jpg" }
 ]
// Function to display all ramen images in the #ramen-menu div
function displayAllRamen() {
  const ramenMenu = document.getElementById('#ramen-menu');
  ramenMenu.innerHTML = '';// clear the existing content
  ramens.forEach(ramen => {
    const img = document.createElement("img");
    img.src = ramen.image;
    img.alt = ramen.name;
    img.dataset.id = ramen.id; // Store the ramen ID for reference
    img.className = "ramen-image"; // Add class for styling

    // Add click event listener to each image
    img.addEventListener("click", () => handleClick(ramen));

    ramenMenu.appendChild(img);
});

// Display the first ramen's details automatically
if (ramens.length > 0) {
    handleClick(ramens[0]);
}
}

// Function to display ramen details in the #ramen-detail div
function handleClick(ramen) {
  const detaildiv = document.getElementById('#ramen-detail');
  detaildiv.innerHTML = `<h2>${ramen.name}</h2><h3>${ramen.restaurant}</h3>
    ${ramen.rating ? `<p>Rating: ${ramen.rating}</p>` : ''}
    ${ramen.comments ? `<p>Comment: ${ramen.comments}</p>` : ''}`;
}

// function to handle form submission for new ramen
function handleClick(ramen) {
    const detailImage = document.querySelector("#ramen-detail img");
    const name = document.querySelector("#ramen-detail .name");
    const restaurant = document.querySelector("#ramen-detail .restaurant");
    const rating = document.querySelector("#ramen-detail .rating");
    const comment = document.querySelector("#ramen-detail .comment");
// Update the #ramen-detail div with the clicked ramen's details
detailImage.src = ramen.image;
detailImage.alt = ramen.name;
name.textContent = ramen.name;
restaurant.textContent = ramen.restaurant;
rating.textContent = `Rating: ${ramen.rating}/10`;
comment.textContent = `Comment: ${ramen.comment}`;

// Update the edit form with the current ramen's details
document.getElementById("edit-rating").value = ramen.rating;
document.getElementById("edit-comment").value = ramen.comment;

// Add event listener for the edit form
const editForm = document.getElementById("edit-ramen");
editForm.onsubmit = (e) => {
    e.preventDefault();
    ramen.rating = document.getElementById("edit-rating").value;
    ramen.comment = document.getElementById("edit-comment").value;
    handleClick(ramen); // Refresh the displayed details
};

// Add event listener for the delete button
const deleteButton = document.getElementById("delete-ramen");
deleteButton.onclick = () => deleteRamen(ramen);

        // add new ramen to our array and update the display
        ramens.push(newRamen);
        displayAllRamen();
        form.reset(); // reset the form
    };

// Function to delete a ramen
function deleteRamen(ramen) {
    const index = ramens.findIndex(r => r.id === ramen.id);
    if (index !== -1) {
        ramens.splice(index, 1); // Remove the ramen from the array
        const ramenMenu = document.getElementById("ramen-menu");
        ramenMenu.innerHTML = ""; // Clear the menu
        displayRamens(); // Re-render the menu
        if (ramens.length > 0) {
            handleClick(ramens[0]); // Display the first ramen's details
        } else {
            // Clear the details section if no ramens are left
            const detailImage = document.querySelector("#ramen-detail img");
            const name = document.querySelector("#ramen-detail .name");
            const restaurant = document.querySelector("#ramen-detail .restaurant");
            const rating = document.querySelector("#ramen-detail .rating");
            const comment = document.querySelector("#ramen-detail .comment");

        detailImage.src = "";
        detailImage.alt = "";
        name.textContent = "";
        restaurant.textContent = "";
        rating.textContent = "";
        comment.textContent = "";
    }
}
}

// Function to handle new ramen form submission
function addSubmitListener() {
    const form = document.getElementById("new-ramen");

form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent the form from refreshing the page

    // Get form values
    const name = document.getElementById("name").value;
    const restaurant = document.getElementById("restaurant").value;
    const image = document.getElementById("image").value;
    const rating = document.getElementById("rating").value;
    const comment = document.getElementById("comment").value;

    // Create a new ramen object
    const newRamen = {
        id: ramens.length + 1, // Generate a new ID
        name,
        restaurant,
        image,
        rating,
        comment
    };

    // Add the new ramen to the ramens array
    ramens.push(newRamen);

    // Display the new ramen image in the #ramen-menu div
    const ramenMenu = document.getElementById("ramen-menu");
    const img = document.createElement("img");
    img.src = newRamen.image;
    img.alt = newRamen.name;
    img.dataset.id = newRamen.id;
    img.className = "ramen-image"; // Add class for styling

    // Add click event listener to the new image
    img.addEventListener("click", () => handleClick(newRamen));

    ramenMenu.appendChild(img);

    // Reset the form
    form.reset();
});
}

// Main function to initialize the app
function main() {
    displayRamens();
    addSubmitListener();
}

// Ensure the DOM is fully loaded before running the main function
document.addEventListener("DOMContentLoaded", main);