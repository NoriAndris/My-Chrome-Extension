chrome.runtime.onMessage.addListener(function(message) {
  switch (message) {
    case "play":
      // Create a new offscreen document with the URL of the audio file
      chrome.offscreen.createDocument({
        url: chrome.runtime.getURL("audio.html"),
        // Specify the reason for creating the offscreen document
        reasons: ["AUDIO_PLAYBACK"],
        justification: "Audio playback is required."
      }, function() {
        // Send a message to the background script to play the audio
        chrome.runtime.sendMessage("play");
      });
      break;
    case "pause":
      // Send a message to the background script to pause the audio
      chrome.runtime.sendMessage("pause");
      break;
  }
});
