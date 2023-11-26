// script.js

document.addEventListener("DOMContentLoaded", function () {
    const welcomeText = document.getElementById('welcomeText');
  
    setTimeout(() => {
      welcomeText.style.opacity = 1;
    }, 5000);
  
    setTimeout(() => {
      welcomeText.style.opacity = 0;
    }, 10000);
  });
  