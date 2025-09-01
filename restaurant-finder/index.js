const restaurantList = document.getElementById('restaurantList');
const backBtn = document.getElementById('backBtn');
const restaurantCards = document.querySelectorAll('.restaurant-card');
const restaurantDetails = document.querySelectorAll('.restaurant-details');

// Add click event listeners to all restaurant cards
restaurantCards.forEach(card => {
  card.addEventListener('click', function() {
    const restaurantId = this.getAttribute('data-restaurant');
    showRestaurantDetails(restaurantId);
  });
});

// Add click event listener to back button
backBtn.addEventListener('click', showRestaurantList);

// Function to show restaurant details
function showRestaurantDetails(restaurantId) {
  // Hide restaurant list
  restaurantList.classList.add('hidden');
  
  // Hide all restaurant details
  restaurantDetails.forEach(detail => {
    detail.classList.add('hidden');
  });
  
  // Show selected restaurant details
  const selectedRestaurant = document.getElementById(restaurantId);
  selectedRestaurant.classList.remove('hidden');
  
  // Show back button
  backBtn.classList.remove('hidden');
  
  // Scroll to top
  window.scrollTo(0, 0);
}

// Function to show restaurant list
function showRestaurantList() {
  // Hide all restaurant details
  restaurantDetails.forEach(detail => {
    detail.classList.add('hidden');
  });
  
  // Show restaurant list
  restaurantList.classList.remove('hidden');
  
  // Hide back button
  backBtn.classList.add('hidden');
  
  // Scroll to top
  window.scrollTo(0, 0);
}

// Handle browser back button
window.addEventListener('popstate', function() {
  showRestaurantList();
});