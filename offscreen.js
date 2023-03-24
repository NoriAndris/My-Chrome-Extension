const audio = document.getElementById("offscreen-audio");

chrome.runtime.onMessage.addListener(function(message) {
  switch (message) {
    case "play":
      audio.play();
      break;
    case "pause":
      audio.pause();
      break;
  }
});

// Load the audio when the page is loaded
audio.load();
