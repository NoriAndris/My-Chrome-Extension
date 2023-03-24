// Get references to the play and pause buttons
const playButton = document.getElementById("play");
const pauseButton = document.getElementById("pause");

// Add click event listeners to the buttons
playButton.onclick = function() {
  chrome.runtime.sendMessage("play");
};

pauseButton.onclick = function() {
  chrome.runtime.sendMessage("pause");
};
