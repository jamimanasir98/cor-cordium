document.addEventListener("DOMContentLoaded", function () {
  const welcomeText = document.getElementById('welcomeText');
  const introText = document.getElementById('introText');
  const readyText = document.getElementById('readyText');
  const selectText = document.getElementById('selectText');
  const buttonList = document.getElementById('buttonList');

  // Fade in welcomeText
  setTimeout(() => {
    welcomeText.style.opacity = 1;

    // Fade out welcomeText after 2 seconds
    setTimeout(() => {
      welcomeText.style.opacity = 0;

      // Fade in introText after welcomeText fades out
      setTimeout(() => {
        introText.style.opacity = 1;

        // Fade out introText after 2 seconds
        setTimeout(() => {
          introText.style.opacity = 0;

          // Fade in readyText after introText fades out
          setTimeout(() => {
            readyText.style.opacity = 1;

            // Fade out readyText after 2 seconds
            setTimeout(() => {
              readyText.style.opacity = 0;

              // Fade in selectText after readyText fades out
              setTimeout(() => {
                selectText.style.opacity = 1;

                // Fade in buttonList after selectText fades in
                setTimeout(() => {
                  buttonList.style.opacity = 1;
                }, 2000);
              }, 2000);
            }, 2000);
          }, 2000);
        }, 2000);
      }, 2000);
    }, 2000);
  }, 2000);
});
