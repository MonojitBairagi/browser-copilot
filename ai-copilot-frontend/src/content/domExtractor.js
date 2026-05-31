console.log("Content Script Loaded");

function getPageData() {
  return {
    title: document.title,
    url: window.location.href,
    text: document.body.innerText.slice(0, 3000),
  };
}

chrome.runtime.onMessage.addListener(
  (message, sender, sendResponse) => {
    if (message.type === "GET_PAGE_CONTEXT") {
      sendResponse(getPageData());
    }
  }
);