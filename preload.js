// preload.js

// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
// This script runs before the renderer process (your HTML page) is loaded.
// You can use it to securely expose a limited set of Node.js APIs to your
// renderer process. For this simple app, we don't need to expose anything,
// but it's good practice to have this file.
console.log("Preload script loaded.");
