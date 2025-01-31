const redirectedTabs = new Set();

chrome.runtime.onMessage.addListener((message, sender) => {
  if (message.action === "checkQuery") {
    const query = message.query.trim();

    // Retrieve the word count threshold from storage
    chrome.storage.sync.get({ wordCountThreshold: 3 }, (result) => {
      const wordCountThreshold = result.wordCountThreshold;

      const wordCount = query.split(/\s+/).length;

      // Check if the tab is already redirected
      if (redirectedTabs.has(sender.tab.id)) return;

      let redirectUrl;
      if (wordCount <= wordCountThreshold) {
        redirectUrl = `https://www.google.com/search?q=${encodeURIComponent(
          query
        )}`;
      } else {
        redirectUrl = `https://chatgpt.com/?q=${encodeURIComponent(
          query
        )}&hints=search`;
      }

      // Mark the tab as redirected and update the tab's URL
      redirectedTabs.add(sender.tab.id);
      chrome.tabs.update(sender.tab.id, { url: redirectUrl }, () => {
        setTimeout(() => {
          redirectedTabs.delete(sender.tab.id);
        }, 5000); // Clear after 5 seconds to avoid rapid redirections
      });
    });
  }
});
