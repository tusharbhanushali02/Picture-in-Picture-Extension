chrome.action.onClicked.addListener((tab) => {
  chrome.storage.sync.get({ optOutAnalytics: false }, (results) => {
    const files = results.optOutAnalytics
      ? ["script.js"]
      : ["script.js", "ga.js"];
    chrome.scripting.executeScript({
      target: { tabId: tab.id, allFrames: true },
      world: "MAIN",
      files,
    });
  });
});
