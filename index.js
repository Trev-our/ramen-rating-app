//  An array of Ramen objects
const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "./images/pexels-catscoming-1907244.jpg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "./images/pexels-jentstyle-photo-18591342.jpg", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image:"./images/pexels-momo-king-3616480-5409027.jpg",rating: 3, comment: "A bit too salty." },
    {id: 4, name: "Shio Ramen", restaurant: "Ramen-ya", image:"./images/pexels-xmtnguyen-2664216.jpg", rating: 4, comment: "Great!" },
 ]

// Function to display all ramen images in the #ramen-menu div
 function displayRamens() {
    const ramenMenu = document.getElementById('ramen-menu');
    ramens.forEach(ramen => {
      const img = document.createElement('img'); 
      img.src = ramen.image;
      img.alt = ramen.name;
      img.addEventListener('click', () => handleClick(ramen));
      ramenMenu.appendChild(img);
    });
  }
  function handleClick(ramen) {
    const ramenDetail = document.getElementById('ramen-detail');
    ramenDetail.innerHTML = `
      <img src="${ramen.image}" alt="${ramen.name}"/>
      <h2>${ramen.name}</h2>
      <h3>${ramen.restaurant}</h3>
      <p>Rating: ${ramen.rating}</p>
      <p>Comment: ${ramen.comment}</p>
    `;
  }
  displayRamens();
  
  function handleClick(ramen) {
    const detailImage = document.getElementById("detail-image"); 
    const detailName = document.getElementById("detail-name");
    const detailRestaurant = document.getElementById("detail-restaurant");
    const detailRating = document.getElementById("detail-rating");
    const detailComment = document.getElementById("detail-comment");
  
    detailImage.src = ramen.image;
    detailImage.alt = ramen.name;
    detailName.textContent = ramen.name;
    detailRestaurant.textContent = ramen.restaurant;
    detailRating.textContent = `Rating: ${ramen.rating}`;
    detailComment.textContent = `Comment: ${ramen.comment}`;
  }