// Get the search query from Google’s search URL
const urlParams = new URLSearchParams(window.location.search);
const query = urlParams.get("q");

if (query) {
    // Send the query to the background script for checking
    chrome.runtime.sendMessage({ action: "checkQuery", query: query });
}
