let originalData = {
  name: "Walter White",
  location: "New Mexico, ABQ", 
  email: "walter52@gmail.com",
  bio: "Passionate about creating user-friendly web applications with modern technologies. 5+ years of experience in JavaScript, React, and Node.js. Love solving complex problems and contributing to open-source projects."
};

// Function to toggle between view and edit mode
function toggleEditMode() {
  const viewMode = document.getElementById('viewMode');
  const editMode = document.getElementById('editMode');
  
  viewMode.style.display = 'none';
  editMode.style.display = 'block';
  
  populateForm();
}

// Function to populate form with current data
function populateForm() {
  document.getElementById('editName').value = document.getElementById('displayName').textContent;
  document.getElementById('editLocation').value = document.getElementById('displayLocation').textContent;
  document.getElementById('editEmail').value = document.getElementById('displayEmail').textContent;
  document.getElementById('editBio').value = document.getElementById('displayBio').textContent;
}

// Function to cancel edit and return to view mode
function cancelEdit() {
  const viewMode = document.getElementById('viewMode');
  const editMode = document.getElementById('editMode');
  
  // Show view mode, hide edit mode
  viewMode.style.display = 'block';
  editMode.style.display = 'none';
  
  // Reset form to original values
  document.getElementById('profileForm').reset();
}

// Function to update profile picture initials
function updateProfilePicture(name) {
  const profilePicture = document.getElementById('profilePicture');
  const initials = name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
  profilePicture.textContent = initials;
}

// Function to show success message
function showSuccessMessage() {
  const successMessage = document.getElementById('successMessage');
  successMessage.style.display = 'block';
  
  // Hide after 3 seconds
  setTimeout(() => {
    successMessage.style.display = 'none';
  }, 3000);
}

// Handle form submission
document.getElementById('profileForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Get form data
  const name = document.getElementById('editName').value.trim();
  const location = document.getElementById('editLocation').value.trim();
  const email = document.getElementById('editEmail').value.trim();
  const bio = document.getElementById('editBio').value.trim();
  
  // Basic validation
  if (!name || !email) {
    alert('Name and Email are required fields!');
    return;
  }
  
  // Update display elements
  document.getElementById('displayName').textContent = name;
  document.getElementById('displayLocation').textContent = location || 'Location not specified';
  document.getElementById('displayEmail').textContent = email;
  document.getElementById('displayBio').textContent = bio || 'No bio provided';
  
  // Update profile picture initials
  updateProfilePicture(name);
  
  // Switch back to view mode
  document.getElementById('viewMode').style.display = 'block';
  document.getElementById('editMode').style.display = 'none';
  
  // Show success message
  showSuccessMessage();
  
  // Update original data for future cancels
  originalData = { name, location, email, bio };
  
  console.log('Profile updated:', { name, location, email, bio });
});

// Initialize profile picture on page load
window.addEventListener('load', function() {
  updateProfilePicture(originalData.name);
});