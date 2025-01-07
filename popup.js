document.addEventListener("DOMContentLoaded", () => {
  const wordCountInput = document.getElementById("wordCount");
  const saveButton = document.getElementById("save");
  const status = document.getElementById("status");

  // Load the saved threshold value when the popup opens
  chrome.storage.sync.get({ wordCountThreshold: 3 }, (result) => {
    wordCountInput.value = result.wordCountThreshold;
  });

  // Save function
  const saveThreshold = () => {
    const newThreshold = parseInt(wordCountInput.value, 10);

    if (isNaN(newThreshold) || newThreshold < 1) {
      alert("Please enter a valid number greater than 0.");
      wordCountInput.focus();
      return;
    }

    chrome.storage.sync.set({ wordCountThreshold: newThreshold }, () => {
      // Show success message with animation
      status.style.display = "block";
      status.style.opacity = "1";

      // Hide success message after 2 seconds
      setTimeout(() => {
        status.style.opacity = "0";
        setTimeout(() => {
          status.style.display = "none";
        }, 300); // Wait for fade out animation to complete
      }, 2000);
    });
  };

  // Save when Enter key is pressed in the input field
  wordCountInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent form submission
      saveThreshold();
      wordCountInput.blur(); // Remove focus from input
    }
  });

  // Save when the Save button is clicked
  saveButton.addEventListener("click", saveThreshold);

  // Select all text when input is focused
  wordCountInput.addEventListener("focus", () => {
    wordCountInput.select();
  });
});
