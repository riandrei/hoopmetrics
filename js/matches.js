const matches = document.getElementById('matches');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const matchesChildren = matches.children;
const columns = Math.floor(matches.clientWidth / 320);

let currentIndex = 0;

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

function showItems() {
  prevButton.style.opacity = `1`;
  nextButton.style.opacity = `1`;

  if (window.innerWidth > 820) {
    if (currentIndex === 0) {
      prevButton.style.opacity = `0.5`;
    }
    if (currentIndex >= matchesChildren.length - columns * 3) {
      nextButton.style.opacity = `0.5`;
    }

    for (let i = 0; i < matchesChildren.length; i++) {
      matchesChildren[i].style.display = 'none';
    }

    for (let i = currentIndex; i < currentIndex + columns * 3; i++) {
      if (matchesChildren[i]) {
        matchesChildren[i].style.display = 'flex';
      }
    }
    return;
  }

  if (currentIndex === 0) {
    prevButton.style.opacity = `0.5`;
  }
  if (currentIndex >= matchesChildren.length - 3) {
    nextButton.style.opacity = `0.5`;
  }

  for (let i = 0; i < matchesChildren.length; i++) {
    matchesChildren[i].style.display = 'none';
  }

  for (let i = currentIndex; i < currentIndex + 3; i++) {
    if (matchesChildren[i]) {
      matchesChildren[i].style.display = 'flex';
    }
  }
}

prevButton.addEventListener('click', function () {
  if (currentIndex === 0) {
    return;
  }

  if (window.innerWidth > 820) {
    currentIndex -= columns * 3;
    showItems();
    return;
  }

  currentIndex -= 3;
  showItems();
});

nextButton.addEventListener('click', function () {
  if (window.innerWidth > 820) {
    if (currentIndex >= matchesChildren.length - columns * 3) {
      return;
    }
    currentIndex += columns * 3;
    showItems();
    return;
  }

  if (currentIndex >= matchesChildren.length - 3) {
    return;
  }

  currentIndex += 3;
  showItems();
});

// Initial display
showItems();
