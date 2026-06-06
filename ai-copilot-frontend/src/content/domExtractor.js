console.log("Content Script Loaded");

function analyzeContext(pageData) {
  const wordCount =
    pageData.text?.split(/\s+/).filter(Boolean).length || 0;

  const audioElements =
    document.querySelectorAll("audio");

  const videoElements =
    document.querySelectorAll("video");

  const mediaElements = [
    ...audioElements,
    ...videoElements,
  ];

  const hasPlayingMedia = mediaElements.some(
    (el) => !el.paused
  );

  return {
    resourceType: document.contentType || "text/html",

    hasCode:
      document.querySelectorAll("pre, code").length > 0,

    hasForms:
      document.querySelectorAll("form").length > 0,

    hasTables:
      document.querySelectorAll("table").length > 0,

    hasImages:
      document.images.length > 0,

    hasVideo:
      videoElements.length > 0,

    hasAudio:
      audioElements.length > 0,

    hasMedia:
      mediaElements.length > 0,

    hasPlayingMedia,

    hasCanvas:
      document.querySelectorAll("canvas").length > 0,

    hasIframe:
      document.querySelectorAll("iframe").length > 0,

    hasInputs:
      document.querySelectorAll(
        "input, textarea, select"
      ).length > 0,

    wordCount,
  };
}

function getPageData() {
  const pageData = {
    title: document.title,
    url: window.location.href,
    text: document.body.innerText.slice(0, 5000),
  };

  return {
    ...pageData,
    context: analyzeContext(pageData),
  };
}

chrome.runtime.onMessage.addListener(
  (message, sender, sendResponse) => {
    if (message.type === "GET_PAGE_CONTEXT") {
      sendResponse(getPageData());
    }
  }
);