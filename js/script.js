// Initialize variables
let startingValue = 0;
let mouseDownAt = false;
let prevPercentage = 0;
let isDragging = false;

// Get DOM elements
const slider = document.querySelector('.slider');
const playerSlider = document.querySelector('.player-slider');
const teamPlayers = document.querySelector('.team-players');
const footerNumber = document.querySelector(`#footerNumber`);
const landingPage = document.querySelector(`.landing-page`);
const teamPage = document.querySelector(`.team-page`);
const sliderChildren = [...slider.children];
const observerRoot = document.querySelector(`.observer-root`);
const input = document.querySelector(`#searchBar`);
const header = document.querySelector(`header`);
const backToTop = document.querySelector('.back-to-top');
const backButton = document.querySelector(`.back-button`);

// Set up options for the intersection observer
const options = {
  root: observerRoot,
  threshold: 0,
  rootMargin: '0px'
};

// Set up the intersection observer
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      footerNumber.textContent = `${entry.target.dataset.order} — 30`;
    }
  });
}, options);

const anotherObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      // header is not in view, do something
      if (window.innerWidth > 820) {
        return;
      }
      backToTop.style.display = `block`;
    } else {
      backToTop.style.display = `none`;
    }
  });
});

anotherObserver.observe(header);

// Add event listeners
const mainSliderHandlers = createSliderHandlers(slider);
landingPage.addEventListener('mousedown', mainSliderHandlers.handleOnDown);
landingPage.addEventListener('mouseup', mainSliderHandlers.handleOnUp);
landingPage.addEventListener('mousemove', mainSliderHandlers.handleOnMove);

const playerSliderHandlers = createSliderHandlers(playerSlider);
teamPlayers.addEventListener('mousedown', playerSliderHandlers.handleOnDown);
teamPlayers.addEventListener('mouseup', playerSliderHandlers.handleOnUp);
teamPlayers.addEventListener('mousemove', playerSliderHandlers.handleOnMove);

input.addEventListener(`keyup`, handleOnSearch);
backButton.addEventListener('mousedown', outsideTeamClicked);
sliderChildren.forEach((child) => {
  child.addEventListener('mousedown', handleOnTeamMouseDown);

  observer.observe(child);
});
window.addEventListener('load', assignLink);

// Define event handlers
function createSliderHandlers(sliderElement) {
  let lastMouseDownTimestamp = 0;

  function handleOnDown(e) {
    const currentTimestamp = Date.now();
    if (currentTimestamp - lastMouseDownTimestamp > 300) {
      mouseDownAt = e.clientX;
      lastMouseDownTimestamp = currentTimestamp;
    }
  }

  function handleOnUp() {
    mouseDownAt = false;
    prevPercentage = sliderElement.dataset.percentage;
  }

  function handleOnMove(e) {
    if (!mouseDownAt) return;
    if (prevPercentage === undefined) {
      prevPercentage = 0;
    }
    const sliderStyle = getComputedStyle(sliderElement);

    const mouseDelta = mouseDownAt - e.clientX;
    const maxDelta = window.innerWidth * ((sliderStyle.gridTemplateColumns.split(' ').length - 1) / 14);
    const percentage = (mouseDelta / maxDelta) * -100;
    const nextPercentageUnconstrained = parseFloat(prevPercentage) + percentage;
    let nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

    // Animate the slider
    sliderElement.dataset.percentage = nextPercentage;
    if (sliderElement.className == 'slider') {
      sliderElement.animate(
        {
          transform: `translate(${nextPercentage}%, -50%)`
        },
        { duration: 3000, fill: 'forwards' }
      );
    }
    if (sliderElement.className == 'player-slider') {
      sliderElement.animate(
        {
          transform: `translateX(${nextPercentage}%)`
        },
        { duration: 3000, fill: 'forwards' }
      );
    }

    if (mouseDelta != 0) {
      sliderChildren.forEach((child) => {
        child.removeEventListener('mouseup', teamClicked);
      });
    }
  }

  return { handleOnDown, handleOnUp, handleOnMove };
}

