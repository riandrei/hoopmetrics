document.addEventListener('DOMContentLoaded', function () {
  const playoffBracketContainer = document.querySelector(`main`);

  let isDragging = false;
  let startPosition = 0;
  let startScrollLeft = 0;

  playoffBracketContainer.addEventListener('wheel', function (event) {
    event.preventDefault();
    const scrollAmount = event.deltaY || event.deltaX;
    playoffBracketContainer.scrollLeft += scrollAmount;
  });

  // Start dragging
  playoffBracketContainer.addEventListener('mousedown', function (event) {
    isDragging = true;
    startPosition = event.pageX;
    startScrollLeft = playoffBracketContainer.scrollLeft;
  });

  // Dragging
  document.addEventListener('mousemove', function (event) {
    if (isDragging) {
      const distance = event.pageX - startPosition;
      playoffBracketContainer.scrollLeft = startScrollLeft - distance;
    }
  });

  // Stop dragging
  document.addEventListener('mouseup', function () {
    isDragging = false;
  });
});

window.addEventListener('load', assignLink);

function assignLink() {
  const gmailLink = document.getElementById('gmailLink');
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  if (isMobile) {
    // Set the href to a mailto link for mobile devices
    gmailLink.href = 'mailto:202110056@gordoncollege.edu.ph';
  } else {
    // Set the href to a Gmail link for desktop devices
    gmailLink.href = 'https://mail.google.com/mail/?view=cm&to=202110056@gordoncollege.edu.ph';
  }
}
