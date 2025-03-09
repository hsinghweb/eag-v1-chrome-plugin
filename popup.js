// Update UI based on storage state
function updateUI() {
  chrome.storage.local.get(['loading', 'lastWord', 'explanation'], (data) => {
    const wordElement = document.getElementById('word');
    const loadingElement = document.querySelector('.loading');
    const explanationElement = document.getElementById('explanation');

    // Update loading state
    if (data.loading) {
      loadingElement.classList.add('active');
      explanationElement.textContent = '';
    } else {
      loadingElement.classList.remove('active');
    }

    // Update word and explanation
    if (data.lastWord) {
      wordElement.textContent = data.lastWord;
      if (!data.loading && data.explanation) {
        explanationElement.textContent = data.explanation;
      }
    }
  });
}

// Listen for storage changes
chrome.storage.onChanged.addListener((changes, namespace) => {
  if (namespace === 'local') {
    updateUI();
  }
});

// Initial UI update
updateUI();