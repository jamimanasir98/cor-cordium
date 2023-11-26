document.addEventListener("DOMContentLoaded", function () {
  const welcomeText = document.getElementById('welcomeText');
  const introText = document.getElementById('introText');
  const readyText = document.getElementById('readyText');
  const selectText = document.getElementById('selectText');
  const listItems = document.querySelectorAll("#fade-in-list li");
  const poetryButton = document.getElementById('poetryButton');
  const lettersButton = document.getElementById('lettersButton');
  const delusionsButton = document.getElementById('delusionsButton');
  const endingButton = document.getElementById('endingButton');
  const additionalText = document.getElementById('additionalText');

  // Function to fade in an element
  const fadeIn = (element, duration) => {
    setTimeout(() => {
      element.style.opacity = 1;
    }, duration);
  };

  // Function to fade out an element
  const fadeOut = (element, duration) => {
    setTimeout(() => {
      element.style.opacity = 0;
    }, duration);
  };

  // Function to toggle visibility of elements
  const toggleVisibility = (visibleElement, hiddenElement) => {
    visibleElement.style.opacity = 1;
    hiddenElement.style.opacity = 0;
  };

  // Fade in and out welcomeText
  fadeIn(welcomeText, 2000);
  fadeOut(welcomeText, 4000);

  // Fade in and out introText
  fadeIn(introText, 6000);
  fadeOut(introText, 8000);

  // Fade in and out readyText
  fadeIn(readyText, 10000);
  fadeOut(readyText, 12000);

  // Fade in selectText
  fadeIn(selectText, 14000);

  // Function to add the fade-in effect to each list item
  function fadeInItems() {
    listItems.forEach((item, index) => {
      setTimeout(() => {
        item.style.opacity = 1;
        item.style.transform = "translateY(0)";
      }, index * 100); // Adjust the delay as needed
    });
  }

  // Trigger the fade-in effect for list items after 16000 ms
  setTimeout(() => {
    fadeInItems();
  }, 16000);

  // Add click event listeners to the buttons
  poetryButton.addEventListener('click', function () {
    fadeOut(selectText, 500);
    listItems.forEach((item) => {
      fadeOut(item, 500);
    });
    toggleVisibility(additionalText, poetryButton);
  });

  lettersButton.addEventListener('click', function () {
    // Add logic for the lettersButton click event
  });

  delusionsButton.addEventListener('click', function () {
    // Add logic for the delusionsButton click event
  });

  endingButton.addEventListener('click', function () {
    // Add logic for the endingButton click event
  });
});
