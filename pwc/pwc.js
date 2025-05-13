// Form Validation for Login
document.querySelector('.login form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission
  
    let username = document.querySelector('#username').value;
    let password = document.querySelector('#password').value;
    
    if (username === '' || password === '') {
      alert('Both username and password are required!');
    } else {
      alert('Login Successful!');
      // Redirect to dashboard or another page
      window.location.href = 'dashboard.html'; 
    }
  });
  
  // Course List Toggle
  const courseItems = document.querySelectorAll('.course-item');
  courseItems.forEach(item => {
    item.addEventListener('click', () => {
      const courseDetails = item.querySelector('p');
      courseDetails.classList.toggle('hidden'); // Toggle course details on click
    });
  });
  
  // Adding a "hidden" class for the course details to hide them initially
  document.addEventListener('DOMContentLoaded', function() {
    const courseDetails = document.querySelectorAll('.course-item p');
    courseDetails.forEach(detail => {
      detail.classList.add('hidden');
    });
  });
  
  // Dashboard Course Progress
  document.querySelectorAll('.course-progress').forEach(progress => {
    let progressBar = progress.querySelector('.progress-bar');
    let progressValue = progress.getAttribute('data-progress'); // Get the progress from data attribute
    progressBar.style.width = `${progressValue}%`; // Set the progress bar width
  });
  
  // Toggle Dark/Light Mode
  document.querySelector('#toggle-theme').addEventListener('click', function () {
    document.body.classList.toggle('dark-theme');
  });
  
  // Simple Toggle Function for Course Progress
  document.querySelectorAll('.course-item a').forEach(button => {
    button.addEventListener('click', function (e) {
      e.preventDefault(); // Prevent default link behavior
      let progress = Math.floor(Math.random() * 100); // Simulate random progress
      let progressBar = button.closest('.course-item').querySelector('.progress-bar');
      progressBar.style.width = `${progress}%`;
      alert(`Progress set to ${progress}%`);
    });
  });
  