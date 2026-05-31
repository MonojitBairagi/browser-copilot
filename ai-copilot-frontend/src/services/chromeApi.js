export async function getCurrentPage() {
  const [tab] = await chrome.tabs.query({
    active: true,
    currentWindow: true,
  });

  return new Promise((resolve, reject) => {
    chrome.tabs.sendMessage(
      tab.id,
      { type: "GET_PAGE_CONTEXT" },
      (response) => {
        if (chrome.runtime.lastError) {
          reject(chrome.runtime.lastError);
          return;
        }

        resolve(response);
      }
    );
  });
}