function handleOnSearch() {
  let sliderColumns = 31;
  // Filter the teams based on the search input
  sliderChildren.forEach((child) => {
    if (!child.alt.includes(input.value.toLowerCase())) {
      child.style.display = 'none';
      if (window.innerWidth > 820) {
        slider.style.gridTemplateColumns = `repeat(${--sliderColumns - 1}, 1fr)`;
      }
      return;
    }
    child.style.display = 'block';
  });

  if (window.innerWidth > 820) {
    slider.style.gridTemplateColumns = `repeat(${--sliderColumns}, 1fr)`;

    slider.dataset.percentage = 0;
    slider.animate(
      {
        transform: `translate(${slider.dataset.percentage}%, -50%)`
      },
      { duration: 1000, fill: 'forwards' }
    );
  }

  // Change the color of the search input caret
  if (input.value === ``) {
    input.style.caretColor = `black`;
  } else {
    input.style.caretColor = `white`;
  }
}

function handleOnTeamMouseDown() {
  // Add a "mouseup" event listener to the clicked team
  this.addEventListener('mouseup', teamClicked);
}
function teamClicked(e) {
  const teamStats = document.querySelector(`.team-stats`);
  const teamAccolades = document.querySelector(`.team-accolades`);
  const websiteLogo = document.querySelector(`.website-logo`);
  const header = document.querySelector(`header`);

  header.style.animation = '';
  websiteLogo.style.animation = '';
  slider.style.animation = '';
  footer.style.animation = '';
  teamPage.style.display = 'flex';

  if (window.innerWidth > 820) {
    teamPage.style.zIndex = '1';
    teamPage.style.animation = `team-scale-out-hor-left 0.75s cubic-bezier(0.55, 0.085, 0.68, 0.53) both`;
    landingPage.style.animation = `scale-out-hor-left 0.75s cubic-bezier(0.55, 0.085, 0.68, 0.53) both`;
  }

  landingPage.style.display = 'none';
  landingPage.style.opacity = '0';
  teamPage.style.opacity = '1';

  teamStats.style.backgroundColor = `#${e.target.dataset.color}`;
  teamAccolades.style.backgroundColor = `#${e.target.dataset.color}`;
  teamPlayers.style.backgroundColor = `#${e.target.dataset.color}`;

  setTeamDetails(teamData[e.target.dataset.order - 1]);
}

function outsideTeamClicked(e) {
  const teamStats = document.querySelector(`.team-stats`);
  const teamAccolades = document.querySelector(`.team-accolades`);

  landingPage.style.display = 'flex';

  if (window.innerWidth > 820) {
    teamPage.style.zIndex = '-1';
    teamPage.style.animation = `team-scale-out-hor-right 0.75s cubic-bezier(0.55, 0.085, 0.68, 0.53) both`;
    landingPage.style.animation = `scale-out-hor-right 0.75s cubic-bezier(0.55, 0.085, 0.68, 0.53) both`;
  }
  teamPage.style.display = 'none';

  landingPage.style.opacity = '1';
  teamPage.style.opacity = '0';

  playerSlider.dataset.percentage = 0;
  playerSlider.animate(
    {
      transform: `translateX(${playerSlider.dataset.percentage}%)`
    },
    { duration: 1000, fill: 'forwards' }
  );

  while (playerSlider.firstChild) {
    playerSlider.removeChild(playerSlider.firstChild);
  }
}

