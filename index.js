//  An array of Ramen objects
const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "shoyu.jpg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "miso.jpg", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "tonkotsu.jpg" }
 ]
// Function to display all ramen images in the #ramen-menu div
function displayAllRamen() {
  const ramenMenu = document.querySelector('#ramen-menu');
  ramen.forEach(ramen => {
    const ramenImg = document.createElement('img');
    img.src = ramen.image;
    img.alt = ramen.name;
    // Add an event listener to display details on click
    img.addEventListener("click", () => handleClick(ramen));
    ramenMenu.appendChild(img);
  });
}

// Function to display ramen details in the #ramen-detail div
function handleClick(ramen) {
  const ramenDetail = document.querySelector('#ramen-detail');
  ramenDetail.innerHTML = `
    <h2>${ramen.name}</h2>
    <h3>${ramen.restaurant}</h3>
    ${ramen.rating ? `<h3>Rating: ${ramen.rating}</h3>` : ''}
    ${ramen.comments ? `<p>Comment:${ramen.comments}</p>` : ''}
  `;
}

// function to handle form submission for new ramen
function addSubmitHandler() {
    const form = document.getElementById('#new-ramen');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const newRamen = {
            id: ramens.length + 1,
            name: form.name.value,
            restaurant: form.restaurant.value,
            image: form.image.value,
            rating: form.rating.value,
            comments: form.comments.value
        };
        
        // add new ramen to our array and update the display
        ramens.push(newRamen);
        displayAllRamen();
        form.reset(); // reset the form
    });
}

// main function to run the app
function main() {
    displayAllRamen();
    addSubmitHandler();
}
 
// (Optional) Display all ramen when the page loads
if (ramens.length > 0) {
handleClick(ramens[0]);
}

// Ensure the DOM is fully loaded before running the app
document.addEventListener('DOMContentLoaded', main);