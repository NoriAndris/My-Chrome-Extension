// Define a function that uses the chrome object
function myFunction() {
  chrome.runtime.sendMessage("Hello from my extension!");
}

// Define a variable that references a property of the chrome object
const runtime = chrome.runtime;