function setTeamDetails(teamData) {
  const teamName = document.querySelector(`.team-name`);

  const teamLogo = document.querySelector(`#teamLogo`);
  const seasonRecord = document.querySelector(`#seasonRecord`);
  const seasonStanding = document.querySelector(`#seasonStanding`);
  const seasonStandingConference = document.querySelector(`#seasonStandingConference`);
  const teamPoints = document.querySelector(`#teamPoints`);
  const teamAssists = document.querySelector(`#teamAssists`);
  const teamRebounds = document.querySelector(`#teamRebounds`);
  const teamSteals = document.querySelector(`#teamSteals`);
  const teamBlocks = document.querySelector(`#teamBlocks`);
  const teamFgp = document.querySelector(`#teamFgp`);

  const teamChampionships = document.querySelector(`#teamChampionships`);
  const teamCChampionships = document.querySelector(`#teamCChampionships`);
  const teamDivisions = document.querySelector(`#teamDivisions`);
  const teamPlayoffs = document.querySelector(`#teamPlayoffs`);

  teamName.textContent = teamData.team_name;

  teamLogo.src = teamData.team_img;
  seasonRecord.textContent = `${teamData.stats.team_wins} - ${teamData.stats.team_losses}`;
  teamPoints.textContent = `${teamData.stats.team_pts}`;
  teamAssists.textContent = `${teamData.stats.team_ast}`;
  teamRebounds.textContent = `${teamData.stats.team_reb}`;
  teamSteals.textContent = `${teamData.stats.team_stl}`;
  teamBlocks.textContent = `${teamData.stats.team_blk}`;
  teamFgp.textContent = `${(teamData.stats.team_fg_pct * 100).toFixed(1)}`;
  seasonStandingConference.textContent = `${teamData.team_conference}ern Conference`;
  if (teamData.stats.team_rank > 3) {
    seasonStanding.textContent = `${teamData.stats.team_rank}th`;
  } else if (teamData.stats.team_rank == 3) {
    seasonStanding.textContent = `${teamData.stats.team_rank}rd`;
  } else if (teamData.stats.team_rank == 2) {
    seasonStanding.textContent = `${teamData.stats.team_rank}nd`;
  } else if (teamData.stats.team_rank == 1) {
    seasonStanding.textContent = `${teamData.stats.team_rank}st`;
  }

  teamChampionships.textContent = `${teamData.accolades.team_championships}`;
  teamCChampionships.textContent = `${teamData.accolades.team_conference_championships}`;
  teamDivisions.textContent = `${teamData.accolades.team_divisions}`;
  teamPlayoffs.textContent = `${teamData.accolades.team_playoffs}`;

  setPlayerDetails(teamData);
}

function setPlayerDetails(teamData) {
  teamData.players.forEach((player) => {
    // Create the list item
    const li = document.createElement('li');

    // Create the player image
    const img = document.createElement('img');
    img.src = `${player.player_img}`;
    img.alt = 'player-headshot';

    // Create the player name element
    const nameDiv = document.createElement('div');
    nameDiv.className = 'player-name';

    const firstName = document.createElement('p');
    firstName.textContent = `${player.player_first_name}`;

    const lastName = document.createElement('p');
    lastName.textContent = `${player.player_last_name}`;

    if (player.player_last_name.length > 8) {
      lastName.textContent = `${player.player_last_name.slice(0, 7)}...`;
    }

    nameDiv.appendChild(firstName);
    nameDiv.appendChild(lastName);

    // Create the player points element
    const pointsDiv = document.createElement('div');
    pointsDiv.className = 'player-points';

    const pointsTitle = document.createElement('p');
    pointsTitle.textContent = 'PPG';

    const pointsValue = document.createElement('p');
    pointsValue.textContent = `${player.player_ppg}`;

    pointsDiv.appendChild(pointsTitle);
    pointsDiv.appendChild(pointsValue);

    // Create the player assists element
    const assistsDiv = document.createElement('div');
    assistsDiv.className = 'player-assists';

    const assistsTitle = document.createElement('p');
    assistsTitle.textContent = 'APG';

    const assistsValue = document.createElement('p');
    assistsValue.textContent = `${player.player_apg}`;

    assistsDiv.appendChild(assistsTitle);
    assistsDiv.appendChild(assistsValue);

    // Create the player rebounds element
    const reboundsDiv = document.createElement('div');
    reboundsDiv.className = 'player-rebounds';

    const reboundsTitle = document.createElement('p');
    reboundsTitle.textContent = 'RPG';

    const reboundsValue = document.createElement('p');
    reboundsValue.textContent = `${player.player_rpg}`;

    reboundsDiv.appendChild(reboundsTitle);
    reboundsDiv.appendChild(reboundsValue);

    // Add all the elements to the list item
    li.appendChild(img);
    li.appendChild(nameDiv);
    li.appendChild(pointsDiv);
    li.appendChild(assistsDiv);
    li.appendChild(reboundsDiv);

    // Add the list item to the document
    const playerList = document.querySelector('#player-list');
    playerList.appendChild(li);
  });
}

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
