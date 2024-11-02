const redirectedTabs = new Set();

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "checkQuery") {
        const query = message.query;

       
        // Check if this tab has already been redirected
        if (redirectedTabs.has(sender.tab.id)) {
            return;
        }
    
        // Check query length
        const wordCount = query.trim().split(/\s+/).length;
        let redirectUrl;
    
        if (wordCount <= 3) {
            // Redirect to Google for queries with fewer than 3 words
            redirectUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
        } else {
            // Redirect to ChatGPT for queries with 3 or more words
            redirectUrl = `https://chatgpt.com/?q=${encodeURIComponent(query)}&hints=search`;
        }

        // Mark this tab as redirected to avoid a loop
        redirectedTabs.add(sender.tab.id);
    
        // Update the current tab with the chosen URL
        chrome.tabs.update(sender.tab.id, { url: redirectUrl });
        
        // Update the current tab with the chosen URL
        chrome.tabs.update(sender.tab.id, { url: redirectUrl }, () => {
            // Remove the tab from the set after redirection to allow new searches in the future
            setTimeout(() => {
            redirectedTabs.delete(sender.tab.id);
            }, 1000);  // 1-second delay for cleanup
        });
    }

});