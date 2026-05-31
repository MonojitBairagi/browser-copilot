console.log("Service Worker Running");

chrome.runtime.onInstalled.addListener(() => {
  console.log("Extension Installed");
});